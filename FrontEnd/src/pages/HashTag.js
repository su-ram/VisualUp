import React, { useState, useEffect } from 'react';
import { Col, Row, Input } from 'antd';
import "./HashTag.css";

function HashTag(){

    //그래프를 가져올 수 있을까

    const [hashTag, setHashTag] = useState('');
    const [name, setName] = useState({});
    const [graph, setGraph] = useState({});
    const [title, setTitle] = useState({});
    const [startDate, setStartDate] = useState({});
    const [endDate, setEndDate] = useState({});

    const onChange = e => {
        setHashTag(e.target.value);
    };

    const onSubmit = e => {
        e.preventDefault();
    }

    return(
        <div>
            <div className="hashtag-page-title-con">
                <div className="hashtag-page-title">
                    <form onSubmit={onSubmit}>
                        <input className="hash-submit" type="submit" value="#" />
                        <input
                            className="hash-input"
                            type="text"
                            value={hashTag}
                            placeholder="해시태그 검색"
                            onChange={onChange}
                        />
                    </form>
                </div><br/>
                <div className="page-subtitle"><h5>{hashTag} 검색결과입니다.</h5></div>
            </div><br/><br/>
           
            <Row align="middle" className="hash-body">
                <Col align="middle" className="hash-cont">
                    <p className="hash-userName">name</p>
                    <div className="hash-graph">graph</div>
                    <p className="hash-goal">title</p>
                    <p className="hash-date">startDate~endDate</p>
                </Col>
                <Col align="middle" className="hash-cont">
                    <p className="hash-userName">name</p>
                    <div className="hash-graph">graph</div>
                    <p className="hash-goal">title</p>
                    <p className="hash-date">startDate~endDate</p>
                </Col>
                <Col align="middle" className="hash-cont">
                    <p className="hash-userName">name</p>
                    <div className="hash-graph">graph</div>
                    <p className="hash-goal">title</p>
                    <p className="hash-date">startDate~endDate</p>
                </Col>
            </Row> <br/><br/>
            <ul>
                <li class="num"><a href="#">&laquo;</a></li>
                <li class="active"><a href="#">1</a></li>
                <li class="num"><a href="#">2</a></li>
                <li class="num"><a href="#">3</a></li>
                <li class="num"><a href="#">4</a></li>
                <li class="num"><a href="#">5</a></li>
                <li class="num"><a href="#">&raquo;</a></li>
            </ul>
        </div>
    );
}  

export default HashTag;
