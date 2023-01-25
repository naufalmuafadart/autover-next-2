import React from 'react';
import Image from 'next/image';
import style from '@/styles/component/organism/navbar.module.css';
import Button from '@/components/atom/Button';

export default function index() {
  const onLoginButtonClick = () => {
    window.location.href = '/login';
  };
  const onSignUpButtonClick = () => {
    window.location.href = '/signup';
  };

  return (
    <section id="s-navbar" className={style.sNavbar}>
      <nav className="d-flex jc-space-between ai-center h-100">
        <div className="left-side">
          <Image src="/images/navbar-brand.png" alt="Navbar brand" width={100} height={40} />
        </div>
        <div className="right-side">
          <Button text="Masuk" className={style.signUpButton} onClick={onLoginButtonClick} />
          <Button text="Daftar" className="button-secondary" onClick={onSignUpButtonClick} />
        </div>
      </nav>
    </section>
  );
}
