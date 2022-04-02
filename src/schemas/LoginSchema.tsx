import * as Yup from "yup";

export const LoginSchema = Yup.object().shape({
  phone: Yup.string()
    .required("Введите номер телефона")
    .matches(/^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/g,
      "Неверный формат номера"),
  password: Yup.string()
    .required("Введите пароль")
    .matches(/^(?=.*[0-9])(?=.*[a-z]).{3,10}$/g,
      "Пароль должен содержать строчные латинские  буквы, а также цифру"),
  repassword: Yup.string().
    required("Повторите пароль")
    .oneOf([Yup.ref('password'), null], 'Passwords must match'),
  code: Yup.number()
    .required("Введите код")
    .min(4, "Введите действительный код"),
  email: Yup.string()
    .required("Введите почту")
    .email("Введите действительную почту"),
  partners: Yup.string()
    .required("Введите наименование организации"),
  username: Yup.string()
    .required("Введите имя")
    .min(2, "Минимальная длина 2 символа")
});
