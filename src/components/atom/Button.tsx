import React from 'react';

interface ButtonInterface {
  text: string;
  className?: string;
}

export default function Button(props: Partial<ButtonInterface>) {
  const { text, className = '' } = props;
  return (
    <button
      type="button"
      className={className}
    >
      { text }
    </button>
  );
}
