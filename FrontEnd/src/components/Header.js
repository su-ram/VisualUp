import React from 'react';
import { Col, Row, Typography } from 'antd';
import './Header.css';
import { SearchOutlined, FileTextOutlined, UserOutlined } from '@ant-design/icons';
const {Title} = Typography;

function Header(){
    return(
        <header>
            <Row justify="space-between">
                <Row xs className="header-logo">
                    <a href="#" title="목표 시각화 플랫폼, Visual up!">
                        <div className="header-logo-image"><img src="/img/logo.png"/></div>
                        <div><Title className="site-title">Visual up!</Title></div>
                    </a>
                </Row>
                <Row xs align="middle" className="utility-menu">
                    <ul>
                        <li><a href="#" title="해시태그 검색"><SearchOutlined /></a></li>
                        <li><a href="#" title="내 목표"><FileTextOutlined /></a></li>
                        <li><a href="#" title="마이페이지"><UserOutlined /></a></li>
                    </ul>
                </Row>
            </Row>
        </header>
    );
}

export default Header;