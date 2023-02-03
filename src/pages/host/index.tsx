import React from 'react';
import Navbar from '@/components/organism/Navbar';
import HTMLHead from '@/components/Head';
import { getCheckIsAHost } from '@/services/host';
import { GetServerSideProps as propsGetServerSide } from '@/services/dataTypes';

export default function Host() {
  return (
    <>
      <HTMLHead title="Host" />
      <div id="mainContent">
        <Navbar isLogin />
        <h1>Host</h1>
      </div>
    </>
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
