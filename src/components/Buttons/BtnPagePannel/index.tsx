import type { ButtonProps } from "../../../types/btnProps";

const BtnPagePannel: React.FC<ButtonProps> = ({ children }) => {
  return (
    <>
      <button className="min-w-9 max-w-14 h-9 border-1 border-gray-300 text-center pl-3 pr-3 cursor-pointer hover:bg-gray-200">
        {children}
      </button>
    </>
  );
};

export default BtnPagePannel;
