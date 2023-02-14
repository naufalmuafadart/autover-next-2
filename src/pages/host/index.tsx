import React from 'react';
import { getCheckIsAHost } from '@/services/host';
import { GetServerSideProps as propsGetServerSide } from '@/services/dataTypes/props';
import HostPageTemplate from '@/components/page/HostPageTemplate';

export default function Host() {
  return (
    <HostPageTemplate
      pageTitle="Overview host"
      activeTab="overview"
    >
      <>
        <h1>Overview page</h1>
        <h2>Heading 2</h2>
        <h3>Heading 3</h3>
      </>
    </HostPageTemplate>
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

  const responseData = await getCheckIsAHost(refreshToken);
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
