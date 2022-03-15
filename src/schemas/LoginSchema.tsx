import * as Yup from "yup";

export const LoginSchema = Yup.object().shape({
  phone: Yup.string()
    .required("Введите номер телефона")
    .matches(/^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/g,
      "Неверный формат номера"),
  password: Yup.string()
    .required("Введите пароль")
    .matches(/((?=.*d)(?=.*[a-z])(?=.*[A-Z]).)/g,
      "Пароль должен содержать заглавные и строчные латинские  буквы, а также цифру")
    .min(4, "Минимальная длина пароля 4 символа"),
  code: Yup.number()
    .required("Введите код")
    .min(4, "Введите действительный код"),
  email: Yup.string()
    .required("Введите почту")
    .email("Введите действительную почту"),
  partners: Yup.string()
    .required("Введите наименование организации")
});
