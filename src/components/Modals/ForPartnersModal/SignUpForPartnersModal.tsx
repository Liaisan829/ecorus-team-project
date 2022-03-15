import { observer } from "mobx-react";
import { useState } from "react";
import { Field, Form, Formik } from "formik";
import { Modal } from "../Modal/Modal";
import { useStores } from "../../../utils/use-stores-hook";
import { Button } from "../../ui/Button/Button";
import { LoginSchema } from "../../../schemas/LoginSchema" ;
import styles from "../Modal/Modal.module.scss";
import { Navigate } from "react-router";

export const SignUpForPartnersModal = observer(() => {
  const { modalStore: { clearCurrentModal, setCurrentModal } } = useStores();
  const [isValid, setValid] = useState(true);//чтобы при неверном disable true сделать кнопку

  const onReceiveCodeClick = () => {
    console.log("pressed receive code button");
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
        partners: "",
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
            <Field name="partners" placeholder="Наименование организации"/>
            {errors.password && touched.partners ? (
              <div className={styles.modal_container__error}>{errors.partners}</div>
            ) : null}
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
                    onClick={onReceiveCodeClick}
                    theme={"green"}
                    children={"Получить код"}
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