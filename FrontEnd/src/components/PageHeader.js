import React from 'react';
import "./PageHeader.css";

function PageHeader(props){

    return (
        <div className="page-title-con">
            <div className="page-title"><h2>{props.title}</h2></div>
            <div className="page-subtitle"><h5>{props.subtitle}</h5></div>
        </div>
    );
}

export default PageHeader;