import React from 'react';
import { Col, Typography } from 'antd';
import "./PageHeader.css";

const {Title} = Typography;

function PageHeader(props){

    return (
        <Col className="page-title-con">
            <Title level={2} className="page-title">{props.title}</Title>
            <Title level={5} className="page-subtitle">{props.subtitle}</Title>
        </Col>
    );
}

export default PageHeader;