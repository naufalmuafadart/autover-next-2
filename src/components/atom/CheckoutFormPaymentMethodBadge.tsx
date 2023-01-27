import React from 'react';
import style from '@/styles/component/atom/CheckoutFormPaymentMethodBadge.module.css';

interface BadgeProps {
  mode?: 'inherit' | 'selected' | 'disabled';
  text: string;
  onClick: () => void;
}

export default function CheckoutFormPaymentMethodBadge(props: Partial<BadgeProps>) {
  const {
    mode = 'inherit', text, onClick,
  } = props;
  let classItem = style.checkoutFormPaymentMethodBadge;
  if (mode === 'selected') classItem += ` ${style.selected}`;
  else if (mode === 'disabled') classItem += ` ${style.disabled}`;

  return (
    // eslint-disable-next-line max-len
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions
    <div className={classItem} onClick={onClick}>
      { text }
    </div>
  );
}
