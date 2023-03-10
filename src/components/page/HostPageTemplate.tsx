import React, { ReactComponentElement, useState } from 'react';
import HTMLHead from '@/components/Head';
import Aside from '@/components/organism/Aside/Aside';
import HostHRContainer from '@/components/molecule/HostHRContainer';
import Navbar from '@/components/organism/Navbar';

interface HostPageTemplateProps {
  pageTitle: string;
  activeTab: 'overview' | 'profile' | 'car' | 'transaction' | 'balance';
  children: ReactComponentElement<any>;
}

export default function HostPageTemplate(props: HostPageTemplateProps) {
  const { pageTitle, activeTab, children } = props;
  const [isAsideShow, setIsShowAside] = useState(false);

  const showAside = () => setIsShowAside(true);
  const hideAside = () => setIsShowAside(false);

  return (
    <div id="hostPage">
      <HTMLHead title={pageTitle} />
      {
        isAsideShow ? (
          <Aside activeTab={activeTab} isLogin isHost />
        ) : null
      }
      <HostHRContainer />
      <Navbar
        isLogin
        isHost
        isAsideShow={isAsideShow}
        showAside={showAside}
        hideAside={hideAside}
      />
      <div id="mainContent" className="mainContentHost">
        <div className="mainContentContainer">
          { children }
        </div>
      </div>
    </div>
  );
}
