import React, { Fragment} from "react";
import { Button, Input} from 'antd';
import full_logo from "../../src/img/full_logo.png";
import { TwitterOutlined , InstagramOutlined  ,FacebookOutlined ,CopyrightOutlined   } from '@ant-design/icons';
import "./FifthComponent.css"
import BGimg from "../../src/img/BGimg.png"
import { BackTop } from 'antd';
import {ArrowUpOutlined } from '@ant-design/icons';



function FifthComponent() {

  // function gotoMain() {
  //   window.location.href = "/";
  // }

  return (
    <Fragment>
      <div className="fifth-container">
        <img className = "bg-img"src = {BGimg} />
        <footer className="fifth-box-container">
          <div className="fifth-box-content-container">
            <div className="fifth-box-content">
                <img src ={full_logo} />
            </div>

            <div className="fifth-box-content table">
              <table>
                <tr>
                  <th>ABOUT</th>
                  <td>홍보 소개&nbsp; &nbsp; 
                    사용자유형&nbsp; &nbsp; 
                    사용후기&nbsp; &nbsp; 
                    멤버소개</td>
                </tr>
                <tr>
                  <th>PLAN</th>
                  <td>목표설정&nbsp; &nbsp;
                    목표리스트&nbsp; &nbsp;
                    데일리체크</td>
                </tr>
                <tr>
                  <th>CONTACT</th>
                  <td>문의사항&nbsp; &nbsp;
                    SNS&nbsp; &nbsp;
                    DOUBLESLASH</td>
                </tr>
                <tr>
                  <th>MEMBERS</th>
                  <td>홍영주&nbsp; &nbsp;
                    박미현&nbsp; &nbsp;
                    김서현&nbsp; &nbsp;
                    김수람&nbsp; &nbsp;
                    우희은&nbsp; &nbsp;
                    이소정&nbsp; &nbsp;
                    임정민&nbsp; &nbsp;
                    조은학</td>
                </tr>
              </table>
            </div>

            <div className="fifth-box-content">
              <div className="fifth-subscribe">
                <h4>Subscribe to Visual Up via Email</h4>
                <h4>Excepteur sint occaecat cupidatat<br></br>
                    non proident, sunt in culpa qui</h4>
                <Input type="text" placeholder="Email Address"></Input>
                {/* <Button type= "link" onClick={gotoMain}>SUBSCRIBE</Button> */}
                <Button type= "link">SUBSCRIBE</Button>

              </div>
              <div className="fifth-info">
                <address>497 Evergreen Rd. Roseville, CA 95673</address>
                <address>+82 10 5555 5555</address>
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
