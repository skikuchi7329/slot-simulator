"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Graphs from "@/components/Graphs";
import Menu from "@/components/Menu";
import { MachineId, SettingLevel } from "@/lib/constants/slotSettings";

export default function Home() {
  const [game, setGame] = useState<number>(8000);
  const [machineId, setMachineId] = useState<MachineId>("aim");
  const [setting, setSetting] = useState<SettingLevel>(6);
  const [trialCount, setTrialCount] = useState<number>(100);

  return (
    <>
      <Header />
      <Menu
        game={game}
        setGame={setGame}
        machineId={machineId}
        setMachineId={setMachineId}
        setting={setting}
        setSetting={setSetting}
        trialCount={trialCount}
        setTrialCount={setTrialCount}
      />
      <Graphs
        game={game}
        machineId={machineId}
        setting={setting}
        trialCount={trialCount}
      />
      <Footer />
    </>
  );
}
