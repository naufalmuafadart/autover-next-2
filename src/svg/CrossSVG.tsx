import React from 'react';
import { SVGProps } from '@/services/dataTypes/props';

export default function CrossSVG(props: Partial<SVGProps>) {
  const { color, classItem, onClick } = props;
  return (
    <svg
      className={classItem}
      width="36"
      height="36"
      viewBox="0 0 22 24"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
      onClick={onClick}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.46967 5.46967C5.76256 5.17678 6.23744 5.17678 6.53033 5.46967L18.5303 17.4697C18.8232 17.7626 18.8232 18.2374 18.5303 18.5303C18.2374 18.8232 17.7626 18.8232 17.4697 18.5303L5.46967 6.53033C5.17678 6.23744 5.17678 5.76256 5.46967 5.46967Z"
        fill="#000000"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18.5303 5.46967C18.8232 5.76256 18.8232 6.23744 18.5303 6.53033L6.53035 18.5303C6.23745 18.8232 5.76258 18.8232 5.46969 18.5303C5.17679 18.2374 5.17679 17.7626 5.46968 17.4697L17.4697 5.46967C17.7626 5.17678 18.2374 5.17678 18.5303 5.46967Z"
        fill="#000000"
      />
    </svg>
  );
}
