import React from 'react';
import { SVGProps } from '@/services/dataTypes/props';

export default function WalletSVG(props: SVGProps) {
  const { color } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="36"
      height="36"
      viewBox="0 0 31 31"
      fill={color}
    >
      <g data-name="wallet">
        <path
          d="M26.42,9,20.26,3.76a2,2,0,0,0-2.5-.08l-2.67,2L13.41,4a2,2,0,0,0-2.82,0l-5,5.05A3,3,0,0,0,3,12V26a3,3,0,0,0,3,3H26a3,3,0,0,0,3-3V12A3,3,0,0,0,26.42,9ZM27,21H25a2,2,0,0,1,0-4h2ZM19,5.28,23.3,9H18.41L16.52,7.11Zm-7,.13L15.59,9H8.41ZM26,27H6a1,1,0,0,1-1-1V12a1,1,0,0,1,1-1H26a1,1,0,0,1,1,1v3H25a4,4,0,0,0,0,8h2v3A1,1,0,0,1,26,27Z"
        />
        <path
          d="M24.29,18.29A1.05,1.05,0,0,0,24,19a1,1,0,1,0,2,0,1,1,0,0,0-1.71-.71Z"
        />
      </g>
    </svg>
  );
}
