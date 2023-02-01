import React from 'react';
import Tutorial from '@/components/organism/Tutorial';
import SearchCar from '@/components/organism/SearchCar';
import CarList from '@/components/organism/CarList';
import HTMLHead from '@/components/Head';
import Jumbotron from '@/components/organism/Jumbotron';
import Navbar from '@/components/organism/Navbar';
import Footer from '@/components/organism/Footer';
import { GetServerSideProps as propsGetServerSide } from '@/services/dataTypes';

export default function Home() {
  return (
    <>
      <HTMLHead title="Autover" />
      <main id="mainContent">
        <Navbar isLogin={false} />
        <Jumbotron />
        <Tutorial />
        <SearchCar />
        <CarList />
        <hr />
        <Footer />
      </main>
    </>
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
