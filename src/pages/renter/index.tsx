import React from 'react';
import Jumbotron from '@/components/organism/Jumbotron';
import SearchCar from '@/components/organism/SearchCar';
import CarList from '@/components/organism/CarList';
import Footer from '@/components/organism/Footer';
import { GetServerSideProps as propsGetServerSide } from '@/services/dataTypes/props';
import RenterPageTemplate from '@/components/page/RenterPageTemplate';

export default function Home() {
  return (
    <RenterPageTemplate isLogin pageTitle="Autover" activeTab="overview">
      <>
        <Jumbotron />
        <SearchCar />
        <CarList />
        <hr />
        <Footer />
      </>
    </RenterPageTemplate>
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

  return {
    props: {},
  };
}
