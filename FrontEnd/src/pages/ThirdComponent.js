import React, { Fragment } from "react";
import ImgFace from "../../src/img/face.png";
import {InstagramOutlined, TwitterOutlined, FacebookOutlined, GithubOutlined } from '@ant-design/icons';
import "./ThirdComponent.css"


function ThirdComponent() {
  return (
    <Fragment>
      <div className="component third-component">
        <div className = "third-container">
          <div className="third-box container">
            
            <div className = "third-box-content">
              <h3>Visual Up!</h3>
              <h3>팀원소개</h3>
              <h5>Visual Up Team Members</h5>
            </div>

            <div className = "third-box-content">
              <img src =  {ImgFace} />
              <h3>홍영주</h3>
              <h5>기획</h5>
              <InstagramOutlined style ={{fontSize : '18px', color : 'rgb(231,229,230)', padding:'3px'}}/>
              <TwitterOutlined style ={{fontSize : '18px', color : 'rgb(231,229,230)', padding:'3px'}}/>
              <FacebookOutlined style ={{fontSize : '18px', color : 'rgb(231,229,230)', padding:'3px'}}/>
              <GithubOutlined style ={{fontSize : '18px', color : 'rgb(231,229,230)', padding:'3px'}}/>
            </div>

            <div className = "third-box-content">
              <img src =  {ImgFace} />
              <h3>박미현</h3>
              <h5>디자인</h5>
              <InstagramOutlined style ={{fontSize : '18px', color : 'rgb(231,229,230)', padding:'3px'}}/>
              <TwitterOutlined style ={{fontSize : '18px', color : 'rgb(231,229,230)', padding:'3px'}}/>
              <FacebookOutlined style ={{fontSize : '18px', color : 'rgb(231,229,230)', padding:'3px'}}/>
              <GithubOutlined style ={{fontSize : '18px', color : 'rgb(231,229,230)', padding:'3px'}}/>
            </div>

            <div className = "third-box-content">
              <img src =  {ImgFace} />
              <h3>김서현</h3>
              <h5>개발</h5>
              <InstagramOutlined style ={{fontSize : '18px', color : 'rgb(231,229,230)', padding:'3px'}}/>
              <TwitterOutlined style ={{fontSize : '18px', color : 'rgb(231,229,230)', padding:'3px'}}/>
              <FacebookOutlined style ={{fontSize : '18px', color : 'rgb(231,229,230)', padding:'3px'}}/>
              <GithubOutlined style ={{fontSize : '18px', color : 'rgb(231,229,230)', padding:'3px'}}/>
            </div>

            <div className = "third-box-content">
              <img src =  {ImgFace} />
              <h3>김수람</h3>
              <h5>개발</h5>
              <InstagramOutlined style ={{fontSize : '18px', color : 'rgb(231,229,230)', padding:'3px'}}/>
              <TwitterOutlined style ={{fontSize : '18px', color : 'rgb(231,229,230)', padding:'3px'}}/>
              <FacebookOutlined style ={{fontSize : '18px', color : 'rgb(231,229,230)', padding:'3px'}}/>
              <GithubOutlined style ={{fontSize : '18px', color : 'rgb(231,229,230)', padding:'3px'}}/>
            </div>
          </div>

          <div className="third-box container">
            <div className = "third-box-content">
              <img src =  {ImgFace} />
              <h3>우희은</h3>
              <h5>개발</h5>
              <InstagramOutlined style ={{fontSize : '18px', color : 'rgb(231,229,230)', padding:'3px'}}/>
              <TwitterOutlined style ={{fontSize : '18px', color : 'rgb(231,229,230)', padding:'3px'}}/>
              <FacebookOutlined style ={{fontSize : '18px', color : 'rgb(231,229,230)', padding:'3px'}}/>
              <GithubOutlined style ={{fontSize : '18px', color : 'rgb(231,229,230)', padding:'3px'}}/>
            </div>

            <div className = "third-box-content">
              <img src =  {ImgFace} />
              <h3>이소정</h3>
              <h5>개발</h5>
              <InstagramOutlined style ={{fontSize : '18px', color : 'rgb(231,229,230)', padding:'3px'}}/>
              <TwitterOutlined style ={{fontSize : '18px', color : 'rgb(231,229,230)', padding:'3px'}}/>
              <FacebookOutlined style ={{fontSize : '18px', color : 'rgb(231,229,230)', padding:'3px'}}/>
              <GithubOutlined style ={{fontSize : '18px', color : 'rgb(231,229,230)', padding:'3px'}}/>
            </div>

            <div className = "third-box-content">
              <img src =  {ImgFace} />
              <h3>임정민</h3>
              <h5>개발</h5>
              <InstagramOutlined style ={{fontSize : '18px', color : 'rgb(231,229,230)', padding:'3px'}}/>
              <TwitterOutlined style ={{fontSize : '18px', color : 'rgb(231,229,230)', padding:'3px'}}/>
              <FacebookOutlined style ={{fontSize : '18px', color : 'rgb(231,229,230)', padding:'3px'}}/>
              <GithubOutlined style ={{fontSize : '18px', color : 'rgb(231,229,230)', padding:'3px'}}/>
            </div>

            <div className = "third-box-content">
              <img src =  {ImgFace} />
              <h3>조은학</h3>
              <h5>개발</h5>
              <InstagramOutlined style ={{fontSize : '18px', color : 'rgb(231,229,230)', padding:'3px'}}/>
              <TwitterOutlined style ={{fontSize : '18px', color : 'rgb(231,229,230)', padding:'3px'}}/>
              <FacebookOutlined style ={{fontSize : '18px', color : 'rgb(231,229,230)', padding:'3px'}}/>
              <GithubOutlined style ={{fontSize : '18px', color : 'rgb(231,229,230)', padding:'3px'}}/>
            </div>

            <div className="third-box-content">
                
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default ThirdComponent;