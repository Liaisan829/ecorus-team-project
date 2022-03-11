import { observer } from "mobx-react";
import { Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { Modal } from "../Modal/Modal";
import { useStores } from "../../../utils/use-stores-hook";
import { Button } from "../../ui/Button/Button";

export const LoginModal = observer(() => {
  const { modalStore: { clearCurrentModal } } = useStores();

  const LoginSchema = Yup.object().shape({
    phone: Yup.number().required(),
    password: Yup.string().required()
  });

  return (
    <Modal title="Вход" onClose={clearCurrentModal}>
      <Formik
        initialValues={{
          phone: "",
          password: ""
        }}
        validationSchema={LoginSchema}
        onSubmit={values => {
          //еще что-то
          console.log(values);
        }}
      >
        <Form>
          <Field name = "phone" placeholder="Телефон"/>
          <Field name = "password" placeholder="Пароль"/>
          <Button
            type="sumbit"
            onClick={clearCurrentModal}
            buttonText="Войти"
            buttonColor={"#07C88E"}
          />
        </Form>

      </Formik>

    </Modal>
  );
});