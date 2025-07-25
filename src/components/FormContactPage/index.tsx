import { ButtonBuy } from "../Buttons/Buttons";
import { useForm, type SubmitHandler } from "react-hook-form";
import type { IForm } from "../../types/form";

const FormContactPage: React.FC<IForm> = () => {
  const { register, handleSubmit, formState } = useForm<IForm>({
    mode: "onChange",
  });

  const onSubmit: SubmitHandler<IForm> = (data) => {
    console.log(data);
  };

  const eMailError = formState.errors["eMail"]?.message;
  const nameError = formState.errors["name"]?.message;

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
              value: /^[a-zA-Zа-яА-ЯіІїЇєЄґҐ' -]+$/,
              message: "Ім'я може містити лише літери, пробіли, дефіси та апострофи.",
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
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
              message: "Введіть коректний емейл",
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
          <ButtonBuy children="Відправити" />
        </div>
      </form>
    </>
  );
};

export default FormContactPage;

