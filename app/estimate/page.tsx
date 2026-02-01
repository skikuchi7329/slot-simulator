'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SettingEstimator from '@/components/SettingEstimator';
import { MachineId } from '@/lib/constants/slotSettings';

export default function EstimatePage() {
  const [machineId, setMachineId] = useState<MachineId>('aim');

  return (
    <>
      <Header />
      <main>
        <SettingEstimator machineId={machineId} setMachineId={setMachineId} />
      </main>
      <Footer />
    </>
  );
}
