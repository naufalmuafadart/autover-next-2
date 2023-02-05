import React from 'react';
import Tutorial from '@/components/organism/Tutorial';
import SearchCar from '@/components/organism/SearchCar';
import CarList from '@/components/organism/CarList';
import Jumbotron from '@/components/organism/Jumbotron';
import Footer from '@/components/organism/Footer';
import RenterPageTemplate from '@/components/page/RenterPageTemplate';
import { GetServerSideProps as propsGetServerSide } from '@/services/dataTypes/props';

export default function Home() {
  return (
    <RenterPageTemplate
      isLogin={false}
      pageTitle="Autover"
      activeTab="overview"
    >
      <>
        <Jumbotron />
        <Tutorial />
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

  if (accessToken && refreshToken) {
    return {
      redirect: {
        destination: '/renter',
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
}
