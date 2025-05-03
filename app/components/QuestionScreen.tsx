import Button from './ui/Button';

export default function QuestionScreen() {
  return (
    <>
      <p>
        Which planet in out solar system has the most moons, boasting an
        impressive 92 discovered so far?
      </p>
      <div className='space-y-3'>
        <Button>Mars</Button>
        <Button>Sun</Button>
        <Button>Moon</Button>
        <Button>Venus</Button>
      </div>
      <Button variant='primary'>Next question</Button>
    </>
  );
}
