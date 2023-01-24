import Image from 'next/image';
import React from 'react';
import style from '../styles/pages/index.module.css';
import HTMLHead from '@/components/Head';
import Button from "@/components/atom/Button";

export default function Home() {
  return (
    <>
      <HTMLHead />
      <section id="s-navbar" className={style.sNavbar}>
        <nav className="d-flex jc-space-between ai-center h-100">
          <div className="left-side">
            <Image src="/images/navbar-brand.png" alt="Navbar brand" width={100} height={40} />
          </div>
          <div className="right-side">
            <Button text="Masuk" className={style.signUpButton} />
            <Button text="Daftar" className="button-secondary" />
          </div>
        </nav>
      </section>
      <section id="s-jumbotron" className={style.sJumbotron} />
    </>
  );
}
