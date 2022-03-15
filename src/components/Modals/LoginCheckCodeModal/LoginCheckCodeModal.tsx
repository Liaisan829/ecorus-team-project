import React from "react";
import { observer } from "mobx-react";
import { Field, Form, Formik } from "formik";
import { useStores } from "../../../utils/use-stores-hook";
import { Modal } from "../Modal/Modal";
import {LoginSchema} from "../../../schemas/LoginSchema";
import { Button } from "../../ui/Button/Button";
import styles from "../Modal/Modal.module.scss";
import { LoginForPartnersModal } from "../ForPartnersModal/LoginForPartnersModal";

export const LoginCheckCodeModal = observer(() => {
  const { modalStore: { clearCurrentModal, setCurrentModal } } = useStores();

  const onCheckCodeClick = () => {
    console.log("check code");
  }

  const onNoCodeClick = () => {
    console.log("no code");
  }

  const onPartnerButtonClick = () => {
    clearCurrentModal();
    setCurrentModal(LoginForPartnersModal);
  }

  return (
    <Modal title="Ввести код" onClose={clearCurrentModal}>
      <Formik initialValues={{
        code: "",
      }}
              validationSchema={LoginSchema}
              onSubmit={values => {
                console.log(values);
              }}
      >

        {({ errors, touched }) => (

          <Form className={styles.modal_container}>
            <div className={styles.modal_container__receivedPhone}>
              <p>Введите код, отправленный вам на телефон</p>
              <p>89274926572</p>
            </div>
            <Field name="code" placeholder="Код" />
            {errors.code && touched.code ? (
              <div className={styles.modal_container__error}>{errors.code}</div>
            ) : null}

            <Button type="submit"
                    disabled={false}
                    onClick={onCheckCodeClick}
                    theme={"green"}
                    children={"Отправить"}
            />

            <div className={styles.modal_container__row}>
              <Button
                type="button"
                disabled={false}
                onClick={onNoCodeClick}
                theme={""}
                color={"#07C88E"}
                children={"Не получил(-а) код"}
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
