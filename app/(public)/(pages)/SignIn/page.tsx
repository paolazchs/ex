import Image from 'next/image';
import { cva } from 'class-variance-authority';
import Input from '@/app/components/shared/input';
import Button from '@/app/components/shared/button';

const mainContainer = cva(
  ' h-screen flex flex-col justify-center items-center gap-8 sm:flex-row sm:gap-0',
);

const imagemContainer = cva('flex flex-col sm:flex w-1/2 justify-center items-center');

const formContainer = cva('w-screen flex flex-col justify-center items-center gap-10 sm:w-1/2 ');

const textStyles = cva(' text-[1.5rem] sm:text-[2rem] font-semibold text-black');

export default function SignIn() {
  return (
    <main className={mainContainer()}>
      <div className={imagemContainer()}>
        <img src="/assets/logoLogin.png" alt="Logo" width={600} />
      </div>

      <div className={formContainer()}>
        <h1 className={textStyles()}>
          Bem vindo ao <span className="text-[#FF0404]">Toyota</span>Tech
        </h1>

        <form className="w-3/5 flex flex-col gap-5">
          <Input type="email" label="Informe seu email:" />

          <Input type="password" label="Senha:" />

          <div className="flex justify-between">
            <p>
              <input type="checkbox" />
              Lembre de mim
            </p>

            <button className="text-gray-400 cursor-pointer underline text-[12px] sm:text-[1rem]">
              Esqueceu senha?
            </button>
          </div>

          <Button type="button" onClick={() => alert('Login feito com sucesso!')}>
            {' '}
            Login{' '}
          </Button>
        </form>
      </div>
    </main>
  );
}
