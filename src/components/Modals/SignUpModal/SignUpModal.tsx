import { observer } from "mobx-react";
import { Field, Form, Formik, FormikValues } from "formik";
import { Modal } from "../Modal/Modal";
import { useStores } from "../../../utils/use-stores-hook";
import { Button } from "../../ui/Button/Button";
import { LoginSchema } from "../../../schemas/LoginSchema" ;
import styles from "../Modal/Modal.module.scss";
import axios from "axios";

export const SignUpModal = observer(() => {
  const { modalStore: { clearCurrentModal } } = useStores();

  const onSignUpClick = (values: FormikValues) => {
    axios.post("account", {
      username: values.username,
      email: values.email,
      password: values.password
    })
      .then((res) => {
        console.log(res);
        clearCurrentModal();
      })
      .catch(err => console.log(err));
  };

  return (
    <Modal title="Вход" onClose={clearCurrentModal}>
      <Formik initialValues={{
        username: "",
        email: "",
        password: "",
        repassword: ""
      }}
              validationSchema={LoginSchema}
              onSubmit={(values) => {
                onSignUpClick(values);
                console.log(values);
              }}
              validateOnMount
              validateOnBlur
              validateOnChange
      >

        {/*s2Ssdfv*/}

        {({ errors, touched, dirty}) => (

          <Form className={styles.modal_container}>
            <Field name="username" placeholder="UserName" />
            {errors.username && touched.username ? (
              <div className={styles.modal_container__error}>{errors.username}</div>
            ) : null}
            <Field name="email" type="email" placeholder="Email" />
            {errors.email && touched.email ? (
              <div className={styles.modal_container__error}>{errors.email}</div>
            ) : null}
            <Field name="password" type="password" placeholder="Пароль" />
            {errors.password && touched.password ? (
              <div className={styles.modal_container__error}>{errors.password}</div>
            ) : null}
            <Field name="repassword" type="password" placeholder="Повторите пароль" />
            {errors.repassword && touched.repassword ? (
              <div className={styles.modal_container__error}>{errors.repassword}</div>
            ) : null}
            <Button type="submit"
                    disabled={!dirty}
                    onClick={()=>console.log("clicked")}
                    theme={"green"}
                    children={"Зарегистрироваться"}
            />

          </Form>)}
      </Formik>

    </Modal>
  );
});