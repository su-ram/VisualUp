import React, { Fragment } from "react";
import { FourthBox } from '../components';
// import ImgFace from "./img/face.png";
import logo from "../../src/img/logo.png";
// import {InstagramOutlined, TwitterOutlined, FacebookOutlined, GithubOutlined } from '@ant-design/icons';
import "./FourthComponent.css"
import BGimg from "../../src/img/BGimg.png"

function FourthComponent() {
  return (
    <Fragment>
      <div className="component fourth-component">
        <div className = "fourth-container">
          <div className="fourth-box container">
            
            <div className = "fourth-box-content only">
              <h3>Visual Up!</h3>
              <h3>팀원소개</h3>
              <h5>Visual Up Team Members</h5>
            </div>

            <FourthBox
              name="홍영주"
              part="기획"
           />

            <FourthBox
              name="박미현"
              part="디자인"
           />

            <FourthBox
              name="김서현"
              part="개발"
           />

            <FourthBox
              name="김수람"
              part="개발"
           />

          </div>

          <div className="fourth-box container">
            <FourthBox
              name="우희은"
              part="개발"
            />

            <FourthBox
              name="이소정"
              part="개발"
            />

            <FourthBox
              name="임정민"
              part="개발"
            />

            <FourthBox
              name="조은학"
              part="개발"
            />

            <div className = "fourth-box-content only">
             <img src =  {logo} />
               <h3>DOUBLE<br></br>SLASH</h3>
            </div>
          
          </div>
        </div>
        <img className = "bg-img"src = {BGimg} />
      </div>
    </Fragment>
  );
}

export default FourthComponent;