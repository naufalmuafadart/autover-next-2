import React, { useEffect } from 'react';
import Head from '@/components/Head';
import style from '@/styles/pages/login.module.css';
import Image from 'next/image';
import localFont from '@next/font/local';
import Button from '@/components/atom/Button';

const michroma = localFont({ src: './font/Michroma/Michroma-Regular.ttf' });

export default function Signup() {
  useEffect(() => {
    const body = document.getElementsByTagName('body')[0];
    body.style.backgroundColor = 'blue';
    body.style.display = 'flex';
    body.style.justifyContent = 'center';
    body.style.height = '100vh';
  });

  return (
    <>
      <Head title="Sign Up" />
      <div className={style.container}>
        <div className={style.leftSide}>
          {/* eslint-disable-next-line jsx-a11y/img-redundant-alt,@next/next/no-img-element */}
          <img src="/images/img-login.png" alt="image login" className={style.image} />
        </div>
        <div className={style.rightSide}>
          <form className="d-flex flex-column ai-center">
            <div className={`${style.brand} d-flex jc-start ai-center`}>
              <Image src="/images/logo.png" alt="Logo" width={70} height={70} className={style.logo} />
              <p className={`${michroma.className} ${style.brandText}`}>AUTOVER</p>
            </div>

            <h1 className={style.h1}>Sign Up</h1>

            <div className="form-group group-column">
              <label htmlFor="inputFullName">Nama lengkap</label>
              <input type="email" id="inputFullName" name="full_name" required />
              <small>Nama lengkap salah</small>
            </div>

            <div className="form-group group-column">
              <label htmlFor="inputPhoneNumber">Nomor Telepon</label>
              <input type="tel" id="inputPhoneNumber" name="phone_number" required />
              <small>Nomor telepon salah</small>
            </div>

            <div className="form-group group-column">
              <label htmlFor="inputEmail">Email</label>
              <input type="email" id="inputEmail" required />
              <small>Email salah</small>
            </div>

            <div className="form-group group-column">
              <label htmlFor="inputPassword">Password</label>
              <input type="email" id="inputPassword" required />
              <small>Password salah</small>
            </div>

            <div className="form-group group-column">
              <label htmlFor="inputRetypePassword">Ulangi Password</label>
              <input type="email" id="inputRetypePassword" required />
              <small>Password tidak cocok</small>
            </div>

            <Button text="Login" className={`${style.btnSubmit} w-100`} />

            <div className={style.alternativeContainer}>
              <p className="alternative">
                <span>Sudah punya akun?</span>
                {' '}
                <a href="/signup" className={style.alternativeContainerAnchor}>Daftar disini</a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
