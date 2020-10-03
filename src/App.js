import React from 'react';
import './App.css'
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import Friends from "./components/Friends/Friends";
import {Route} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";

const App = (props) => {
    return (
        <div className='app-wrapper'>
            <Header/>
            <Navbar/>
            <div className='app-wrapper-content'>
                <Route path='/Profile' render={() => <Profile store={props.store}/>}/>
                <Route path='/Dialogs' render={() => <DialogsContainer store={props.store}/>}/>
                <Route path='/Users' render={() => <UsersContainer store={props.store}/>}/>
                <Route path='/News' render={News}/>
                <Route path='/Music' render={Music}/>
                <Route path='/Settings' render={Settings}/>
                {/*
                    <Route path='/Friends' render={() => <Friends state={props.state.dialogsPage.dialogs}/>}/>
*/}

            </div>
        </div>
    )
}

export default App;
