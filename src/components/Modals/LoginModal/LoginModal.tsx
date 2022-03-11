import { observer } from "mobx-react";
import { Formik } from "formik";
import * as Yup from "yup";
import { Modal } from "../Modal/Modal";
import { useStores } from "../../../utils/use-stores-hook";

export const LoginModal = observer(() => {
  const { modalStore: { clearCurrentModal } } = useStores();

  const LoginSchema = Yup.object().shape({
    phone: Yup.number().required(),
    password: Yup.string().required()
  });

  return (
    <Modal title="Hello" onClose={clearCurrentModal}>
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

      </Formik>

    </Modal>
  );
});