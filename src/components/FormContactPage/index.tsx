import ButtonBuy from "../Buttons/BtnBuy";
import { useForm, type SubmitHandler } from "react-hook-form";
import type { IForm } from "../../types/form";
import { validations } from "../../utils/constants";

const FormContactPage: React.FC<IForm> = () => {
  const { register, handleSubmit, formState } = useForm<IForm>({
    mode: "onChange",
  });

  const onSubmit: SubmitHandler<IForm> = (data) => {
    console.log(data);
  };

  const eMailError = formState.errors["eMail"]?.message;
  const nameError = formState.errors["name"]?.message;

  const { name, nameErrorMessage, email, emailErrorMessage } = validations;

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5 text-center ">
        <h2 className="font-medium text-2xl">Якщо у Вас є запитання, напишіть нам</h2>
        <input
          className="p-3 h-10 border border-gray-300 rounded outline-none focus:border-blue-400 focus:shadow-md focus:shadow-blue-200 transition-all duration-200 ease-in-out "
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
          className="p-3 h-10 border border-gray-300 rounded outline-none focus:border-blue-400 focus:shadow-md focus:shadow-blue-200 transition-all duration-200 ease-in-out "
          type="text"
          placeholder="E-Mail для зв'язку "
          {...register("eMail", {
            required: "Обов'язкове поле",
            pattern: {
              value: email,
              message: emailErrorMessage,
            },
          })}
        />
        {eMailError && <span className="text-red-400 text-left mt-[-0.5rem] mb-[-0.5rem] text-[0.9rem]">{eMailError}</span>}
        <textarea
          className="p-3 h-20 border border-gray-300 rounded outline-none focus:border-blue-400 focus:shadow-md focus:shadow-blue-200 transition-all duration-200 ease-in-out "
          placeholder="Повідомлення"
          minLength={10}
        ></textarea>
        <div className="items-center">
          <ButtonBuy />
        </div>
      </form>
    </>
  );
};

export default FormContactPage;
