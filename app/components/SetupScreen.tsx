import Select from '@/app/components/ui/Select';
import Button from '@/app/components/ui/Button';
import { CATEGORIES, DIFFICULTIES } from '../constants';

export default function SetupScreen() {
  return (
    <>
      <Select label='Category'>
        {CATEGORIES.map(({ value, label }) => (
          <option key={value} value={value}>
            {label}
          </option>
        ))}
      </Select>
      <Select label='Difficulty'>
        {DIFFICULTIES.map(({ value, label }) => (
          <option key={value} value={value}>
            {label}
          </option>
        ))}
      </Select>
      <Button variant='primary'>Start game</Button>
    </>
  );
}
