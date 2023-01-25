import React from 'react';
import HTMLHead from '@/components/Head';
import Navbar from '../components/organism/Navbar';
import Jumbotron from '../components/organism/Jumbotron';

export default function Home() {
  return (
    <>
      <HTMLHead title="Autover" />
      <Navbar />
      <Jumbotron />
    </>
  );
}
