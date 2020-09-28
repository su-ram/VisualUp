import React from "react";
import { Button } from 'antd';
import "./FirstComponent.css"


function FirstComponent() {
  return (
    <div className="component first-component">
      <div className = "first-component-text">
        <h4>visual up</h4>
        <h1>코딩 연습 제대로 해보자!<br/>
        하루하루 꾸준한 습관 기르기<br/>
        목표 시각화 사이트, Visual UP</h1>
        <Button>바로가기</Button>
      </div>
   { /*  <img src ={BGimg}/>*/}
    </div>
  );
};

export default FirstComponent;

