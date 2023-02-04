import React, { ReactComponentElement } from 'react';
import HTMLHead from '@/components/Head';
import HostAside from '@/components/organism/HostAside/HostAside';
import HostHRContainer from '@/components/molecule/HostHRContainer';
import Navbar from '@/components/organism/Navbar';

interface HostPageTemplateProps {
  pageTitle: string;
  activeTab: 'overview' | 'profile' | 'car' | 'transaction' | 'balance';
  children: ReactComponentElement<any>;
}

export default function HostPageTemplate(props: HostPageTemplateProps) {
  const { pageTitle, activeTab, children } = props;

  return (
    <div id="hostPage">
      <HTMLHead title={pageTitle} />
      <HostAside activeTab={activeTab} />
      <HostHRContainer />
      <Navbar isLogin />
      <div id="mainContent" className="mainContentHost">
        <div className="mainContentContainer">
          { children }
        </div>
      </div>
    </div>
  );
}
