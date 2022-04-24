import React from 'react';
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import {Router, Route, BrowserRouter} from 'react-router-dom';
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import Friends from "./components/Friends/Friends";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {connect, Provider} from "react-redux";
import {withRouter, Switch} from "react-router-dom";
import {initializeApp} from "./redux/app-reducer";
import Preloader from "./components/common/Preloader/Preloader";
import {compose} from "redux";
import {store} from "./redux/redux-store";

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
        );
    }
}
const mapStateToProps = (state) => ({
    initialized: state.app.initialized
})

// export default withRouter(
//     connect <any,Props>(mapStateToProps,{initializeApp})(App) as any
// );
let AppContainer = compose (
    withRouter,
    connect <any,Props>(mapStateToProps,{initializeApp}))(App) as any;

let SamuraiJSApp = (props) => {
    return <BrowserRouter>
        <Provider store={store}>
            <AppContainer/>
        </Provider>
    </BrowserRouter>
}
export default SamuraiJSApp