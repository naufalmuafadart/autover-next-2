import React from 'react';
import style from '@/styles/component/organism/aside.module.css';
import Image from 'next/image';
import AsideHostContent from '@/components/organism/Aside/AsideHostContent';
import AsideRenterContent from '@/components/organism/Aside/AsideRenterContent';
import AsideNotLoggedContent from '@/components/organism/Aside/AsideNotLoggedContent';

interface HostAsideProps {
  activeTab: 'overview' | 'profile' | 'car' | 'transaction' | 'balance';
  isLogin: boolean;
  isHost?: boolean;
}

export default function Aside(props: Partial<HostAsideProps>) {
  const { activeTab, isLogin, isHost = false } = props;

  return (
    <aside id="aside" className={style.aside}>
      {
        isLogin ? (
          <div className={style.asideHeader}>
            <Image src="/images/icon/ic_user.png" width={80} height={80} alt="ic_user" />
            <p>Full name</p>
            <p>email</p>
          </div>
        ) : null
      }

      {
        isLogin && isHost ? (
          <AsideHostContent activeTab={activeTab!} />
        ) : null
      }

      {
        isLogin && !isHost ? (
          <AsideRenterContent />
        ) : null
      }

      {/* If user not logged */}
      {
        !isLogin ? (
          <AsideNotLoggedContent />
        ) : null
      }
    </aside>
  );
}
