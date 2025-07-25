export const validations: {
  name: RegExp;
  nameErrorMessage: string;
  email: RegExp;
  emailErrorMessage: string;
  phoneNumber: RegExp;
  phoneNumberErrorMessage: string;
} = {
  name: /^[a-zA-Zа-яА-ЯіІїЇєЄґҐ' -]+$/,
  nameErrorMessage: "Ім'я може містити лише літери, пробіли, дефіси та апострофи.",
  email: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
  emailErrorMessage: "Введіть коректний емейл",
  phoneNumber: /^(?:\+380|0)\d{9}$|^(?:\+380|0)\d{2}[- ]?\d{3}[- ]?\d{2}[- ]?\d{2}$/,
  phoneNumberErrorMessage: "Введіть коректний номер телефону (наприклад, +380XXXXXXXXX або 0XXXXXXXXX)",
};
