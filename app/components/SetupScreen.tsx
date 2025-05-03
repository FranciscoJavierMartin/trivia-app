import Select from '@/app/components/ui/Select';
import Button from '@/app/components/ui/Button';

export default function SetupScreen() {
  <>
    <Select label='Category'>
      <option value='general'>General Knowledge</option>
      <option value='science'>Science</option>
      <option value='history'>History</option>
    </Select>
    <Select label='Difficulty'>
      <option value='easy'>Easy</option>
      <option value='medium'>Medium</option>
      <option value='hard'>Hard</option>
    </Select>
    <Button variant='primary'>Start game</Button>
  </>;
}
