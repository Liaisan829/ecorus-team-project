import { observer } from "mobx-react";
import { FormikValues, useFormik } from "formik";
import { Modal } from "../Modal/Modal";
import { useStores } from "../../../utils/use-stores-hook";
import { Button } from "../../ui/Button/Button";
import styles from "../Modal/Modal.module.scss";
import axios from "axios";
import * as Yup from "yup";

/*s2Ssdfv*/

export const SignUpModal = observer(() => {
  const { modalStore: { clearCurrentModal } } = useStores();

  axios.defaults.baseURL = "https://ecoapp.cloud.technokratos.com/eco-rus/api/v1/";

  const onSignUpClick = (values: FormikValues) => {
    axios.post("account", {
      username: values.username,
      email: values.email,
      phone_number: values.phone,
      password: values.password
    })
      .then((res)=>{
        console.log(res.data);
        clearCurrentModal();
      })
      .catch((err)=>{
        console.log(err);
      })

    clearCurrentModal();
  };

  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      phone: "",
      password: "",
      repassword: ""
    },
    validationSchema: Yup.object().shape({
      username: Yup.string()
        .required("Введите имя")
        .min(2, "Минимальная длина 2 символа"),
      email: Yup.string()
        .required("Введите почту")
        .email("Введите действительную почту"),
      phone: Yup.string()
        .required("Введите номер телефона")
        .matches(/^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/g,
          "Неверный формат номера"),
      password: Yup.string()
        .required("Введите пароль")
        .matches(/^(?=.*[0-9])(?=.*[a-z]).{3,10}$/g,
          "Пароль должен содержать строчные латинские  буквы, а также цифру")
        .min(3, "Минимальная длина пароля 3 символа"),
      repassword: Yup.string().required("Повторите пароль")
        .oneOf([Yup.ref("password"), null], "Passwords must match")
    }),
    onSubmit: (values) => {
      console.log(values);
      onSignUpClick(values);
    }
  });

  return (
    <Modal title="Регистрация" onClose={clearCurrentModal}>
      <form onSubmit={formik.handleSubmit} className={styles.modal_container}>
        <input
          type="text"
          name="username"
          placeholder="Имя"
          value={formik.values.username}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.errors.username && formik.touched.username ? (
          <div className={styles.modal_container__error}>{formik.errors.username}</div>
        ) : null}

        <input
          type="email"
          name="email"
          placeholder="Почта"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.errors.email && formik.touched.email ? (
          <div className={styles.modal_container__error}>{formik.errors.email}</div>
        ) : null}

        <input
          type="text"
          name="phone"
          placeholder="Телефон"
          value={formik.values.phone}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.errors.phone && formik.touched.phone ? (
          <div className={styles.modal_container__error}>{formik.errors.phone}</div>
        ) : null}

        <input
          type="password"
          name="password"
          placeholder="Пароль"
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.errors.password && formik.touched.password ? (
          <div className={styles.modal_container__error}>{formik.errors.password}</div>
        ) : null}

        <input
          type="password"
          name="repassword"
          placeholder="Повторите пароль"
          value={formik.values.repassword}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.errors.repassword && formik.touched.repassword ? (
          <div className={styles.modal_container__error}>{formik.errors.repassword}</div>
        ) : null}

        <Button
          type="submit"
          theme={"green"}
          children={"Зарегистрироваться"}
        />
      </form>
    </Modal>
  );
});