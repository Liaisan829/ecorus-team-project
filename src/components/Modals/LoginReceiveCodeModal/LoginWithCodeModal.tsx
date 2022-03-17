import React from "react";
import { observer } from "mobx-react";
import { Field, Form, Formik } from "formik";
import { useStores } from "../../../utils/use-stores-hook";
import { Modal } from "../Modal/Modal";
import {LoginSchema} from "../../../schemas/LoginSchema";
import { Button } from "../../ui/Button/Button";
import styles from "../Modal/Modal.module.scss";
import { LoginCheckCodeModal } from "../LoginCheckCodeModal/LoginCheckCodeModal";
import { LoginModal } from "../LoginModal/LoginModal";
import { LoginForPartnersModal } from "../ForPartnersModal/LoginForPartnersModal";

export const LoginWithCodeModal = observer(() => {
  const { modalStore: { clearCurrentModal, setCurrentModal } } = useStores();
  
  const onReceiveCodeClick = () => {
    clearCurrentModal();
    setCurrentModal(LoginCheckCodeModal);
  }
  
  const onAlreadyLoggedClick = () => {
    clearCurrentModal();
    setCurrentModal(LoginModal);
  }
  
  const onPartnerButtonClick = () => {
    clearCurrentModal();
    setCurrentModal(LoginForPartnersModal)
  }

  return (
    <Modal title="Вход или регистрация" onClose={clearCurrentModal}>
      <Formik initialValues={{
        phone: "",
      }}
              validationSchema={LoginSchema}
              onSubmit={values => {
                console.log(values);
              }}
      >

        {({ errors, touched }) => (

          <Form className={styles.modal_container}>
            <Field name="phone" placeholder="Телефон" />
            {errors.phone && touched.phone ? (
              <div className={styles.modal_container__error}>{errors.phone}</div>
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
                onClick={onAlreadyLoggedClick}
                theme={""}
                color={"#07C88E"}
                children={"Я уже зарегистрировался(-ясь)"}
              />
            </div>

            <Button type="button"
                    onClick={onPartnerButtonClick}
                    disabled={false}
                    theme={"grey"}
                    children={"Вход для партнеров"}
            />
          </Form>)}
      </Formik>
    </Modal>
  );
});