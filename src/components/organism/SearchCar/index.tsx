import React from 'react';
import Button from '@/components/atom/Button';
import Separator from '@/components/organism/SearchCar/Separator';
import InputGroup from '@/components/organism/SearchCar/InputGroup';
import styles from '../../../styles/component/organism/search_car.module.css';

export default function SearchCar() {
  return (
    <section id="s-search">
      <h1>Cari Mobil</h1>
      <form action="" className={styles.form}>
        <div className={`row d-flex jc-space-around ${styles.row}`}>
          <InputGroup id="selectLocation" labelText="Lokasi Sewa" icon="location">
            <select id="selectLocation">
              <option>Kec. Batununggal</option>
              <option>Kec. Antapani</option>
            </select>
          </InputGroup>

          <Separator />

          <InputGroup id="inputStartDate" labelText="Tanggal Mulai" icon="calendar">
            <input type="date" id="inputStartDate" />
          </InputGroup>

          <Separator />

          <InputGroup id="inputEndDate" labelText="Tanggal Selesai" icon="calendar">
            <input type="date" id="inputEndDate" />
          </InputGroup>
        </div>
        <div className="w-100 d-flex jc-center">
          <Button text="Cari" />
        </div>
      </form>
    </section>
  );
}
