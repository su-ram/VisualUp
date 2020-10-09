import React from 'react';
import { Link } from "react-router-dom";
import "./FourthBox.css";
import {InstagramOutlined, FacebookOutlined, GithubOutlined } from '@ant-design/icons';
import { getIcon } from '../components/Icon';


function FourthBox(props){
    const url = props.img
    return (
        <div className = "fourth-box-content">
            <div className="only-text">
                <img className="fourth-img" src = {url}/>   {/* 컴포넌트로 이미지 넣기 */}
                <div className="fourth-name"><h3>{props.name}</h3></div>
                <div className="fourth-part"><h5>{props.part}</h5></div>
                {/* <Link to= {props.insta}>
                    <InstagramOutlined style ={{fontSize : '18px', color : '#5C411D', padding:'3px'}}/>
                </Link>
                <Link to= {props.face}>
                    <FacebookOutlined style ={{fontSize : '18px', color : '#5C411D', padding:'3px'}}/>
                </Link>
                <Link to= {props.blog}>
                    <span className="internet" >{getIcon("internet")}</span>
                </Link> */}
                <InstagramOutlined style ={{fontSize : '18px', color : '#5C411D', padding:'3px'}}/>
                <FacebookOutlined style ={{fontSize : '18px', color : '#5C411D', padding:'3px'}}/>
                {getIcon("internet", {width: '21px'},{padding: '0 0 7px 3px'})}


                {/* <GithubOutlined style ={{fontSize : '18px', color : '#5C411D', padding:'3px'}}/> */}
            </div>
        </div>

    );
}

export default FourthBox;