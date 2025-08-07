import BtnPagePannel from "../Buttons/BtnPagePannel";

interface SelectPagePannelProps {
  onLoad: () => void;
}

const SelectPagePannel: React.FC<SelectPagePannelProps> = ({ onLoad }) => {
  return (
    <>
      <div className="text-center mt-5">
        <BtnPagePannel onLoad={onLoad} children="1" />
        <BtnPagePannel children="2" />
        <BtnPagePannel children="3" />
        <BtnPagePannel children="4" />
        <BtnPagePannel children="..." />
        <BtnPagePannel children="109" />
        <BtnPagePannel children=">" />
      </div>
    </>
  );
};

export default SelectPagePannel;
