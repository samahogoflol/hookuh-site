import { ButtonBuy } from "../Buttons/Buttons";
import { useForm, type SubmitHandler } from "react-hook-form";

interface IForm {
  eMail?: string;
  message?: string;
  name?: string;
  textPlaceHolder?: string;
  tel?: string;
}

export const FormContactPage: React.FC<IForm> = () => {
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

export const LeaveReviewForm = () => {
  return (
    <>
      <h1>asd</h1>
    </>
  );
};

export const CallBackForm: React.FC<IForm> = () => {
  const { register, handleSubmit, formState } = useForm<IForm>({
    mode: "onChange",
  });

  const onSubmit: SubmitHandler<IForm> = (data) => {
    console.log(data);
  };

  const nameError = formState.errors["name"]?.message;
  const telError = formState.errors["tel"]?.message;

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-90 text-center p-2">
      <h2 className="font-medium">Залиш свої дані та наш менеджер зв’яжеться з тобою протягом 15 хвилин</h2>
      <input
        className="w-full mt-5 p-3 h-10 border border-gray-300 rounded outline-none focus:border-blue-400 focus:shadow-md focus:shadow-blue-200 transition-all duration-200 ease-in-out "
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
        type="tel"
        placeholder="Введіть номер телефону"
        className="w-full mt-5 p-3 h-10 border border-gray-300 rounded outline-none focus:border-blue-400 focus:shadow-md focus:shadow-blue-200 transition-all duration-200 ease-in-out "
        {...register("tel", {
          required: "Обов'язкове поле",
          pattern: {
            value: /^(?:\+380|0)\d{9}$|^(?:\+380|0)\d{2}[- ]?\d{3}[- ]?\d{2}[- ]?\d{2}$/,
            message: "Введіть коректний номер телефону (наприклад, +380XXXXXXXXX або 0XXXXXXXXX)",
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
