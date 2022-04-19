import React from 'react';
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import {BrowserRouter as Router, Route} from 'react-router-dom';
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import Friends from "./components/Friends/Friends";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {connect} from "react-redux";
import {withRouter, Switch} from "react-router-dom";
import {compose} from "redux";
import {initializeApp, initializedSuccess} from "./redux/app-reducer";
import Preloader from "./components/common/Preloader/Preloader";

const DialogsContainerComp = DialogsContainer as React.ElementType
const ProfileContainerComp = ProfileContainer as React.ElementType
const LoginComp = Login as React.ElementType

interface Props {
    initializeApp: () => void
}

class App extends React.Component<Props> {

    componentDidMount() {
        this.props.initializeApp()
    }

    render() {
        <Preloader />
        return (
            //<Router>
                <div className="app-wrapper">
                    <HeaderContainer/>
                    <Navbar/>
                    <div className="app-wrapper-content">
                            <Switch>
                                {/*<Route path='/profile' component={ProfileContainer} />*/}
                                {/*<Route path='/profile:userId?' component={ProfileContainer} />*/}
                                <Route path='/profile:userId?' render={() => <ProfileContainerComp/>}/>
                                <Route path='/dialogs' render={() => <DialogsContainerComp/>}/>
                                {/*<Route path='/dialogs' component={DialogsContainer} />*/}
                                <Route path='/news' component={News}/>
                                <Route path='/music' component={Music}/>
                                <Route path='/settings' component={Settings}/>
                                <Route path='/friends' component={Friends}/>
                                <Route path='/users' component={UsersContainer}/>
                                <Route path='/login' render={() => <LoginComp/>}/>
                            </Switch>
                    </div>
                </div>
            //</Router>
        );
    }
}
const mapStateToProps = (state) => ({
    initialized: state.app.initialized
})

export default withRouter(
    connect <any,Props>(mapStateToProps,{initializeApp})(App) as any
);


// export default compose(
//     withRouter,
//     connect(mapStateToProps, {initializeApp}))(App)

