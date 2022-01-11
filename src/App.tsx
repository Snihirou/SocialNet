import React from 'react';
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import Friends from "./components/Friends/Friends";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";


const App = () => {
    //debugger
    return (
        <Router>
            <div className="app-wrapper">
                <HeaderContainer/>
                <Navbar/>
                <div className="app-wrapper-content">
                    {/*<Route path='/profile' component={ProfileContainer} />*/}
                    <Route path='/profile:userId?' component={ProfileContainer} />
                    <Route path='/dialogs' render={() => <DialogsContainer/>} />
                    <Route path='/news' component={News} />
                    <Route path='/music' component={Music} />
                    <Route path='/settings' component={Settings} />
                    <Route path='/friends' component={Friends} />
                    <Route path='/users' component={UsersContainer} />
                    <Route path='/login' component={Login} />
                </div>
             </div>
        </Router>
    );
}


export default App;

