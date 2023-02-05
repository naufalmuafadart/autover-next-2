import React, { ReactComponentElement, useState } from 'react';
import HTMLHead from '@/components/Head';
import Aside from '@/components/organism/Aside/Aside';
import HostHRContainer from '@/components/molecule/HostHRContainer';
import Navbar from '@/components/organism/Navbar';

interface RenterPageTemplateProps {
  isLogin: boolean;
  pageTitle: string;
  activeTab?: 'overview' | 'profile' | 'car' | 'transaction' | 'balance';
  children: ReactComponentElement<any>;
}

export default function RenterPageTemplate(props: Partial<RenterPageTemplateProps>) {
  const {
    isLogin, pageTitle, activeTab = 'overview', children,
  } = props;

  const [isAsideShow, setIsShowAside] = useState(false);

  const showAside = () => setIsShowAside(true);
  const hideAside = () => setIsShowAside(false);

  return (
    <div id="renterPage">
      <HTMLHead title={pageTitle!} />
      {
        isAsideShow ? (
          <Aside
            activeTab={activeTab}
            isLogin={isLogin}
          />
        ) : null
      }
      <HostHRContainer />
      <Navbar
        isAsideShow={isAsideShow}
        showAside={showAside}
        hideAside={hideAside}
      />
      <div id="mainContent" className="mainContentRenter">
        <div className="mainContentContainer">
          { children }
        </div>
      </div>
    </div>
  );
}
