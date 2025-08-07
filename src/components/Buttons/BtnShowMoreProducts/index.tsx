interface BtnShowMoreProductsProps {
  onLoad: () => void;
}

const BtnShowMoreProducts: React.FC<BtnShowMoreProductsProps> = ({ onLoad }) => {
  return (
    <>
      <button
        onClick={onLoad}
        className="w-50 h-8 text-[0.9rem] text-black rounded cursor-pointer border border-gray-300 hover:border-none hover:bg-gray-200 "
      >
        Показати ще 20 товарів
      </button>
    </>
  );
};

export default BtnShowMoreProducts;
