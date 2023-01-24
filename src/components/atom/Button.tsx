import React from 'react';

interface ButtonInterface {
  text: string;
  className?: string;
  onClick?: () => void;
}

export default function Button(props: Partial<ButtonInterface>) {
  const { text, className = '', onClick = () => {} } = props;
  return (
    <button
      type="button"
      className={className}
      onClick={onClick}
    >
      { text }
    </button>
  );
}
