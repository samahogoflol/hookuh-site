import { useDispatch } from "react-redux";
import { incrementQuantity, decrementQuantity } from "../../modules/cart/cartSlice";

interface CounterProps {
  itemId: string;
  children: number;
}

const Counter: React.FC<CounterProps> = ({ itemId, children }) => {
  const dispatch = useDispatch();

  const onIncrement = () => {
    dispatch(incrementQuantity(itemId));
  };
  const onDecrement = () => {
    dispatch(decrementQuantity(itemId));
  };

  return (
    <div className="  flex justify-between items-center px-2 w-30 h-8 bg-gray-200 rounded-2xl border border-gray-300">
      <div className="relative flex h-5 w-5 bg-gray-200 border border-gray-300 rounded-full ">
        <button
          onClick={onDecrement}
          className="absolute left-1 bottom-[-0.3rem] border text-2xl font-medium border-none cursor-pointer"
        >
          -
        </button>
      </div>
      <h3>{children}</h3>
      <div className="relative flex items-center h-5 w-5 bg-gray-200 border border-gray-300 rounded-full">
        <button onClick={onIncrement} className="absolute left-[0.2rem] border border-none text-[1.1rem] font-medium cursor-pointer ">
          +
        </button>
      </div>
    </div>
  );
};

export default Counter;
