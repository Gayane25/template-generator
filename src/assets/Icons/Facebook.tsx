import React from 'react';

import { ISvgProps } from '.';

const Facebook = ({ width = '30', height = '30' }:ISvgProps):React.ReactElement => {
  return (
    <svg width={width} height={height} viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M3.125 15C3.125 9.40207 3.125 6.60311 4.86405 4.86405C6.60311 3.125 9.40207 3.125 15 3.125C20.5979 3.125 23.3969 3.125 25.136 4.86405C26.875 6.60311 26.875 9.40207 26.875 15C26.875 20.5979 26.875 23.3969 25.136 25.136C23.3969 26.875 20.5979 26.875 15 26.875C9.40207 26.875 6.60311 26.875 4.86405 25.136C3.125 23.3969 3.125 20.5979 3.125 15Z" stroke="black" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M21.1582 10.033H17.477C16.1723 10.033 15.1118 11.0856 15.1022 12.3904L14.9955 26.7835M12.6025 17.5021H18.6059" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
};

export default Facebook;
