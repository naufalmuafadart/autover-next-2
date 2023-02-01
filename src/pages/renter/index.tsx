import React from 'react';
import HTMLHead from '@/components/Head';
import Navbar from '@/components/organism/Navbar';
import Jumbotron from '@/components/organism/Jumbotron';
import SearchCar from '@/components/organism/SearchCar';
import CarList from '@/components/organism/CarList';
import Footer from '@/components/organism/Footer';
import { GetServerSideProps as propsGetServerSide } from '@/services/dataTypes';

export default function Home() {
  return (
    <>
      <HTMLHead title="Autover" />
      <div id="mainContent">
        <Navbar isLogin />
        <Jumbotron />
        <SearchCar />
        <CarList />
        <hr />
        <Footer />
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

  return {
    props: {},
  };
}
