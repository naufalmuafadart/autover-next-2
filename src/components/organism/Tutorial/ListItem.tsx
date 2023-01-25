import React from 'react';
import style from './style/list_item.module.css';

interface ListItemProps {
  mainText: string;
  info: string;
  orderNumber: number;
}

export default function ListItem(props: ListItemProps) {
  const { mainText, info, orderNumber } = props;

  return (
    <li className={`${style.li} d-flex jc-start`}>
      <div className={`left-side ${style.leftSide}`}>
        <div className={`container ${style.leftSideContainer} d-flex jc-center ai-center`}>
          { orderNumber }
        </div>
      </div>
      <div className="right-side">
        <p className={style.p}>{ mainText }</p>
        <small className={style.small}>{ info }</small>
      </div>
    </li>
  );
}
