import ButtonBuy from "../Buttons/BtnAddItemToCart";

const FormLeaveReview = () => {
  return (
    <>
      <div className="w-140 h-90 text-center">
        <h2 className="font-medium text-[1.2rem]">Написати відгук</h2>
        <hr className="h-1 border-gray-200 mt-2 mb-2" />
        <h2 className="text-center">Рейтинг</h2>
        <div>*****</div>
        <form className="p-3">
          <input
            type="text"
            className="mb-5 p-3 w-full border outline-none border-gray-200 focus:border focus:border-blue-300 focus:shadow-blue-300 focus:shadow "
            placeholder="Ваше ім'я"
          />
          <textarea
            className="p-3 w-full h-40 border outline-none border-gray-200 focus:border focus:border-blue-300 focus:shadow-blue-300 focus:shadow"
            placeholder="Ваш відгук"
          ></textarea>
          <div className=" flex justify-end mt-5">
            <ButtonBuy />
          </div>
        </form>
      </div>
    </>
  );
};

export default FormLeaveReview;
