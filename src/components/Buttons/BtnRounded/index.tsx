import type { ButtonProps } from "../../../types/btnProps";

const BtnRounded: React.FC<ButtonProps> = ({ children }) => {
  return (
    <>
      <button className="max-w-55 min-w-40 h-10  text-black font-medium rounded-3xl cursor-pointer border hover:bg-black hover:text-white">
        {children}
      </button>
    </>
  );
};

export default BtnRounded;
