import React from 'react';
import style from '../../styles/component/atom/Button.module.css';

export interface ButtonInterface {
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

  const classItem = isSecondary ? style.buttonSecondary : '';

  return (
    <button
      type={type === 'submit' ? 'submit' : 'button'}
      className={`${style.button} ${className} ${classItem}`}
      onClick={onClick}
    >
      { text }
    </button>
  );
}
