import React from "react";
import {reduxForm, Field} from "redux-form"
import {Input} from "../common/FormsControls/FormControls";
import {required} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";
import {Redirect} from "react-router-dom"
import style from "../common/FormsControls/FormControls.module.css"
//import {Form, Field} from 'react-final-form'

type OnSubmitType = {
    Form: string
}

const LoginForm = (props) => {
    return (
        //<Form>
            <form onSubmit={props.handleSubmit}>
                <div>
                    <Field placeholder={"Email"}
                           name={"email"}
                           component={Input}
                           validate={[required]}/>
                </div>
                <div>
                    <Field placeholder={"Password"}
                           name={"password"}
                           type={"password"}
                           component={Input}
                           validate={[required]}/>
                </div>
                <div>
                    <Field component={Input}
                           name={"rememberMe"}
                           type={"checkbox"}/> Remember me
                </div>
                {props.error && <div className={style.formSummaryError}>
                    {props.error}
                </div>}
                <div>
                    <button>Login</button>
                </div>
            </form>

       // </Form>
    )
}

const LoginReduxForm = reduxForm ({form: 'login'})(LoginForm)

const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe)
    }

    if(props.isAuth) {
        return <Redirect to={"/profile"} />
    }
    return <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>
}

const mapStateToProps = (state) => ({
        isAuth: state.auth.isAuth
})

export default connect (mapStateToProps, {login})(Login);