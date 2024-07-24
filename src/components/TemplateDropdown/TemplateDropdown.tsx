import React from 'react';

import { useStyles } from './TemplateDropdown.styles';
import { useAppContext } from '../../context/context';
import { LayoutType } from '../../utils/types';

interface Option {
  label:string;
  value:string;
}

interface DropdownProps {
  options?:Option[];
  onSelect?:(value:string)=>void;
}

const TemplateDropdown:React.FC<DropdownProps> = () => {
  const classes = useStyles();

  const optionsData: Option[] = [
    { label: 'Select Template', value: '' },
    { label: 'Email Signature Layout', value: 'signatureLayout' },
    { label: 'Page Layout', value: 'pageLayout' },
  ];

  const { setSelectedLayout } = useAppContext();

  const handleSelect = (event:React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedLayout(event.target.value as LayoutType);
  };

  const options = optionsData.map((option) => (
    <option key={option.label} value={option.value}>{option.label}</option>));

  return (
    <div className={classes.root}>
      <select name="templates" id="template-select" className={classes.select} onChange={handleSelect}>
        {options}
      </select>
    </div>
  );
};

export default TemplateDropdown;
