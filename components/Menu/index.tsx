'use client';

import StyledMenu from './styled';
import {
  MachineId,
  SettingLevel,
  MACHINE_LIST,
} from '@/lib/constants/slotSettings';

type Props = {
  game: number;
  setGame: (value: number) => void;
  machineId: MachineId;
  setMachineId: (value: MachineId) => void;
  setting: SettingLevel;
  setSetting: (value: SettingLevel) => void;
};

export default function Menu({
  game,
  setGame,
  machineId,
  setMachineId,
  setting,
  setSetting,
}: Props) {
  const handleGameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value === '') {
      setGame(0);
    } else {
      const numValue = parseInt(value, 10);
      if (!isNaN(numValue)) {
        setGame(numValue);
      }
    }
  };

  const handleMachineChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setMachineId(e.target.value as MachineId);
  };

  const handleSettingChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSetting(Number(e.target.value) as SettingLevel);
  };

  return (
    <StyledMenu>
      <table className="styled-table">
        <caption>条件設定</caption>
        <tbody>
          <tr>
            <th>機種</th>
            <td>
              <select
                id="machine-type"
                value={machineId}
                onChange={handleMachineChange}
              >
                {MACHINE_LIST.map((machine) => (
                  <option key={machine.id} value={machine.id}>
                    {machine.name}
                  </option>
                ))}
              </select>
            </td>
          </tr>
          <tr>
            <th>設定</th>
            <td>
              <select
                id="setting-level"
                value={setting}
                onChange={handleSettingChange}
              >
                {([1, 2, 3, 4, 5, 6] as SettingLevel[]).map((level) => (
                  <option key={level} value={level}>
                    {level}
                  </option>
                ))}
              </select>
            </td>
          </tr>
          <tr>
            <th>回転数</th>
            <td>
              <input
                type="number"
                id="game"
                value={game}
                onChange={handleGameChange}
                min={1}
                max={100000}
              />
            </td>
          </tr>
        </tbody>
      </table>
    </StyledMenu>
  );
}
