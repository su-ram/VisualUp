import React, { Fragment } from "react";
import { FourthBox, DownArrow } from '../components';
import full_logo from "../../src/img/full_logo.png";
import DOUBLESLASH from "../../src/img/DOUBLESLASH.png";
// import {InstagramOutlined, TwitterOutlined, FacebookOutlined, GithubOutlined } from '@ant-design/icons';
import "./FourthComponent.css"
import BGimg from "../../src/img/BGimg.png"
//각자사진
import HE from "../../src/img/HE.jpg";
import EH from "../../src/img/EH.jpg";
import SJ from "../../src/img/SJ.jpg";
import YJ from "../../src/img/YJ.jpg";
import MH from "../../src/img/MH.jpg";
import JM from "../../src/img/JM.jpg";
import SR from "../../src/img/SR.jpg";
import SH from "../../src/img/SH.jpg";



function FourthComponent() {
  return (
    <Fragment>
      <div className="component fourth-component">
        <img className = "bg-img"src = {BGimg} />

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
              img = {YJ}
              name="홍영주"
              part="기획"
              insta = "https://www.instagram.com/0ju_o/"
              
           />

            <FourthBox
              img={MH}
              name="박미현"
              part="디자인"
              insta = "https://www.instagram.com/mivseen/"
              blog = "https://blog.naver.com/algus_0216"
           />

            <FourthBox
              img={SH}
              name="김서현"
              part="개발"
              github = "https://github.com/ksh0722k"
           />

            <FourthBox
              img={SR}
              name="김수람"
              part="개발"
              github = "https://github.com/su-ram"
           />

          </div>

          <div className="fourth-box container">
            <FourthBox
              img={HE}            
              name="우희은"
              part="개발"
              insta ="https://www.instagram.com/heun_w/"
              github = "https://github.com/gmldms784"
            />

            <FourthBox
              img={SJ}
              name="이소정"
              part="개발"
              insta="https://www.instagram.com/iso3295/"
              github = "https://github.com/SJLEE316"
            />

            <FourthBox
              img={JM}
              name="임정민"
              part="개발"
              insta = "https://www.instagram.com/805_im_stagram"
              github = "https://github.com/lim-jeongmin"
            />

            <FourthBox
              img={EH}
              name="조은학"
              part="개발"
              github ="https://github.com/Cho-Eunhak"
            />

            <div className = "fourth-box-content only">
             <img className="logo" src =  {full_logo} />
             <br></br>
             <br></br>
             <img className="//" src = {DOUBLESLASH}/>
            </div>
          
          </div>
        </div>
        <DownArrow>
          
        </DownArrow>
      </div>
    </Fragment>
  );
}

export default FourthComponent;