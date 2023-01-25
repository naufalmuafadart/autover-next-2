import React from 'react';
import Image from 'next/image';
import Button from '@/components/atom/Button';
import styles from './style/card.module.css';

export default function Card() {
  return (
    <div className={`card ${styles.card} d-flex jc-space-between`}>
      <div className="left-side d-flex jc-start">
        <section className={styles.imageSection}>
          <Image src="/images/_development/nissan_navara.jpeg" alt="Car" width={150} height={100} />
        </section>
        <section>
          <p><b>Nissan Navara (Tipe) (2019)</b></p>
          <p>2019</p>
          <p>Transmisi Otomatis</p>
          <p>Putih</p>
          <p>3 penumpang</p>
        </section>
      </div>
      <div className={`${styles.rightSide} d-flex flex-column jc-space-between`}>
        <div className="top-side">
          <p>Tarif</p>
          <p>
            Rp. 700.000
            <small>/ hari</small>
          </p>
        </div>
        <div className="bottom-side">
          <Button text="Pilih" />
        </div>
      </div>
    </div>
  );
}
