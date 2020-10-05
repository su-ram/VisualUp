import React, { Fragment } from "react";
import ImgFace from "../../src/img/face.png";
import logo from "../../src/img/logo.png";
import {InstagramOutlined, FacebookOutlined, GithubOutlined } from '@ant-design/icons';
import "./FourthComponent.css"


function FourthComponent() {
  return (
    <Fragment>
      <div className="component fourth-component">
        <div className = "fourth-container">
          <div className="fourth-box container">
            
            <div className = "fourth-box-content only">
              <h1>팀원소개</h1>
              <h5>Introduce Visual Team Members</h5>
              <h4>Visuap Up을 만든 팀원들을 소개합니다.</h4>
            </div>

            <div className = "fourth-box-content">
              <img src =  {ImgFace} />
              <h3>홍영주</h3>
              <h5>기획</h5>
              <InstagramOutlined style ={{fontSize : '18px', color : 'rgb(231,229,230)', padding:'3px'}}/>
              <FacebookOutlined style ={{fontSize : '18px', color : 'rgb(231,229,230)', padding:'3px'}}/>
              <GithubOutlined style ={{fontSize : '18px', color : 'rgb(231,229,230)', padding:'3px'}}/>
            </div>

            <div className = "fourth-box-content">
              <img src =  {ImgFace} />
              <h3>박미현</h3>
              <h5>디자인</h5>
              <InstagramOutlined style ={{fontSize : '18px', color : 'rgb(231,229,230)', padding:'3px'}}/>
              <FacebookOutlined style ={{fontSize : '18px', color : 'rgb(231,229,230)', padding:'3px'}}/>
              <GithubOutlined style ={{fontSize : '18px', color : 'rgb(231,229,230)', padding:'3px'}}/>
            </div>

            <div className = "fourth-box-content">
              <img src =  {ImgFace} />
              <h3>김서현</h3>
              <h5>개발</h5>
              <InstagramOutlined style ={{fontSize : '18px', color : 'rgb(231,229,230)', padding:'3px'}}/>
              <FacebookOutlined style ={{fontSize : '18px', color : 'rgb(231,229,230)', padding:'3px'}}/>
              <GithubOutlined style ={{fontSize : '18px', color : 'rgb(231,229,230)', padding:'3px'}}/>
            </div>

            <div className = "fourth-box-content">
              <img src =  {ImgFace} />
              <h3>김수람</h3>
              <h5>개발</h5>
              <InstagramOutlined style ={{fontSize : '18px', color : 'rgb(231,229,230)', padding:'3px'}}/>
              <FacebookOutlined style ={{fontSize : '18px', color : 'rgb(231,229,230)', padding:'3px'}}/>
              <GithubOutlined style ={{fontSize : '18px', color : 'rgb(231,229,230)', padding:'3px'}}/>
            </div>
          </div>

          <div className="fourth-box container">
            <div className = "fourth-box-content">
              <img src =  {ImgFace} />
              <h3>우희은</h3>
              <h5>개발</h5>
              <InstagramOutlined style ={{fontSize : '18px', color : 'rgb(231,229,230)', padding:'3px'}}/>
              <FacebookOutlined style ={{fontSize : '18px', color : 'rgb(231,229,230)', padding:'3px'}}/>
              <GithubOutlined style ={{fontSize : '18px', color : 'rgb(231,229,230)', padding:'3px'}}/>
            </div>

            <div className = "fourth-box-content">
              <img src =  {ImgFace} />
              <h3>이소정</h3>
              <h5>개발</h5>
              <InstagramOutlined style ={{fontSize : '18px', color : 'rgb(231,229,230)', padding:'3px'}}/>
              <FacebookOutlined style ={{fontSize : '18px', color : 'rgb(231,229,230)', padding:'3px'}}/>
              <GithubOutlined style ={{fontSize : '18px', color : 'rgb(231,229,230)', padding:'3px'}}/>
            </div>

            <div className = "fourth-box-content">
              <img src =  {ImgFace} />
              <h3>임정민</h3>
              <h5>개발</h5>
              <InstagramOutlined style ={{fontSize : '18px', color : 'rgb(231,229,230)', padding:'3px'}}/>
              <FacebookOutlined style ={{fontSize : '18px', color : 'rgb(231,229,230)', padding:'3px'}}/>
              <GithubOutlined style ={{fontSize : '18px', color : 'rgb(231,229,230)', padding:'3px'}}/>
            </div>

            <div className = "fourth-box-content">
              <img src =  {ImgFace} />
              <h3>조은학</h3>
              <h5>개발</h5>
              <InstagramOutlined style ={{fontSize : '18px', color : 'rgb(231,229,230)', padding:'3px'}}/>
              <FacebookOutlined style ={{fontSize : '18px', color : 'rgb(231,229,230)', padding:'3px'}}/>
              <GithubOutlined style ={{fontSize : '18px', color : 'rgb(231,229,230)', padding:'3px'}}/>
            </div>

            <div className = "fourth-box-content only">
              <img src =  {logo} />
              <h3>DOUBLE<br></br>SLASH</h3>

                
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default FourthComponent;