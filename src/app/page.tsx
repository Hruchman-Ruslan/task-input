import InputAnnotation from '@/components/input-annotation';
import InputGroup from '@/components/input-group';
import InputLabels from '@/components/input-label';
import InputText from '@/components/input-text';

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col justify-center'>
      <InputGroup>
        <InputLabels title='Email' htmlFor='email' />
        <InputText id='email' type='text' placeholder='Input...' />
        <InputAnnotation>This is a hint text to help user.</InputAnnotation>
      </InputGroup>
    </main>
  );
}
