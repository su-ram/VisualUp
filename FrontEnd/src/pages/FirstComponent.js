import React from "react";
import { Button } from 'antd';
import "./FirstComponent.css";
import BGimg_first from "../../src/img/BGimg_first.jpg"

function FirstComponent() {

  function gotoLogin() { // add goal 버튼 클릭 시
    window.location.href = "/visualize";
  }

  return (
    <div className="component first-component">
      <div className = "first-component-text">
        <h4>visual up</h4>
        <h1>코딩 연습 제대로 해보자!<br/>
        하루하루 꾸준한 습관 기르기<br/>
        목표 시각화 사이트, Visual UP</h1>
        <Button type= "link" onClick={gotoLogin}>바로가기</Button>
        <img className="bg-img" src ={BGimg_first}/>
      </div>
    </div>
  );
};

export default FirstComponent;

