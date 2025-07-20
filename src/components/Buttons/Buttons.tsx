interface ButtonProps {
  children: string;
}

export const ButtonBuy: React.FC<ButtonProps> = ({ children }) => {
  return (
    <>
      <button className="max-w-55 min-w-40 h-8  bg-black text-white font-medium rounded cursor-pointer ">{children}</button>
    </>
  );
};

export const ButtonHeart = () => {
  return (
    <>
      <button className="">
        <span className="text-[2.5rem] cursor-pointer ml-5 opacity-30">&#x2661;</span>
      </button>
    </>
  );
};
