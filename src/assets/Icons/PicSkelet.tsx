import React from 'react';

import { ISvgProps } from '.';

const PicSkelet = ({ width = '21', height = '20', fill = '#9CB0C9' }:ISvgProps):React.ReactElement => {
  return (
    <svg width={width} height={height} viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M20.5 17.7778V2.22222C20.5 1 19.5 0 18.2778 0H2.72222C1.5 0 0.5 1 0.5 2.22222V17.7778C0.5 19 1.5 20 2.72222 20H18.2778C19.5 20 20.5 19 20.5 17.7778ZM6.61111 11.6667L9.38889 15.0111L13.2778 10L18.2778 16.6667H2.72222L6.61111 11.6667Z" fill={fill} />
    </svg>
  );
};

export default PicSkelet;
