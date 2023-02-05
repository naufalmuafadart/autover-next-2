import React from 'react';
import { SVGProps } from '@/services/dataTypes/props';

export default function LoginSVG(props: SVGProps) {
  const {
    color,
  } = props;
  return (
    <svg
      className="svg-icon"
      width="36"
      height="36"
      viewBox="0 0 1000 1000"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M426.666667 736V597.333333H128v-170.666666h298.666667V288L650.666667 512 426.666667 736M341.333333 85.333333h384a85.333333 85.333333 0 0 1 85.333334 85.333334v682.666666a85.333333 85.333333 0 0 1-85.333334 85.333334H341.333333a85.333333 85.333333 0 0 1-85.333333-85.333334v-170.666666h85.333333v170.666666h384V170.666667H341.333333v170.666666H256V170.666667a85.333333 85.333333 0 0 1 85.333333-85.333334z"
        fill={color}
      />
    </svg>
  );
}
