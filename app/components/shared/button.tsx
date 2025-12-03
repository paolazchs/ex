import { cva } from 'class-variance-authority';

const buttonStyles = cva('w-full bg-[#FF0404] h-13  rounded-sm text-white font-semibold cursor-pointer');

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {

}

export default function Button({ children, onClick, ...props }: ButtonProps) {
  return(
  <div>
    <button className={buttonStyles()} {...props}>
      {children}
    </button>
  </div>
  );
}
