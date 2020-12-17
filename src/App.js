import React from 'react';
import './App.css'
import 'antd/dist/antd.css';
import {Layout, Menu} from 'antd';
import {UserOutlined, TeamOutlined, WechatOutlined} from '@ant-design/icons';
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import {BrowserRouter, Link, Redirect, Route, Switch, withRouter} from "react-router-dom";
import ProfileContainer from "./components/Profile/ProfileContainer";
import Login from "./components/Login/Login";
import {connect} from "react-redux";
import {compose} from "redux";
import {initializedApp} from "./redux/app-reducer";
import Preloader from "./components/Common/Preloader/Preloader";
import {withSuspense} from "./hoc/withSuspense";
import Header from "./components/Header/Header";

const DialogsContainer = React.lazy(() => import("./components/Dialogs/DialogsContainer"));
const UsersContainer = React.lazy(() => import("./components/Users/UsersContainer"));

const {Content, Footer, Sider} = Layout;

class App extends React.Component {

    componentDidMount() {
        this.props.initializedApp();
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }

        return (
            <Layout>
                <Sider
                    breakpoint="lg"
                    collapsedWidth="0"
                    onBreakpoint={broken => {
                        console.log(broken);
                    }}
                    onCollapse={(collapsed, type) => {
                        console.log(collapsed, type);
                    }}
                >
                    <div className="logo"/>
                    <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']}>
                        <Menu.Item key="1" icon={<UserOutlined/>}>
                            <Link to="/Profile">Profile</Link>
                        </Menu.Item>
                        <Menu.Item key="2" icon={<WechatOutlined/>}>
                            <Link to="/Dialogs">Messages</Link>
                        </Menu.Item>
                        <Menu.Item key="3" icon={<TeamOutlined />}>
                            <Link to="/Users">Users</Link>
                        </Menu.Item>
                    </Menu>
                </Sider>
                <Layout>
                    <Header/>
                    <Content style={{margin: '10px 10px 0'}}>
                        <div className="site-layout-background" style={{padding: 14, minHeight: 360}}>
                            <Switch>
                                <Route exact path='/' render={() => <Redirect to={"/Profile"}/>}/>
                                <Route exact path='/React_App' render={() => <Redirect to={"/Profile"}/>}/>
                                <Route path='/Profile/:userId?' render={() => <ProfileContainer/>}/>
                                <Route path='/Dialogs' render={withSuspense(DialogsContainer)}/>
                                <Route path='/Users' render={withSuspense(UsersContainer)}/>
                                <Route path='/Login' render={() => <Login/>}/>
                                <Route path='/News' render={News}/>
                                <Route path='/Music' render={Music}/>
                                <Route path='/Settings' render={Settings}/>
                            </Switch>
                        </div>
                    </Content>
                    <Footer style={{textAlign: 'center'}}>Ant Design ©2018 Created by Ant UED</Footer>
                </Layout>
            </Layout>

            /*<div className='app-wrapper'>
                <HeaderContainer/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Route path='/' render={() => <Redirect to={"/Profile"}/>}/>
                    <Route path='/Profile/:userId?' render={() => <ProfileContainer/>}/>
                    <Route path='/Dialogs' render={withSuspense(DialogsContainer)}/>
                    <Route path='/Users' render={withSuspense(UsersContainer)}/>
                    <Route path='/Login' render={() => <Login/>}/>
                    <Route path='/News' render={News}/>
                    <Route path='/Music' render={Music}/>
                    <Route path='/Settings' render={Settings}/>
                </div>
            </div>*/
        )
    }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized
})

export default compose(
    withRouter,
    connect(mapStateToProps, {initializedApp}))(App);
