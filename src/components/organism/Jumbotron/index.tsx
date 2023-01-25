import React from 'react';
import Image from 'next/image';
import style from '@/styles/component/organism/jumbotron.module.css';

export default function index() {
  return (
    <section id="s-jumbotron" className={`${style.sJumbotron} d-grid`}>
      <div className={`left-side ${style.jumbotronLeftSide}`}>
        <div className="d-flex flex-column w-100 h-100 jc-center ai-start">
          <h1 className={style.jumbotronHeading}>Rental Mobil Murah untuk Setiap Kebutuhan</h1>
          <p className={style.jumbotronText}>
            Dapatkan tarif sewa mobil paling terjangkau disini.
            Kami menyediakan banyak pilihan mobil seperti, MPV, SUV, Crossover, dll.
          </p>
        </div>
      </div>
      <div className="right-side">
        <div className="d-flex w-100 h-100 jc-center ai-center">
          <Image src="/images/jumbotron-image.png" alt="jumbotron image" height={260} width={520} />
        </div>
      </div>
    </section>
  );
}
