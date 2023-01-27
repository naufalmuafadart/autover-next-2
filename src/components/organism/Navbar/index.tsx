import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import style from '@/styles/component/organism/navbar.module.css';
import Button from '@/components/atom/Button';
import Icon from '@/components/atom/Icon';
import Link from 'next/link';

interface NavbarProps {
  isLogin: boolean;
}

export default function Navbar(props: NavbarProps) {
  const { isLogin } = props;
  const [isMenuDisplayed, setIsMenuDisplayed] = useState(false);
  const [narrowWidth, setIsNarrowWidth] = useState(false);

  const onWindowResize = () => {
    const width = window.innerWidth;
    if (width <= 800) {
      setIsNarrowWidth(true);
    } else {
      setIsNarrowWidth(false);
    }
  };

  useEffect(() => {
    onWindowResize();
    window.addEventListener('resize', onWindowResize);
  });

  const onLoginButtonClick = () => {
    window.location.href = '/login';
  };
  const onSignUpButtonClick = () => {
    window.location.href = '/signup';
  };

  const onIconUserMouseEnter = () => {
    setIsMenuDisplayed(true);
  };

  const onNavbarMouseLeave = () => {
    setIsMenuDisplayed(false);
  };

  return (
    <section id="s-navbar" className={style.sNavbar} onMouseLeave={onNavbarMouseLeave}>
      <nav className="d-flex jc-space-between ai-center h-100">
        <div className="left-side">
          <Image src="/images/navbar-brand.png" alt="Navbar brand" width={100} height={40} />
        </div>
        <div className="right-side d-flex jc-start ai-center">
          {
            isLogin ? (
              <Icon
                icon="user"
                classItem={style.userIcon}
                onMouseEnter={onIconUserMouseEnter}
              />
            ) : null
          }
          {
            !isLogin && !narrowWidth ? (
              <>
                <Button text="Masuk" className={style.signUpButton} onClick={onLoginButtonClick} />
                <Button text="Daftar" onClick={onSignUpButtonClick} isSecondary />
              </>
            ) : null
          }
          {
            !isLogin && narrowWidth ? (
              <Icon
                icon="menu"
                classItem={style.userIcon}
                onMouseEnter={onIconUserMouseEnter}
              />
            ) : null
          }
        </div>
      </nav>
      <div className={style.navMenu} style={{ display: isMenuDisplayed ? 'inherit' : 'none' }}>
        <ul className={style.navMenuUl}>
          {
            isLogin ? (
              <>
                <li className={style.navMenuUlLi}>
                  <Link href="/signup" style={{ color: 'black' }}>Daftar</Link>
                </li>
                <li className={style.navMenuUlLi}>
                  <Link href="/login" style={{ color: 'black' }}>Login</Link>
                </li>
              </>
            ) : (
              <>
                <li className={style.navMenuUlLi}>
                  <Link href="/" style={{ color: 'black' }}>Menu Host</Link>
                </li>
                <li className={style.navMenuUlLi}>
                  <Link href="/" style={{ color: 'black' }}>Logout</Link>
                </li>
              </>
            )
          }
        </ul>
      </div>
    </section>
  );
}
