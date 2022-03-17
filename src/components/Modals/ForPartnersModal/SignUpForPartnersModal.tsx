import { observer } from "mobx-react";
import { Field, Form, Formik } from "formik";
import { Modal } from "../Modal/Modal";
import { useStores } from "../../../utils/use-stores-hook";
import { Button } from "../../ui/Button/Button";
import { LoginSchema } from "../../../schemas/LoginSchema" ;
import styles from "../Modal/Modal.module.scss";

export const SignUpForPartnersModal = observer(() => {
  const { modalStore: { clearCurrentModal, setCurrentModal } } = useStores();

  const onReceiveCodeClick = () => {
    clearCurrentModal();
  };

  const onLoginWithCodeClick = () => {
    setCurrentModal(SignUpForPartnersModal);
  };

  const onSignUpClick = () => {
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
              validateOnMount
      >

        {({ errors, touched, dirty, isValid }) => (

          <Form className={styles.modal_container}>
            <Field name="partners" placeholder="Наименование организации" />
            {errors.password && touched.partners ? (
              <div className={styles.modal_container__error}>{errors.partners}</div>
            ) : null}
            <Field name="email" type="email" placeholder="Email" />
            {errors.email && touched.email ? (
              <div className={styles.modal_container__error}>{errors.email}</div>
            ) : null}
            <Field name="password" placeholder="Пароль" />
            {errors.password && touched.password ? (
              <div className={styles.modal_container__error}>{errors.password}</div>
            ) : null}
            <Button type="submit"
                    disabled={!dirty}
                    onClick={onReceiveCodeClick}
                    theme={"green"}
                    children={"Получить код"}
            />

            <div className={styles.modal_container__row}>
              <Button
                type="button"
                onClick={onLoginWithCodeClick}
                theme={""}
                color={"#07C88E"}
                children={"Войти с помощью смс"}
              />
              <Button
                type="button"
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