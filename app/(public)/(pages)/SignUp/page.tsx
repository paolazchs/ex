import Input from '@/app/components/shared/input';
import { cva } from 'class-variance-authority';

const mainContainer = cva(  'flex flex-col gap-5 justify-center items-center h-screen bg-[#FAFAFA] w-full');

const formContainer = cva('bg-white shadow shadow-black/30 h-[70vh] w-2/3 rounded-sm flex flex-col justify-center items-center');

const textStyle = cva('text-[1.5rem] sm:text-[3rem] font-bold text-black');

export default function SignUp() {
  return (
    <main className={mainContainer()}>
      <h1 className={textStyle()}>
        <span className="text-[#FF0404]">Toyota</span>Tech
      </h1>

      <div className={formContainer()}>
        <h2 className='font-bold text-[1rem] sm:text-3xl'>Bem vindo!</h2>

      </div>
    </main>
  );
}
