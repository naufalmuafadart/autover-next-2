import React from 'react';
import HTMLHead from '@/components/Head';
import Navbar from '@/components/organism/Navbar';
import Jumbotron from '@/components/organism/Jumbotron';
import SearchCar from '@/components/organism/SearchCar';
import CarList from '@/components/organism/CarList';
import Footer from '@/components/organism/Footer';

export default function Home() {
  return (
    <>
      <HTMLHead title="Autover" />
      <Navbar />
      <Jumbotron />
      <SearchCar />
      <CarList />
      <hr />
      <Footer />
    </>
  );
}
