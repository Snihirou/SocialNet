import React from 'react';
import {addMessageAC, onMassageChangeAC} from "../../redux/dialog-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/WithAuthRedirect";
import {compose} from "redux";


let mapStateToProps = (state) => {
    return {
        dialogPage: state.dialogPage,
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        addMessage: () => {
            dispatch(addMessageAC())
        },
        onMassageChange: (post) => {
            let action = onMassageChangeAC(post)
            dispatch(action)
        }
    }
};

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect)(Dialogs)
;