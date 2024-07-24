import React from 'react';

import { ISvgProps } from '.';

const Instagram = ({ width = '30', height = '30' }:ISvgProps):React.ReactElement => {
  return (
    <svg width={width} height={height} viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M3.125 15C3.125 9.40207 3.125 6.60311 4.86405 4.86405C6.60311 3.125 9.40207 3.125 15 3.125C20.5979 3.125 23.3969 3.125 25.136 4.86405C26.875 6.60311 26.875 9.40207 26.875 15C26.875 20.5979 26.875 23.3969 25.136 25.136C23.3969 26.875 20.5979 26.875 15 26.875C9.40207 26.875 6.60311 26.875 4.86405 25.136C3.125 23.3969 3.125 20.5979 3.125 15Z" stroke="black" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M20.625 15C20.625 18.1066 18.1066 20.625 15 20.625C11.8934 20.625 9.375 18.1066 9.375 15C9.375 11.8934 11.8934 9.375 15 9.375C18.1066 9.375 20.625 11.8934 20.625 15Z" stroke="black" strokeWidth="1.5" />
      <path d="M21.8848 8.125H21.8735" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
};

export default Instagram;
