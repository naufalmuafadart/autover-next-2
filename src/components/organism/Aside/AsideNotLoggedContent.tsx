import React, { useState } from 'react';
import Link from 'next/link';
import style from '@/styles/component/organism/aside.module.css';
import LoginSVG from '@/svg/LoginSVG';
import SignUpSVG from '@/svg/SignUpSVG';

export default function AsideNotLoggedContent() {
  const [loginSVGColor, setLoginSVGColor] = useState('#000000');
  const [signUpSVGColor, setSignUpSVGColor] = useState('#000000');

  const onLoginSVGMouseEnter = () => {
    setLoginSVGColor('#0032a0bf');
  };

  const onLoginSVGMouseLeave = () => {
    setLoginSVGColor('#000000');
  };

  const onSignUpSVGMouseEnter = () => {
    setSignUpSVGColor('#0032a0bf');
  };

  const onSignUpSVGMouseLeave = () => {
    setSignUpSVGColor('#000000');
  };

  return (
    <>
      {/* Login */}
      <div
        className={style.asideItem}
        onMouseEnter={onLoginSVGMouseEnter}
        onMouseLeave={onLoginSVGMouseLeave}
      >
        <Link href="/login">
          <LoginSVG color={loginSVGColor} />
          <p>Login</p>
        </Link>
      </div>

      {/* Signup */}
      <div
        className={style.asideItem}
        onMouseEnter={onSignUpSVGMouseEnter}
        onMouseLeave={onSignUpSVGMouseLeave}
      >
        <Link href="/signup">
          <SignUpSVG color={signUpSVGColor} />
          <p>Signup</p>
        </Link>
      </div>
    </>
  );
}
