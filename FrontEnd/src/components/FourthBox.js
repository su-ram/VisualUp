import React from 'react';
import "./FourthBox.css";
// import ImgFace from "../img/face.png";
import {InstagramOutlined, FacebookOutlined, GithubOutlined } from '@ant-design/icons';
import { getIcon } from '../components/Icon';


function FourthBox(props){
    const url = props.img
    return (
        <div className = "fourth-box-content">
            <img className="fourth-img" src = {url}/>
            <div className="fourth-name"><h3>{props.name}</h3></div>
            <div className="fourth-part"><h5>{props.part}</h5></div>
            <InstagramOutlined style ={{fontSize : '18px', color : '#5C411D', padding:'3px'}}/>
            <FacebookOutlined style ={{fontSize : '18px', color : '#5C411D', padding:'3px'}}/>
            <GithubOutlined style ={{fontSize : '18px', color : '#5C411D', padding:'3px'}}/>
            <span className="internet" >{getIcon("internet")}</span>
        </div>

    );
}

export default FourthBox;