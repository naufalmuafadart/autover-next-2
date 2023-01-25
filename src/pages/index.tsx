import React from 'react';
import HTMLHead from '@/components/Head';
import Navbar from '../components/organism/Navbar';
import Jumbotron from '../components/organism/Jumbotron';
import Tutorial from "@/components/organism/Tutorial";
import SearchCar from "@/components/organism/SearchCar";
import CarList from "@/components/organism/CarList";

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
