import { observer } from "mobx-react";
import { Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { Modal } from "../Modal/Modal";
import { useStores } from "../../../utils/use-stores-hook";
import { Button } from "../../ui/Button/Button";
import { Icon } from "../../ui/Icon/Icon";
import { Link } from "react-router-dom";

export const LoginModal = (setVisible: Function) => {

  const SignupSchema = Yup.object().shape({
    phone: Yup.string()
      .required("Введите номер телефона")
      .matches(
        /^([0]{1}|\+?[234]{3})([7-9]{1})([0|1]{1})([\d]{1})([\d]{7})$/g,
        "Неправильный номер телефона"
      ),
    password: Yup.string()
      .required("Введите пароль")
      .min(4, "Минимальное количество знаков - 4")
  });

  return (
    <div>
      <div>
        <h2>Вход</h2>
        <button onClick={() => setVisible(false)}>
          <Icon name={"close"} width={18} height={18} />
        </button>
      </div>

      <div>

        <Formik initialValues={{
          phone: "",
          password: ""
        }}
                validationSchema={SignupSchema}
                onSubmit={values => {
                  console.log(values);
                }}
        >
          {({ errors, touched }) =>
            (<Form>
              <div>
                <Field name="phone" />
                <Field name="password" />
                <button type="submit">
                  <p>Войти</p>
                </button>
                {touched.phone && errors.phone ? (
                  <div>{errors.phone}</div>
                ) : null}
                {touched.password && errors.password ? (
                  <div>{errors.password}</div>
                ) : null}
              </div>
            </Form>)}
        </Formik>

        <div>
          <Link to={""}>
            Войти с помощью смс
          </Link>
          <Link to={""}>
            Регистрация
          </Link>
        </div>
        <button>
          Вход для партнёров
        </button>
      </div>
    </div>
  );
};