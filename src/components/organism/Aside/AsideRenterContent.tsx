import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Cookies from 'js-cookie';
import { toast } from 'react-toastify';
import style from '@/styles/component/organism/aside.module.css';
import LogoutSVG from '@/svg/LogoutSVG';
import HostSVG from '@/svg/HostSVG';

export default function AsideRenterContent() {
  const [beAHostSVGColor, setBeAHostSVGColor] = useState('#000000');
  const [logoutSVGColor, setLogoutSVGColor] = useState('#000000');
  const router = useRouter();

  const onBeAHostSVGMouseEnter = () => {
    setBeAHostSVGColor('#0032a0bf');
  };

  const onBeAHostSVGMouseLeave = () => {
    setBeAHostSVGColor('#000000');
  };

  const onLogoutSVGMouseEnter = () => {
    setLogoutSVGColor('#0032a0bf');
  };

  const onLogoutSVGMouseLeave = () => {
    setLogoutSVGColor('#000000');
  };

  const onLogout = async () => {
    Cookies.remove('accessToken');
    Cookies.remove('refreshToken');
    toast.success('Berhasil logout');
    await router.push('/login');
  };

  return (
    <>
      {/* Menu host */}
      <div
        className={style.asideItem}
        onMouseEnter={onBeAHostSVGMouseEnter}
        onMouseLeave={onBeAHostSVGMouseLeave}
      >
        <Link href="/host">
          <HostSVG color={beAHostSVGColor} />
          <p>Menu host</p>
        </Link>
      </div>

      {/* Logout */}
      {/* eslint-disable-next-line max-len */}
      {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */}
      <div
        className={style.asideItem}
        onMouseEnter={onLogoutSVGMouseEnter}
        onMouseLeave={onLogoutSVGMouseLeave}
        onClick={onLogout}
      >
        <div className={style.asideItemDiv}>
          <LogoutSVG color={logoutSVGColor} />
          <p style={{ color: logoutSVGColor }}>Logout</p>
        </div>
      </div>
    </>
  );
}
