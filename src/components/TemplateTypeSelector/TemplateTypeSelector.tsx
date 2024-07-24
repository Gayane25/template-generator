import React from 'react';

import ReactDOMServer from 'react-dom/server';
import { LayoutType } from 'utils/types';
import { useAppContext } from 'context/context';
import { ITypes, SelectBox } from 'components/SelectBox';
import { SignatureTemplate } from 'components/SignatureTemplate';
import DownloadingFile from 'utils/exportHTML';
import { PageTemplate } from 'components/PageTemplate';
import LeftLayout from 'assets/templates-svg/SignatureTypes/Left';
import CenterLayout from 'assets/templates-svg/SignatureTypes/Center';
import RightLayout from 'assets/templates-svg/SignatureTypes/Right';
import SingleImage from 'assets/templates-svg/PagesTypes/SingleImage';
import TwoImagesGrid from 'assets/templates-svg/PagesTypes/TwoImagesGrid';
import SliderGrid from 'assets/templates-svg/PagesTypes/SliderGrid';
import { COLORS } from 'styles/colors';

import { useStyles } from './TemplateTypeSelector.styles';

interface ITemplateType {
    selectedLayout?: LayoutType;
}

const TemplateTypeSelector:React.FC<ITemplateType> = ({ selectedLayout }) => {
  const classes = useStyles();
  const { selectedTemplate } = useAppContext();
  const renderSignatureTemplates = () => {
    if (selectedLayout === 'signatureLayout') {
      switch (selectedTemplate) {
        case 'left-align' as ITypes: return <SignatureTemplate type="left-align" />;

        case 'center-align'as ITypes: return <SignatureTemplate type="center-align" />;

        case 'right-align' as ITypes: return <SignatureTemplate type="right-align" />;

        default: return <SignatureTemplate type="left-align" />;
      }
    }

    if (selectedLayout === 'pageLayout') {
      switch (selectedTemplate) {
        case 'single-image-grid' as ITypes: return <PageTemplate pageTemlateType="single-image-grid" />;
        case 'two-images-grid' as ITypes: return <PageTemplate pageTemlateType="two-images-grid" />;
        case 'slider-grid' as ITypes: return <PageTemplate pageTemlateType="slider-grid" />;
        default: return <PageTemplate pageTemlateType="single-image-grid" />;
      }
    }
  };

  const result = renderSignatureTemplates();
  const componentString = ReactDOMServer.renderToStaticMarkup(result);
  return (

    <>
      <h4>Template Types</h4>

      <div style={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
        {selectedLayout === 'signatureLayout' && (
        <>
          <SelectBox type="left-align" component={<LeftLayout fill={selectedTemplate === 'left-align' as ITypes ? COLORS.checked : COLORS.unchecked} stroke={selectedTemplate === 'left-align' as ITypes ? COLORS.strokeChecked : COLORS.strokeUnchecked} />} />
          <SelectBox type="center-align" component={<CenterLayout fill={selectedTemplate === 'center-align' as ITypes ? COLORS.checked : COLORS.unchecked} stroke={selectedTemplate === 'center-align' as ITypes ? COLORS.strokeChecked : COLORS.strokeUnchecked} />} />
          <SelectBox type="right-align" component={<RightLayout fill={selectedTemplate === 'right-align' as ITypes ? COLORS.checked : COLORS.unchecked} stroke={selectedTemplate === 'right-align' as ITypes ? COLORS.strokeChecked : COLORS.strokeUnchecked} />} />
        </>
        )}

        {selectedLayout === 'pageLayout' &&
    (
    <>
      <SelectBox type="single-image-grid" component={<SingleImage fill={selectedTemplate === 'single-image-grid' as ITypes ? COLORS.checked : COLORS.unchecked} stroke={selectedTemplate === 'single-image-grid' as ITypes ? COLORS.strokeChecked : COLORS.strokeUnchecked} />} />
      <SelectBox type="two-images-grid" component={<TwoImagesGrid fill={selectedTemplate === 'two-images-grid' as ITypes ? COLORS.checked : COLORS.unchecked} stroke={selectedTemplate === 'two-images-grid' as ITypes ? COLORS.strokeChecked : COLORS.strokeUnchecked} />} />
      <SelectBox type="slider-grid" component={<SliderGrid fill={selectedTemplate === 'slider-grid' as ITypes ? COLORS.checked : COLORS.unchecked} stroke={selectedTemplate === 'slider-grid' as ITypes ? COLORS.strokeChecked : COLORS.strokeUnchecked} />} />
    </>
    )}
      </div>
      <div>
        {result}

        {result && <button className={classes.exportButton} onClick={() => DownloadingFile(componentString)}>Export HTML</button>}
      </div>
    </>
  );
};

export default TemplateTypeSelector;
