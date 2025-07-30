import { useSelector } from "react-redux";
import store, { type DecrementAction, type IncrementAction } from "../../store";

const Counter = () => {
  return (
    <div className="  flex justify-between items-center px-2 w-45 h-8 bg-gray-200 rounded-2xl border border-gray-300">
      <div className="relative flex h-5 w-5 bg-gray-200 border border-gray-300 rounded-full ">
        <button
          className="absolute left-1 bottom-[-0.3rem] border text-2xl font-medium border-none cursor-pointer"
          onClick={() => store.dispatch({ type: "decrement" } satisfies DecrementAction)}
        >
          -
        </button>
      </div>
      <h3>{store.getState().counter}</h3>
      <div className="relative flex items-center h-5 w-5 bg-gray-200 border border-gray-300 rounded-full">
        <button
          className="absolute left-[0.2rem] border border-none text-[1.1rem] font-medium cursor-pointer "
          onClick={() => store.dispatch({ type: "increment" } satisfies IncrementAction)}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default Counter;
