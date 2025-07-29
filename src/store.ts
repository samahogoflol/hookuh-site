import { configureStore } from "@reduxjs/toolkit";

type State = {
  counter: number;
};

export type IncrementAction = {
  type: "increment";
};

export type DecrementAction = {
  type: "decrement";
};

type Action = IncrementAction | DecrementAction;

const initialState: State = {
  counter: 0,
};

const reducer = (state = initialState, action: Action): State => {
  switch (action.type) {
    case "increment":
      return {
        counter: state.counter + 1,
      };
    case "decrement":
      return {
        counter: state.counter - 1,
      };
    default:
      return state;
  }
};

export default configureStore({
  reducer: reducer,
});
