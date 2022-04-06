import React from "react";
import {reduxForm, Field} from "redux-form"
import {Input} from "../common/FormsControls/FormControls";
import {required} from "../../utils/validators/validators";
//import {Form, Field} from 'react-final-form'

type OnSubmitType = {
    Form: string
}

const LoginForm = (props) => {
    return (
        //<Form>
            <form onSubmit={props.handleSubmit}>
                <div>
                    <Field placeholder={"Login"}
                           name={"login"}
                           component={Input}
                           validate={[required]}/>
                </div>
                <div>
                    <Field placeholder={"Password"}
                           name={"password"}
                           component={Input}
                           validate={[required]}/>
                </div>
                <div>
                    <Field component={Input} name={"rememberMe"} type={"checkbox"}/> Remember me
                </div>
                <div>
                    <button>Login</button>
                </div>
            </form>

       // </Form>
    )
}

const LoginReduxForm = reduxForm ({form: 'login'})(LoginForm)

const Login = () => {
    const onSubmit = (formData) => {
        console.log(formData)
    }
    return <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>
}
export default Login;