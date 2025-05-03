import Select from '@/app/components/ui/Select';
import Button from '@/app/components/ui/Button';
import { CATEGORIES, DIFFICULTIES } from '../constants';
import { Category, Difficulty } from '../types';

interface SetupScreenProps {
  category: Category;
  difficulty: Difficulty;
  onCategoryChange: (category: Category) => void;
  onDifficultyChange: (difficulty: Difficulty) => void;
  onStart: () => void;
}

export default function SetupScreen({
  category,
  difficulty,
  onCategoryChange,
  onDifficultyChange,
  onStart,
}: SetupScreenProps) {
  return (
    <>
      <Select
        label='Category'
        value={category}
        onChange={(e) => onCategoryChange(e.target.value as Category)}
      >
        {CATEGORIES.map(({ value, label }) => (
          <option key={value} value={value}>
            {label}
          </option>
        ))}
      </Select>
      <Select
        label='Difficulty'
        value={difficulty}
        onChange={(e) => onDifficultyChange(e.target.value as Difficulty)}
      >
        {DIFFICULTIES.map(({ value, label }) => (
          <option key={value} value={value}>
            {label}
          </option>
        ))}
      </Select>
      <Button variant='primary' onClick={onStart}>
        Start game
      </Button>
    </>
  );
}
