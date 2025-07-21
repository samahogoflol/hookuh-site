import { ButtonPagePannel } from "../Buttons/Buttons";

const SelectPagePannel = () => {
  return (
    <>
      <div className="text-center mt-5">
        <ButtonPagePannel children="1" itFirst={true} />
        <ButtonPagePannel children="2" />
        <ButtonPagePannel children="3" />
        <ButtonPagePannel children="4" />
        <ButtonPagePannel children="6" />
        <ButtonPagePannel children="..." />
        <ButtonPagePannel children="109" />
      </div>
    </>
  );
};

export default SelectPagePannel;
