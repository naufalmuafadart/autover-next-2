import React from 'react';
import { SVGProps } from '@/services/dataTypes/props';

export default function Menu2SVG(props: Partial<SVGProps>) {
  const {
    color, classItem = '', onMouseEnter = () => {}, onClick = () => {},
  } = props;
  return (
    <svg
      className={classItem}
      onMouseEnter={onMouseEnter}
      onClick={onClick}
      fill={color}
      width="36"
      height="36"
      viewBox="0 0 22 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4 6H20M4 12H20M4 18H20"
        stroke="#4A5568"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
}
