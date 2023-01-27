import React from 'react';
import Image from 'next/image';
import cx from 'classnames';

interface IconProps {
  icon: string;
  classItem?: string;
  isDisplayed?: boolean;
  onMouseEnter: () => void;
}

export default function Icon(props: Partial<IconProps>) {
  const {
    icon,
    classItem = '',
    isDisplayed = true,
    onMouseEnter = () => {},
  } = props;

  const customClassItem = cx({
    'd-none': !isDisplayed,
  });

  return (
    <Image
      src={`/images/icon/ic_${icon}.png`}
      alt="Icon"
      width={36}
      height={36}
      className={`${classItem} ${customClassItem}`}
      onMouseEnter={onMouseEnter}
    />
  );
}
