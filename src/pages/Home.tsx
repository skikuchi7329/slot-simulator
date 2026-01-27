import React, { useState } from "react";
import Header from "../component/Header";
import Footer from "../component/Footer";
import Graphs from "../component/Graphs";
import Menu from "../component/Menu";

function Home() {
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

export default Home;
