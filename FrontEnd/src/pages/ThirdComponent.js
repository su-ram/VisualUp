import React from "react";
import ImgFace from "../../src/img/face.png";
import {InstagramOutlined, TwitterOutlined, FacebookOutlined, GithubOutlined } from '@ant-design/icons';
import "./ThirdComponent.css"
import jQuery from "jquery";
window.$ = window.jQuery = jQuery;


function ThirdComponent() {
  return (
    <div>
    <div className="component third-component">
     {/* <div className = "third-class">
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

            <div className = "third-box-content">
              <img src =  {ImgFace} />
              <h3>우희은</h3>
              <h5>개발</h5>
              <InstagramOutlined style ={{fontSize : '18px', color : 'rgb(231,229,230)', padding:'3px'}}/>
              <TwitterOutlined style ={{fontSize : '18px', color : 'rgb(231,229,230)', padding:'3px'}}/>
              <FacebookOutlined style ={{fontSize : '18px', color : 'rgb(231,229,230)', padding:'3px'}}/>
              <GithubOutlined style ={{fontSize : '18px', color : 'rgb(231,229,230)', padding:'3px'}}/>
            </div>

            $('.third-class').slick({{
              centerMode: true,
              centerPadding: '60px',
              slidesToShow: 3,
              responsive: [
                {
                  breakpoint: 768,
                  settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 3
                  }
                },
                {
                  breakpoint: 480,
                  settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 1
                  }
                }
              ]
            }});*/}
       </div>
    </div>
  );
};



export default ThirdComponent;
