import React from 'react';
import { Col, Row, Typography } from 'antd';
import './Header.css';
import { SearchOutlined, FileTextOutlined, UserOutlined } from '@ant-design/icons';
const {Title} = Typography;

function Header(){
    return(
        <header>
            <Row justify="space-between">
                <Row xs align="middle" className="header-logo">
                    <div className="header-logo-image"><img src="/img/logo.png"/></div>
                    <div><Title className="site-title">Visual up!</Title></div>
                </Row>
                <Row xs align="middle" className="utility-menu">
                    <ul>
                        <li><a href="#"><SearchOutlined /></a></li>
                        <li><a href="#"><FileTextOutlined /></a></li>
                        <li><a href="#"><UserOutlined /></a></li>
                    </ul>
                </Row>
            </Row>
        </header>
    );
}

export default Header;