import { useDispatch, useSelector } from "react-redux";
import { incrementQuantity, decrementQuantity } from "../../modules/cart/cartSlice";
import type { RootState } from "../../store";
interface CounterProps {
  itemId: string;
}

const Counter: React.FC<CounterProps> = ({ itemId }) => {
  const quantity = useSelector((state: RootState) => {
    const item = state.cart.items.find((i) => i.id === itemId);
    return item ? item.quantity : 0;
  });

  const dispatch = useDispatch();

  const onIncrement = () => {
    dispatch(incrementQuantity(itemId));
  };
  const onDecrement = () => {
    if (quantity > 1) {
      dispatch(decrementQuantity(itemId));
    }
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
      <h3>{quantity}</h3>
      <div className="relative flex items-center h-5 w-5 bg-gray-200 border border-gray-300 rounded-full">
        <button onClick={onIncrement} className="absolute left-[0.2rem] border border-none text-[1.1rem] font-medium cursor-pointer ">
          +
        </button>
      </div>
    </div>
  );
};

export default Counter;
