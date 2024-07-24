import React from 'react';

import { useAppContext } from 'context/context';

import { useStyles } from './SelectBox.styles';

export type ITypes = {
  type?: 'left-align' | 'center-align' | 'right-align' | 'single-image-grid' | 'two-images-grid' | 'slider-grid';
  component?: React.ReactElement;
}

export const SelectBox = ({ type, component }:ITypes):React.ReactElement => {
  const classes = useStyles();
  const { selectedTemplate, setSelectedTemplate } = useAppContext();

  const onChange = React.useCallback((event:React.ChangeEvent<HTMLInputElement>) => {
    return setSelectedTemplate(event.target.value as ITypes);
  }, [setSelectedTemplate]);

  return (
    <div className={classes.root}>
      <input type="radio" name="radio" id={type} checked={selectedTemplate === type} value={type} onChange={onChange} />
      <label htmlFor={type}>
        {component}
      </label>
    </div>
  );
};

export default SelectBox;
