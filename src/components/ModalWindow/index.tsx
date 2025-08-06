import React from "react";
import type { Dispatch, SetStateAction } from "react";
import "./index.css";
import Basket from "../Basket";

interface ModalWindowProps {
  active: boolean;
  setActive: Dispatch<SetStateAction<boolean>>;
}

const ModalWindow: React.FC<ModalWindowProps> = ({ active, setActive }) => {
  return (
    <div className={active ? "modal active" : "modal"} onClick={() => setActive(false)}>
      <div onClick={(e) => e.stopPropagation()}>
        <Basket />
      </div>
    </div>
  );
};

export default ModalWindow;
