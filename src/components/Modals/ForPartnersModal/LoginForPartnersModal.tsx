import { observer } from "mobx-react";
import { useState } from "react";
import { Field, Form, Formik } from "formik";
import { Modal } from "../Modal/Modal";
import { useStores } from "../../../utils/use-stores-hook";
import { Button } from "../../ui/Button/Button";
import { LoginSchema } from "../../../schemas/LoginSchema" ;
import styles from "../Modal/Modal.module.scss";
import { Navigate } from "react-router";
import { SignUpForPartnersModal } from "./SignUpForPartnersModal";

export const LoginForPartnersModal = observer(() => {
  const { modalStore: { clearCurrentModal, setCurrentModal } } = useStores();
  const [isValid, setValid] = useState(true);//чтобы при неверном disable true сделать кнопку

  const onLoginClick = () => {
    console.log("pressed login button");
    clearCurrentModal();
    // if(isValid){
    //   <Navigate to="/" replace={true}/>
    // }
    //редирект на главную страницу с лк в хедере или в личный кабинет
  };

  const onLoginWithCodeClick = () => {
    clearCurrentModal();
    setCurrentModal(SignUpForPartnersModal);
  };

  const onSignUpClick = () => {
    clearCurrentModal();
    setCurrentModal(SignUpForPartnersModal);
  };

  return (
    <Modal title="Вход" onClose={clearCurrentModal}>
      <Formik initialValues={{
        email: "",
        password: ""
      }}
              validationSchema={LoginSchema}
              onSubmit={values => {
                console.log(values);
              }}
      >

        {({ errors, touched }) => (

          <Form className={styles.modal_container}>
            <Field name="email" type = "email" placeholder="Email" />
            {errors.email && touched.email ? (
              <div className={styles.modal_container__error}>{errors.email}</div>
            ) : null}
            <Field name="password" placeholder="Пароль" />
            {errors.password && touched.password ? (
              <div className={styles.modal_container__error}>{errors.password}</div>
            ) : null}
            <Button type="submit"
                    disabled={false}
                    onClick={onLoginClick}
                    theme={"green"}
                    children={"Войти"}
            />

            <div className={styles.modal_container__row}>
              <Button
                type="button"
                disabled={false}
                onClick={onLoginWithCodeClick}
                theme={""}
                color={"#07C88E"}
                children={"Войти с помощью смс"}
              />
              <Button
                type="button"
                disabled={false}
                onClick={onSignUpClick}
                theme={""}
                color={"#07C88E"}
                children={"Регистрация"}
              />
            </div>

          </Form>)}
      </Formik>

    </Modal>
  );
});