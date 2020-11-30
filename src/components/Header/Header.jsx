import React from 'react';
import {Col, Layout, Row, Avatar, Button} from "antd";
import { UserOutlined } from '@ant-design/icons';
import {selectCurrentUserLogin, selectIsAuth} from "../../redux/auth-selectors";
import {useDispatch, useSelector} from "react-redux";
import {logout} from "../../redux/auth-reducer";
import {Link} from "react-router-dom";
import c from './Header.module.css';


let Header = (props) => {

    const isAuth = useSelector(selectIsAuth)
    const login = useSelector(selectCurrentUserLogin)

    const dispatch = useDispatch()
    const logoutCallback = () => {
        dispatch(logout())
    }

    const {Header} = Layout;

    return <Header className="header">
        <Row>
            <Col span={19}>

            </Col>
            {isAuth
                ? <><Col span={1}>
                    <Avatar icon={<UserOutlined />}/>
                </Col>
                    <Col span={4}>
                        <span className={c.userName}>{login}</span> <Button onClick={logoutCallback}>Logout</Button>
                    </Col>
                </>
                : <Col span={5}>
                    <Button><Link to={'/Login'}>Login</Link></Button>
                </Col>
            }
        </Row>
    </Header>

    /*<header className={c.header}>
        <img src='https://pngimg.com/uploads/donut/donut_PNG98.png'/>
        <div className={c.loginBlock}>
            {props.isAuth
                ? <div>{props.login} <button onClick={props.logout}>Logout</button></div>
                : <NavLink to={'/Login'}>Login</NavLink>}
        </div>
    </header>*/
}
export default Header;