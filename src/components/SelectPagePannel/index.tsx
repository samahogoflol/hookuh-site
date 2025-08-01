import BtnPagePannel from "../Buttons/BtnPagePannel";

const SelectPagePannel = () => {
  return (
    <>
      <div className="text-center mt-5">
        <BtnPagePannel children="1" />
        <BtnPagePannel children="2" />
        <BtnPagePannel children="3" />
        <BtnPagePannel children="4" />
        <BtnPagePannel children="6" />
        <BtnPagePannel children="..." />
        <BtnPagePannel children="109" />
      </div>
    </>
  );
};

export default SelectPagePannel;
