import React from 'react';
import cx from 'classnames';

interface ButtonInterface {
  text: string;
  className?: string;
  onClick?: () => void;
  isSecondary?: boolean;
}

export default function Button(props: Partial<ButtonInterface>) {
  const {
    text,
    className = '',
    onClick = () => {},
    isSecondary = false,
  } = props;

  const classItem = cx({
    'button-secondary': isSecondary,
  });

  return (
    <button
      type="button"
      className={`${className} ${classItem}`}
      onClick={onClick}
    >
      { text }
    </button>
  );
}
