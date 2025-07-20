const ContactWithUs = () => {
  return (
    <>
      <div className="grid grid-cols-2 max-w mt-20">
        <div className="h-40 bg-gray-100 text-center ml-[-16.5rem] ">
          <div className="mt-5">
            <p className="text-[2rem] font-medium ml-60">Потрібна допомога з вибором?</p>
            <p className="ml-66">
              Зателефонуйте нам або залиште свій номер телефону, і наші менеджери зв`яжуться з вами <br />
              найближчим часом.
            </p>
          </div>
        </div>
        <div className="h-40 bg-black  text-white mr-[-16.5rem]  ">
          <div className="mr-80 text-center mt-5 ">
            <p className="text-[2rem] cursor-pointer">+38(050)844-95-00</p>
            <button className="border-white border-2 w-[16rem] h-12 rounded-3xl font-medium text-[1.3rem] cursor-pointer">
              Чекаю на дзвінок
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactWithUs;
