import React from 'react';

import { ISvgProps } from '.';

const Twitter = ({ width = '30', height = '30' }:ISvgProps):React.ReactElement => {
  return (
    <svg width={width} height={height} viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M2.5 23.125C4.7063 24.4013 7.26785 25 10 25C18.101 25 24.7021 18.5781 24.9903 10.5475L27.5 5.625L23.3072 6.25C22.4259 5.47205 21.268 5 20 5C16.7845 5 14.3759 8.14667 15.1511 11.225C10.7098 11.5116 6.68584 8.77662 4.35866 5.13154C2.81434 10.3773 4.24536 16.6951 8.125 20.5881C8.125 22.0588 4.375 22.936 2.5 23.125Z" stroke="black" strokeWidth="1.5" strokeLinejoin="round" />
    </svg>
  );
};

export default Twitter;
