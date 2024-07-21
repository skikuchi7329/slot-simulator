'use client';
import React, { useState } from "react";
import Header from "../component/Header";
import Footer from "../component/Footer";
import Graphs from "../component/Graphs";
import Menu from "../component/Menu";

function Home() {
  const [game, setGame] = useState<number>(8000);

  const [trial, setTrial] = useState<number>(1000);

  return (
    <>
      <Header />
      <Menu game={game} setGame={setGame} trial={trial} setTrial={setTrial} />
      <Graphs game={game} trial={trial} />
      <Footer />
    </>
  );
}

export default Home;
