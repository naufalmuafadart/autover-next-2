import React from 'react';

interface ButtonInterface {
  text: String;
  className?: String;
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
