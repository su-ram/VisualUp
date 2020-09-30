import React, { Fragment } from "react";
import Logo from "../../src/img/logoFull.png";
import { TwitterOutlined , InstagramOutlined  ,FacebookOutlined ,CopyrightOutlined   } from '@ant-design/icons';
import "./FifthComponent.css"


function FifthComponent() {
  return (
    <Fragment>
      <div className="fifth-container">
        <footer className="fifth-box-container">
          <div className="fifth-box-content-container">
            <div className="fifth-box-content">
                <img src ={Logo} />
            </div>

            <div className="fifth-box-content">
              <table>
                <tr>
                  <th>ABOUT</th>
                  <td>홍보 소개 사용자유형 사용후기 멤버소개</td>
                </tr>
                <tr>
                  <th>PLAN</th>
                  <td>목표설정 목표리스트 데일리체크</td>
                </tr>
                <tr>
                  <th>CONTACT</th>
                  <td>문의사항 SNS DOUBLESLASH</td>
                </tr>
                <tr>
                  <th>MEMBERS</th>
                  <td>홍영주 박미현 김서현 김수람 우희은 이소정 임정민 조은학</td>
                </tr>
              </table>
            </div>

            <div className="fifth-box-content">
              <div className="fifth-subscribe">
                <h5>Subscribe</h5>
              </div>
              <div className="fifth-info">
                <address>+82 10 5555 5555</address>
                <address>Seoul</address>
                <email>visualupteam@mail.com</email>
              </div>
            </div>
          </div>

          <div className="fifth-box-content fifth-footer">
            <CopyrightOutlined />
            <span>Visual Up 2020</span>
            <div className ="icons">
              <div className = "icon">
                <InstagramOutlined style ={{fontSize : '30px'}} />
              </div>
              <div className = "icon">
                <TwitterOutlined style ={{fontSize : '30px'}}/>
              </div>
              <div className = "icon">
                <FacebookOutlined style ={{fontSize : '30px'}}/>
              </div>
            </div>
          </div>
          
        </footer> 
      </div> 
    </Fragment>
  );
}

export default FifthComponent;
