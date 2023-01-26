import React from 'react';
import cx from 'classnames';

interface SmallProps {
  id: string;
  text: string;
  color?: 'red' | 'black';
  isShow: boolean;
}

export default function Small(props: Partial<SmallProps>) {
  const {
    id, text, color = 'black', isShow = false,
  } = props;

  const smallClass = cx({
    'd-none': !isShow,
  });

  return (
    <small id={id} className={smallClass} style={{ color }}>{text}</small>
  );
}
