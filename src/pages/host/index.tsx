import React from 'react';
import Navbar from '@/components/organism/Navbar';
import HTMLHead from '@/components/Head';
import { getCheckIsAHost } from '@/services/host';
import { GetServerSideProps as propsGetServerSide } from '@/services/dataTypes';
import HostAside from '@/components/organism/HostAside/HostAside';

export default function Host() {
  return (
    <div id="hostPage">
      <HTMLHead title="Host" />
      <HostAside activeTab="overview" />
      <div className="hrContainer">
        <hr />
      </div>
      <Navbar isLogin />
      <div id="mainContent" className="mainContentHost">
        <div className="mainContentContainer">
          <h1>Content 1</h1>
          <h1>Content</h1>
          <h1>Content</h1>
          <h1>Content</h1>
          <h1>Content</h1>
          <h1>Content</h1>
          <h1>Content</h1>
          <h1>Content</h1>
          <h1>Content</h1>
          <h1>Content</h1>
          <h1>Content</h1>
          <h1>Content</h1>
          <h1>Content</h1>
          <h1>Content</h1>
          <h1>Content</h1>
          <h1>Content</h1>
          <h1>Content</h1>
          <h1>Content</h1>
          <h1>Content</h1>
          <h1>Content</h1>
          <h1>Content</h1>
          <h1>Content</h1>
          <h1>Content</h1>
          <h1>Content</h1>
          <h1>Content</h1>
          <h1>Content</h1>
          <h1>Content</h1>
          <h1>Content</h1>
          <h1>Content</h1>
          <h1>Content</h1>
          <h1>Content</h1>
          <h1>Content</h1>
          <h1>Content</h1>
          <h1>Content</h1>
          <h1>Content</h1>
          <h1>Content</h1>
          <h1>Content</h1>
          <h1>Content</h1>
          <h1>Content</h1>
          <h1>Content</h1>
          <h1>Content</h1>
          <h1>Content</h1>
          <h1>Content</h1>
          <h1>Content Last</h1>
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps(props: propsGetServerSide) {
  const { accessToken, refreshToken } = props.req.cookies;

  if (!accessToken && !refreshToken) {
    return {
      redirect: {
        destination: '/login',
        permanent: false,
      },
    };
  }

  const responseData = await getCheckIsAHost(accessToken);
  if (!responseData.data) { // jika bukan host
    return {
      redirect: {
        destination: '/host/form',
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
}
