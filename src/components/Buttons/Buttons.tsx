interface ButtonProps {
  children: React.ReactNode;
}

export const ButtonBuy: React.FC<ButtonProps> = ({ children }) => {
  return (
    <>
      <button className="max-w-55 min-w-30 h-10  bg-black text-white font-medium rounded cursor-pointer ">{children}</button>
    </>
  );
};

export const ShowMoreGoods: React.FC<ButtonProps> = ({ children }) => {
  return (
    <>
      <button className="w-60 min-w-40 h-8 text-black rounded cursor-pointer border border-gray-200 hover:bg-gray-200">
        {children}
      </button>
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

export const AcardionButton: React.FC<ButtonProps> = ({ children }) => {
  return (
    <>
      <button className="flex justify-between text-start pl-3 items-center w-70 h-9 border-l-black border-l-2 bg-gray-100  mb-[0.1rem] cursor-pointer">
        {children} <span className="pr-3 text-[1.4rem] font-bold pb-1">{">"}</span>
      </button>
    </>
  );
};

export const ButtonPagePannel: React.FC<ButtonProps> = ({ children }) => {
  return (
    <>
      <button className="min-w-9 max-w-14 h-9 border-1 border-gray-300 text-center pl-3 pr-3 cursor-pointer hover:bg-gray-200">
        {children}
      </button>
    </>
  );
};

export const RoundedButton: React.FC<ButtonProps> = ({ children }) => {
  return (
    <>
      <button className="max-w-55 min-w-40 h-10  text-black font-medium rounded-3xl cursor-pointer border hover:bg-black hover:text-white">
        {children}
      </button>
    </>
  );
};
