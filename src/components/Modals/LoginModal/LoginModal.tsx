import { observer } from "mobx-react";
import * as Yup from "yup";
import { Field, Form, Formik } from "formik";
import { Modal } from "../Modal/Modal";
import { useStores } from "../../../utils/use-stores-hook";
import { Button } from "../../ui/Button/Button";
import styles from "../Modal/Modal.module.scss";

export const LoginModal = observer(() => {
  const { modalStore: { clearCurrentModal } } = useStores();

  const LoginSchema = Yup.object().shape({
    phone: Yup.string()
      .required("Введите номер телефона")
      .matches(/^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/g,
        "Неверный формат номера"),
    password: Yup.string()
      .required("Введите пароль")
      .matches(/((?=.*d)(?=.*[a-z])(?=.*[A-Z]).)/g,
        "Пароль должен содержать заглавные и строчные латинские буквы, а также цифру")
      .min(4, "Минимальная длина пароля 4 символа")
  });

  const onLoginClick = () => {
    console.log("pressed login button");
  };

  const onPartnerButtonClick = () => {
    console.log("pressed partner login button");
  };

  return (
    <Modal title="Вход" onClose={clearCurrentModal}>
      <div>
        <Formik initialValues={{
          phone: "",
          password: ""
        }}
                validationSchema={LoginSchema}
                onSubmit={values => {
                  console.log(values);
                }}
        >

          <Form className={styles.modal_container}>
            <Field name="phone" placeholder="Телефон"/>
            <Field name="password" placeholder="Пароль" />
            <Button type="submit"
                    disabled={false}
                    onClick={onLoginClick}
                    theme={"green"}
                    children = {"Войти"}
            />

            <div className={styles.modal_container__row}>
              <Button
                type="button"
                disabled={false}
                onClick={onLoginClick}
                theme={""}
                children = {"Войти с помощью"}/>
              <Button
                type="button"
                disabled={false}
                onClick={onLoginClick}
                theme={""}
                children = {"Регистрация"}/>
            </div>

            <div>
              <Button type="button"
                      onClick={onPartnerButtonClick}
                      disabled={false}
                      theme={"grey"}
                      children={"Вход для партнеров"}
              />
            </div>
          </Form>

        </Formik>
      </div>
    </Modal>
  );
});