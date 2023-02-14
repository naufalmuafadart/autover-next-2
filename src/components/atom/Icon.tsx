import React from 'react';
import Image from 'next/image';
import cx from 'classnames';

interface IconProps {
  icon: string;
  classItem?: string;
  isDisplayed?: boolean;
  onMouseEnter?: () => void;
  withBorder?: boolean;
}

export default function Icon(props: Partial<IconProps>) {
  const {
    icon,
    classItem = '',
    isDisplayed = true,
    onMouseEnter = () => {},
    withBorder = false,
  } = props;

  const customClassItem = cx({
    'd-none': !isDisplayed,
  });

  const withBorderStyle = {
    border: '',
    borderRadius: '',
    padding: '',
  };

  if (withBorder) {
    withBorderStyle.border = '1px solid black';
    withBorderStyle.borderRadius = '5px';
    withBorderStyle.padding = '3px';
  }

  const endPoint = process.env.NEXT_PUBLIC_NEXT_END_POINT;

  return (
    <Image
      src={`${endPoint}/images/icon/ic_${icon}.png`}
      alt="Icon"
      width={36}
      height={36}
      className={`${classItem} ${customClassItem}`}
      onMouseEnter={onMouseEnter}
      style={withBorder ? withBorderStyle : {}}
    />
  );
}
