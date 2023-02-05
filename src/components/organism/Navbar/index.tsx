import React from 'react';
import Image from 'next/image';
import style from '@/styles/component/organism/navbar.module.css';
import Link from 'next/link';
import Menu2SVG from '@/svg/Menu2SVG';
import CrossSVG from '@/svg/CrossSVG';

interface NavbarProps {
  isLogin: boolean;
  isHost?: boolean;
  isAsideShow: boolean;
  showAside: () => void;
  hideAside: () => void;
}

export default function Navbar(props: Partial<NavbarProps>) {
  const {
    isAsideShow,
    showAside = () => {},
    hideAside = () => {},
  } = props;

  return (
    <section id="s-navbar" className={style.sNavbar}>
      <div id="navbarContainer" className={style.navbarContainer}>
        <nav className="d-flex jc-space-between ai-center h-100">
          <div className="left-side">
            <Link href="/">
              <Image src="/images/navbar-brand.png" alt="Navbar brand" width={100} height={40} />
            </Link>
          </div>
          <div className="right-side d-flex jc-start ai-center">
            {
              !isAsideShow ? (
                <Menu2SVG
                  color="#00000"
                  classItem={style.userIcon}
                  onClick={showAside}
                />
              ) : (
                <CrossSVG
                  color="#000000"
                  classItem={style.userIcon}
                  onClick={hideAside}
                />
              )
            }
          </div>
        </nav>
      </div>
    </section>
  );
}
