import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {getUserProfile} from "../../redux/profile-reducer";
import {RouteComponentProps, withRouter} from "react-router"
import {Redirect} from 'react-router-dom';
import {withAuthRedirect} from "../../hoc/WithAuthRedirect";
import {compose} from "redux";


type PathParamsType = {
    userId: string
}

export type MapStateToPropsType = {
    profile?: null
    isAuth?: boolean
}

type MapDispatchToPropsType = {
    getUserProfile: (userId) => any
}

type OwnPropsType = MapStateToPropsType & MapDispatchToPropsType
type PropsType = RouteComponentProps<PathParamsType> & OwnPropsType

class ProfileContainer extends React.Component<PropsType> {
    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = "2"
        }
        this.props.getUserProfile(userId)
    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile}/>
        )
    };
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
})

export default compose(connect(mapStateToProps, {getUserProfile}),
    withRouter,
    //withAuthRedirect,
)(ProfileContainer)
