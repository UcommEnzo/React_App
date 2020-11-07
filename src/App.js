import React from 'react';
import './App.css'
import Navbar from "./components/Navbar/Navbar";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import {Route, withRouter} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {connect} from "react-redux";
import {compose} from "redux";
import {initializedApp} from "./redux/app-reducer";
import Preloader from "./components/Common/Preloader/Preloader";

class App extends React.Component {

    componentDidMount() {
        this.props.initializedApp();
    }

    render() {
        if (!this.props.initialized) {return <Preloader/>}

        return (
            <div className='app-wrapper'>
                <HeaderContainer/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Route path='/Profile/:userId?' render={() => <ProfileContainer store={this.props.store}/>}/>
                    <Route path='/Dialogs' render={() => <DialogsContainer store={this.props.store}/>}/>
                    <Route path='/Users' render={() => <UsersContainer store={this.props.store}/>}/>
                    <Route path='/Login' render={() => <Login/>}/>
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
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized
})

export default compose(
    withRouter,
    connect(mapStateToProps, {initializedApp}))(App);
