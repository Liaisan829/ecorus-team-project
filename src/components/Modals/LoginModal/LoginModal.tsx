import {observer} from "mobx-react";
import {useState} from "react";
import {Field, Form, Formik} from "formik";
import {Modal} from "../Modal/Modal";
import {useStores} from "../../../utils/use-stores-hook";
import {Button} from "../../ui/Button/Button";
import {LoginWithCodeModal} from "../LoginReceiveCodeModal/LoginWithCodeModal";
import {LoginSchema} from "../../../schemas/LoginSchema" ;
import styles from "../Modal/Modal.module.scss";
import {Navigate} from "react-router";
import {LoginForPartnersModal} from "../ForPartnersModal/LoginForPartnersModal";

export const LoginModal = observer(() => {
    const {modalStore: {clearCurrentModal, setCurrentModal}} = useStores();
    const [isValid, setValid] = useState(true);//чтобы при неверном disable true сделать кнопку

    const onLoginClick = () => {
        console.log("pressed login button");
        // clearCurrentModal();
        // if(isValid){
        //   <Navigate to="/" replace={true}/>
        // }
        //редирект на главную страницу с лк в хедере или в личный кабинет
    };

    const onLoginWithCodeClick = () => {
        clearCurrentModal();
        setCurrentModal(LoginWithCodeModal);
    };

    const onSignUpClick = () => {
        clearCurrentModal();
        setCurrentModal(LoginWithCodeModal);
    };

    const onPartnerButtonClick = () => {
        clearCurrentModal();
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
            >

                {({errors, touched}) => (

                    <Form className={styles.modal_container}>
                            <Field name="phone" placeholder="Телефон"/>
                            {errors.phone && touched.phone ? (
                                <div className={styles.modal_container__error}>{errors.phone}</div>
                            ) : null}
                            <Field name="password" placeholder="Пароль"/>
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