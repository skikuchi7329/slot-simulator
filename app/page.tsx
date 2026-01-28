'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Graphs from '@/components/Graphs';
import Menu from '@/components/Menu';

export default function Home() {
  const [game, setGame] = useState<number>(8000);

  return (
    <>
      <Header />
      <Menu game={game} setGame={setGame} />
      <Graphs game={game} />
      <Footer />
    </>
  );
}
