import React, { useState } from 'react';
import Image from 'next/image';
import style from '../../../styles/component/organism/tutorial.module.css';
import Button from '@/components/atom/Button';
import ListItem from '@/components/organism/Tutorial/ListItem';
import data from './data';

export default function Tutorial() {
  const [activeTab, setActiveTab] = useState('renter');

  const onBtnRenterClick = () => {
    setActiveTab('renter');
  };

  const onBtnHostClick = () => {
    setActiveTab('host');
  };

  return (
    <section id="s-tutorial" className={`d-grid ${style.sTutorial}`}>
      <div className="left-side d-flex jc-center ai-center">
        <Image src="/images/logo-big.png" width={391} height={391} alt="logo big" />
      </div>
      <div className="right-side">
        <h1 className={style.mb30}>Cara sewa mobil di Autover</h1>
        <div id="button-container" className={`${style.buttonContainer} ${style.mb30}`}>
          <Button
            text="Penyewa"
            className={style.btnRenter}
            isSecondary={activeTab !== 'renter'}
            onClick={onBtnRenterClick}
          />
          <Button
            text="Host"
            isSecondary={activeTab !== 'host'}
            onClick={onBtnHostClick}
          />
        </div>
        <ul className={style.ul}>
          {
            activeTab === 'renter' ? data.renter.map((listItem) => (
              <ListItem
                key={listItem.orderNumber}
                orderNumber={listItem.orderNumber}
                mainText={listItem.mainText}
                info={listItem.info}
              />
            )) : data.host.map((listItem) => (
              <ListItem
                key={listItem.orderNumber}
                orderNumber={listItem.orderNumber}
                mainText={listItem.mainText}
                info={listItem.info}
              />
            ))
          }
        </ul>
        <div id="button-container" className={style.buttonContainer}>
          <Button text="Cari Mobil" />
        </div>
      </div>
    </section>
  );
}
