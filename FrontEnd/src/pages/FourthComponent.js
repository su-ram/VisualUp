import React, { Fragment } from "react";
import { FourthBox } from '../components';
import full_logo from "../../src/img/full_logo.png";
import DOUBLESLASH from "../../src/img/DOUBLESLASH.png";
// import {InstagramOutlined, TwitterOutlined, FacebookOutlined, GithubOutlined } from '@ant-design/icons';
import "./FourthComponent.css"
// import BGimg from "../../src/img/BGimg.png"
//각자사진
import HE from "../../src/img/HE.jpg";
import EH from "../../src/img/EH.jpg";
import SJ from "../../src/img/SJ.jpg";
import MH from "../../src/img/MH.jpg";
import JM from "../../src/img/JM.jpg";


function FourthComponent() {
  return (
    <Fragment>
      <div className="component fourth-component">
        <div className = "fourth-container">
          <div className="fourth-box container">
            
            <div className = "fourth-box-content only">
              <div className="only-text">
                <h1>팀원소개</h1>
                <h5>Introduce <br></br>Visual Team Members</h5>
                <br></br>
                <h5>Visual Up을 만든 <br></br>팀원들을 소개합니다.</h5>
              </div>
            </div>

            <FourthBox
              // img = {ImgFace}
              name="홍영주"
              part="기획"
           />

            <FourthBox
              img={MH}
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
              img={HE}            
              name="우희은"
              part="개발"
            />

            <FourthBox
              img={SJ}
              name="이소정"
              part="개발"
              // insta={}
            />

            <FourthBox
              img={JM}
              name="임정민"
              part="개발"
            />

            <FourthBox
              img={EH}
              name="조은학"
              part="개발"
            />

            <div className = "fourth-box-content only">
             <img className="logo" src =  {full_logo} />
             <br></br>
             <br></br>
             <img className="//" src = {DOUBLESLASH}/>
            </div>
          
          </div>
        </div>
        {/* <img className = "bg-img"src = {BGimg} /> */}
      </div>
    </Fragment>
  );
}

export default FourthComponent;