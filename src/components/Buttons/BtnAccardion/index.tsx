import type { ButtonProps } from "../../../types/btnProps";

const BtnAccardion: React.FC<ButtonProps> = ({ children }) => {
  return (
    <>
      <button className="flex justify-between text-start pl-3 items-center w-70 h-9 border-l-black border-l-2 bg-gray-100  mb-[0.1rem] cursor-pointer">
        {children} <span className="pr-3 text-[1.4rem] font-bold pb-1">{">"}</span>
      </button>
    </>
  );
};

export default BtnAccardion;
