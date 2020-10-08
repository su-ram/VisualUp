import React, {Component} from "react";
import { PageHeader } from '../components';
import Slider from "react-slick";
import "./ThirdComponent.css";
import BGimg from "../../src/img/BGimg.png"

export default class ThirdComponent extends Component {
  render() {
    const settings = {
      className: "center",
      centerMode: true,
      infinite: true,
      centerPadding: "60px",
      slidesToShow: 3,
      speed: 500
    };
    return (
      <div className="components third-component">
        <div className= "third-component-text">
          <PageHeader
              title="다른 사용자들과 목표 현황을 공유하세요."
              subtitle="해시태그 기능을 통해 서로의 현황을 공유할 수 있어요."
            />
        </div>
        <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
				<link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
          
        <div className="slider">
        <Slider {...settings}>
            <div className="card-container">
              <h3>1</h3>
            </div>
            <div className="card-container">
              <h3>2</h3>
            </div>
            <div className="card-container">
              <h3>3</h3>
            </div>
            <div className="card-container">
              <h3>4</h3>
            </div>
            <div className="card-container">
              <h3>5</h3>
            </div>
            <div className="card-container">
              <h3>6</h3>
            </div>
          </Slider>
        </div>
        <img className = "bg-img"src = {BGimg} />
      </div>
    );
  }
}
