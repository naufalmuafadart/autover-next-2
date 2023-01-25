import React from 'react';
import Image from 'next/image';

interface IconProps {
  icon: string;
  classItem?: string;
}

export default function Icon(props: Partial<IconProps>) {
  const { icon, classItem = '' } = props;
  return (
    <Image src={`/images/icon/ic_${icon}.png`} alt="Icon" width={36} height={36} className={classItem} />
  );
}
