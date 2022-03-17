import { observer } from "mobx-react";
import { Field, Form, Formik } from "formik";
import { Modal } from "../Modal/Modal";
import { useStores } from "../../../utils/use-stores-hook";
import { Button } from "../../ui/Button/Button";
import { LoginWithCodeModal } from "../LoginReceiveCodeModal/LoginWithCodeModal";
import { LoginSchema } from "../../../schemas/LoginSchema" ;
import { LoginForPartnersModal } from "../ForPartnersModal/LoginForPartnersModal";
import styles from "../Modal/Modal.module.scss";

export const LoginModal = observer(() => {
  const { modalStore: { clearCurrentModal, setCurrentModal } } = useStores();

  const onLoginClick = () => {
    clearCurrentModal();
  };

  const onLoginWithCodeClick = () => {
    setCurrentModal(LoginWithCodeModal);
  };

  const onSignUpClick = () => {
    setCurrentModal(LoginWithCodeModal);
  };

  const onPartnerButtonClick = () => {
    setCurrentModal(LoginForPartnersModal);
  };

  return (
    <Modal title="Вход" onClose={clearCurrentModal}>
      <Formik initialValues={{
        phone: "",
        password: ""
      }}
              validationSchema={LoginSchema}
              onSubmit={values => {
                console.log(values);
              }}
              validateOnMount
      >

        {({ errors, touched, isValid, dirty, isSubmitting }) => (
          <Form className={styles.modal_container}>
            <Field name="phone" placeholder="Телефон" />
            {errors.phone && touched.phone ? (
              <div className={styles.modal_container__error}>{errors.phone}</div>
            ) : null}

            <Field name="password" placeholder="Пароль" />
            {errors.password && touched.password ? (
              <div className={styles.modal_container__error}>{errors.password}</div>
            ) : null}

            <Button type="submit"
                    disabled={!dirty}
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