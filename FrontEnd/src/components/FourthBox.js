import React from 'react';
import "./FourthBox.css";
import ImgFace from "../img/face.png";
import {InstagramOutlined, FacebookOutlined, GithubOutlined } from '@ant-design/icons';


function FourthBox(props){

    return (
        <div className = "fourth-box-content">
            {/* <div className="fourth-img">{props.img}</div> */}
            <img src =  {ImgFace} />
            <div className="fourth-name"><h3>{props.name}</h3></div>
            <div className="fourth-part"><h5>{props.part}</h5></div>
            <InstagramOutlined style ={{fontSize : '18px', color : 'rgb(231,229,230)', padding:'3px'}}/>
            <FacebookOutlined style ={{fontSize : '18px', color : 'rgb(231,229,230)', padding:'3px'}}/>
            <GithubOutlined style ={{fontSize : '18px', color : 'rgb(231,229,230)', padding:'3px'}}/>
        </div>

    );
}

export default FourthBox;