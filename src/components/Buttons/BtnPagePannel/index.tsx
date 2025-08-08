interface BtnPagePannelProps {
  children: string;
  onLoadMore?: () => void;
}

const BtnPagePannel: React.FC<BtnPagePannelProps> = ({ children, onLoadMore }) => {
  return (
    <>
      <button
        onClick={onLoadMore}
        className="min-w-9 max-w-14 h-9 border-1 border-gray-300 text-center pl-3 pr-3 cursor-pointer hover:bg-gray-200"
      >
        {children}
      </button>
    </>
  );
};

export default BtnPagePannel;
