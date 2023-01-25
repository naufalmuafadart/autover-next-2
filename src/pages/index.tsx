import React from 'react';
import Tutorial from '@/components/organism/Tutorial';
import SearchCar from '@/components/organism/SearchCar';
import CarList from '@/components/organism/CarList';
import HTMLHead from '@/components/Head';
import Jumbotron from '@/components/organism/Jumbotron';
import Navbar from '@/components/organism/Navbar';

export default function Home() {
  return (
    <>
      <HTMLHead title="Autover" />
      <Navbar />
      <Jumbotron />
      <Tutorial />
      <SearchCar />
      <CarList />
    </>
  );
}
