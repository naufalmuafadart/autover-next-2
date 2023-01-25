import React from 'react';
import Card from '@/components/organism/CarList/Card';
import style from '@/styles/component/organism/car_list.module.css';

export default function CarList() {
  return (
    <section id="s-car-list">
      <h1>Pilihan Mobil di kec. Batununggal</h1>
      <p className={style.dateInfo}>Selasa, 27 Des 2022 -  Kamis, 29 Des 2022</p>
      <Card />
      <Card />
    </section>
  );
}
