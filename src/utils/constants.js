export const nameValidation = {
  value: /^[a-zA-Zа-яА-ЯіІїЇєЄґҐ' -]+$/,
  message: "Ім'я може містити лише літери, пробіли, дефіси та апострофи.",
};

export const emailValidation = {
  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
  message: "Введіть коректний емейл",
};

export const phoneNumberValidation = {
  value: /^(?:\+380|0)\d{9}$|^(?:\+380|0)\d{2}[- ]?\d{3}[- ]?\d{2}[- ]?\d{2}$/,
  message: "Введіть коректний номер телефону (наприклад, +380XXXXXXXXX або 0XXXXXXXXX)",
};
