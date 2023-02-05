import React from 'react';
import { SVGProps } from '@/services/dataTypes/props';

export default function LogoutSVG(props: SVGProps) {
  const {
    color,
  } = props;
  return (
    <svg
      className="svg-icon"
      width="36"
      height="36"
      viewBox="0 0 1024 1024"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M725.333333 736V597.333333h-298.666666v-170.666666h298.666666V288L949.333333 512 725.333333 736M554.666667 85.333333a85.333333 85.333333 0 0 1 85.333333 85.333334v170.666666h-85.333333V170.666667H170.666667v682.666666h384v-170.666666h85.333333v170.666666a85.333333 85.333333 0 0 1-85.333333 85.333334H170.666667a85.333333 85.333333 0 0 1-85.333334-85.333334V170.666667a85.333333 85.333333 0 0 1 85.333334-85.333334h384z"
        fill={color}
      />
    </svg>
  );
}
