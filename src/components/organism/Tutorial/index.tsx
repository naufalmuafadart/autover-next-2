import React from 'react';
import Image from 'next/image';
import style from '../../../styles/component/organism/tutorial.module.css';
import Button from '@/components/atom/Button';
import ListItem from '@/components/organism/Tutorial/ListItem';

export default function Tutorial() {
  return (
    <section id="s-tutorial" className={`d-grid ${style.sTutorial}`}>
      <div className="left-side d-flex jc-center ai-center">
        <Image src="/images/logo-big.png" width={391} height={391} alt="logo big" />
      </div>
      <div className="right-side">
        <h1 className={style.mb30}>Cara sewa mobil di Autover</h1>
        <div id="button-container" className={`${style.buttonContainer} ${style.mb30}`}>
          <Button text="Penyewa" className={style.btnRenter} />
          <Button text="Host" isSecondary />
        </div>
        <ul className={style.ul}>
          <ListItem
            orderNumber={1}
            mainText="Pilih tempat dan tanggal penyewaan"
            info="Pilih lokasi dan tanggal kamu akan menyewa mobil"
          />
          <ListItem
            orderNumber={2}
            mainText="Tentukan mobil yang akan kamu sewa"
            info="Pilih salah satu mobil yang ingin kamu sewa"
          />
          <ListItem
            orderNumber={3}
            mainText="Checkout Pesanan"
            info="Lengkapi data pada halaman checkout, dan bayar pesanan kamu"
          />
          <ListItem
            orderNumber={4}
            mainText="Nikmati Mobilnya"
            info="Kemudikan mobilnya"
          />
        </ul>
        <div id="button-container" className={style.buttonContainer}>
          <Button text="Cari Mobil" />
        </div>
      </div>
    </section>
  );
}
