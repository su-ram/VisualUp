import React from 'react';
import "./DownArrow.css";
import {ArrowDownOutlined } from '@ant-design/icons';


function DownArrow(props){
    return (
        <div className="downarrow">
            <ArrowDownOutlined className="arrow" style ={{fontSize : '40px', color : '#5C411D', padding:'3px'}} />
        </div>


    );
}

export default DownArrow;