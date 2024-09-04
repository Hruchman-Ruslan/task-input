import InputAnnotation from '@/components/input-annotation';
import InputGroup from '@/components/input-group';
import InputLabel from '@/components/input-label';
import InputText from '@/components/input-text';

export default function Home() {
  return (
    <main>
      <InputAnnotation>
        <InputGroup>
          <InputLabel title='Email' htmlFor='email' />
          <InputText id='email' type='text' placeholder='Email' />
        </InputGroup>
      </InputAnnotation>
      {/* <h1>⌘K</h1> */}
    </main>
  );
}
