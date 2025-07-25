import type { IForm } from "../../types/form.js";
import { useForm, type SubmitHandler } from "react-hook-form";
import { validations } from "../../utils/constants.js";

import blackLogo from "./../../imgs/logotypes/kalyan_for_everyone.png";

const FormCallBack: React.FC<IForm> = () => {
  const { register, handleSubmit, formState } = useForm<IForm>({
    mode: "onChange",
  });

  const onSubmit: SubmitHandler<IForm> = (data) => {
    console.log(data);
  };

  const nameError = formState.errors["name"]?.message;
  const telError = formState.errors["tel"]?.message;

  const { name, nameErrorMessage, phoneNumber, phoneNumberErrorMessage } = validations;

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-90 text-center p-2 flex flex-col items-center">
      <h2 className="font-medium">Залиш свої дані та наш менеджер зв’яжеться з тобою протягом 15 хвилин</h2>
      <img src={blackLogo} alt="Компанія ВІП Кальян" width={100} className="mt-5  flex justify-center" />
      <input
        className="w-full mt-5 p-3 h-10 border border-gray-300 rounded outline-none focus:border-blue-400 focus:shadow-md focus:shadow-blue-200 transition-all duration-200 ease-in-out "
        type="text"
        placeholder="Ваше ім'я"
        {...register("name", {
          required: "Обов'язкове поле",
          pattern: {
            value: name,
            message: nameErrorMessage,
          },
        })}
      />
      {nameError && <span className="text-red-400 text-left mt-[-0.5rem] mb-[-0.5rem] text-[0.9rem]">{nameError}</span>}
      <input
        type="tel"
        placeholder="Введіть номер телефону"
        className="w-full mt-5 p-3 h-10 border border-gray-300 rounded outline-none focus:border-blue-400 focus:shadow-md focus:shadow-blue-200 transition-all duration-200 ease-in-out "
        {...register("tel", {
          required: "Обов'язкове поле",
          pattern: {
            value: phoneNumber,
            message: phoneNumberErrorMessage,
          },
          minLength: {
            value: 10,
            message: "Номер телефону має містити щонайменше 10 цифр",
          },
          maxLength: {
            value: 16,
            message: "Номер телефону занадто довгий",
          },
        })}
      />
      {telError && <span className="text-red-400 text-left mt-[-0.5rem] mb-[-0.5rem] text-[0.9rem]">{telError}</span>}
      <button className=" mt-5 p-3 bg-blue-300 rounded cursor-pointer hover:bg-blue-400">Замовити зворотній дзвінок</button>
    </form>
  );
};

export default FormCallBack;
