import React from 'react';
import cx from 'classnames';

interface ButtonInterface {
  text: string;
  className?: string;
  onClick?: any;
  isSecondary?: boolean;
  type?: 'submit' | 'button';
}

export default function Button(props: Partial<ButtonInterface>) {
  const {
    text,
    className = '',
    onClick = () => {},
    isSecondary = false,
    type = 'button',
  } = props;

  const classItem = cx({
    'button-secondary': isSecondary,
  });

  return (
    <button
      type={type}
      className={`${className} ${classItem}`}
      onClick={onClick}
    >
      { text }
    </button>
  );
}
