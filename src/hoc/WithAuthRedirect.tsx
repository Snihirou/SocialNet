import React from "react"
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";
import {MapStateToPropsType} from "../components/Profile/ProfileContainer";

interface ComponentType {
    isAuth: boolean
}

 let mapStateToPropsForRedirect = (state ) => ({
    isAuth: state.auth.isAuth
});

export const withAuthRedirect = (Component) => {
    class RedirectComponent extends React.Component<ComponentType> {
        render () {
            if (!this.props.isAuth) return <Redirect to='/login'/>;
            return  <Component {...this.props}/>
        }
    }

    let ConnectedAuthRedirectComponent = connect(mapStateToPropsForRedirect)(RedirectComponent);
    return ConnectedAuthRedirectComponent;
};