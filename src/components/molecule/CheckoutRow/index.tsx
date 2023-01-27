import React, { ReactNode } from 'react';
import style from '@/styles/component/molecule/CheckoutRow.module.css';

interface CheckoutRowProps {
  leftSideContent: ReactNode;
  rightSideContent: ReactNode;
}

export default function CheckoutRow(props: CheckoutRowProps) {
  const { leftSideContent, rightSideContent } = props;

  return (
    <div className={style.checkoutRow}>
      <div className="leftSide">
        { leftSideContent }
      </div>
      <div className="rightSide">
        { rightSideContent }
      </div>
    </div>
  );
}
