import React from 'react';
import { SVGProps } from '@/services/dataTypes/props';

export default function MenuSVG(props: SVGProps) {
  const { color } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="36"
      height="36"
      viewBox="0 0 22 22"
      fill={color}
    >
      <path
        fillRule="evenodd"
        d="M17.85 11H14.7c-1.74 0-3.15 1.343-3.15 3v3c0 1.657 1.41 3 3.15 3h3.15c1.74 0 3.15-1.343 3.15-3v-3c0-1.657-1.41-3-3.15-3M6.3 11H3.15C1.41 11 0 12.343 0 14v3c0 1.657 1.41 3 3.15 3H6.3c1.74 0 3.15-1.343 3.15-3v-3c0-1.657-1.41-3-3.15-3M17.85 0H14.7c-1.74 0-3.15 1.343-3.15 3v3c0 1.657 1.41 3 3.15 3h3.15C19.59 9 21 7.657 21 6V3c0-1.657-1.41-3-3.15-3m-8.4 3v3c0 1.657-1.41 3-3.15 3H3.15C1.41 9 0 7.657 0 6V3c0-1.657 1.41-3 3.15-3H6.3c1.74 0 3.15 1.343 3.15 3"
      />
    </svg>
  );
}
