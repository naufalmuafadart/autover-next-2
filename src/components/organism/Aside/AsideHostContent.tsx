import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import MenuSVG from '@/svg/MenuSVG';
import ProfileSVG from '@/svg/ProfileSVG';
import CarSVG from '@/svg/CarSVG';
import TransactionSVG from '@/svg/TransactionSVG';
import WalletSVG from '@/svg/WalletSVG';
import style from '@/styles/component/organism/aside.module.css';
import LogoutSVG from '@/svg/LogoutSVG';
import Cookies from 'js-cookie';
import { toast } from 'react-toastify';

interface AsideHostContentProps {
  activeTab: string;
}

export default function AsideHostContent(props: AsideHostContentProps) {
  const { activeTab } = props;

  const [menuSVGColor, setMenuSVGColor] = useState(
    activeTab === 'overview' ? '#0032A0' : '#000000',
  );
  const [profileSVGColor, setProfileSVGColor] = useState(
    activeTab === 'profile' ? '#0032A0' : '#000000',
  );
  const [carSVGColor, setCarSVGColor] = useState(
    activeTab === 'car' ? '#0032A0' : '#000000',
  );
  const [transactionSVGColor, setTransactionSVGColor] = useState(
    activeTab === 'transaction' ? '#0032A0' : '#000000',
  );
  const [balanceSVGColor, setBalanceSVGColor] = useState(
    activeTab === 'balance' ? '#0032A0' : '#000000',
  );
  const [logoutSVGColor, setLogoutSVGColor] = useState('#000000');
  const router = useRouter();

  const onMenuSVGMouseEnter = () => {
    if (activeTab !== 'overview') {
      setMenuSVGColor('#0032a0bf');
    }
  };

  const onMenuSVGMouseLeave = () => {
    if (activeTab !== 'overview') {
      setMenuSVGColor('#0000000');
    }
  };

  const getAsideItemClassName = (itemName: String) => {
    const cn = style.asideItem;
    if (itemName === activeTab) {
      return `${cn} ${style.active}`;
    }
    return cn;
  };

  const onProfileSVGMouseEnter = () => {
    if (activeTab !== 'profile') {
      setProfileSVGColor('#0032a0bf');
    }
  };

  const onProfileSVGMouseLeave = () => {
    if (activeTab !== 'profile') {
      setProfileSVGColor('#000000');
    }
  };

  const onCarSVGMouseEnter = () => {
    if (activeTab !== 'car') {
      setCarSVGColor('#0032a0bf');
    }
  };

  const onCarSVGMouseLeave = () => {
    if (activeTab !== 'car') {
      setCarSVGColor('#000000');
    }
  };

  const onTransactionSVGMouseEnter = () => {
    if (activeTab !== 'transaction') {
      setTransactionSVGColor('#0032a0bf');
    }
  };

  const onTransactionSVGMouseLeave = () => {
    if (activeTab !== 'transaction') {
      setTransactionSVGColor('#000000');
    }
  };

  const onBalanceSVGMouseEnter = () => {
    if (activeTab !== 'balance') {
      setBalanceSVGColor('#0032a0bf');
    }
  };

  const onBalanceSVGMouseLeave = () => {
    if (activeTab !== 'balance') {
      setBalanceSVGColor('#000000');
    }
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
      {/* Overview */}
      <div
        className={getAsideItemClassName('overview')}
        onMouseEnter={onMenuSVGMouseEnter}
        onMouseLeave={onMenuSVGMouseLeave}
      >
        <Link href="/host">
          <MenuSVG color={menuSVGColor} />
          <p>Overview</p>
        </Link>
      </div>

      {/* Profile */}
      <div
        className={getAsideItemClassName('profile')}
        onMouseEnter={onProfileSVGMouseEnter}
        onMouseLeave={onProfileSVGMouseLeave}
      >
        <Link href="/host/profile">
          <ProfileSVG color={profileSVGColor} />
          <p>Profil</p>
        </Link>
      </div>

      {/* Car */}
      <div
        className={getAsideItemClassName('car')}
        onMouseEnter={onCarSVGMouseEnter}
        onMouseLeave={onCarSVGMouseLeave}
      >
        <Link href="/host/car">
          <CarSVG color={carSVGColor} />
          <p>Mobil</p>
        </Link>
      </div>

      {/* Transaction */}
      <div
        className={getAsideItemClassName('transaction')}
        onMouseEnter={onTransactionSVGMouseEnter}
        onMouseLeave={onTransactionSVGMouseLeave}
      >
        <Link href="/host/transaction">
          <TransactionSVG color={transactionSVGColor} />
          <p>Transaksi</p>
        </Link>
      </div>

      {/* Balance */}
      <div
        className={getAsideItemClassName('balance')}
        onMouseEnter={onBalanceSVGMouseEnter}
        onMouseLeave={onBalanceSVGMouseLeave}
      >
        <Link href="/host/balance">
          <WalletSVG color={balanceSVGColor} />
          <p>Saldo</p>
        </Link>
      </div>

      <hr />

      {/* Logout */}
      {/* eslint-disable-next-line max-len */}
      {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */}
      <div
        className={getAsideItemClassName('balance')}
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
