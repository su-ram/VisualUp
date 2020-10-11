import React, { useState, useEffect } from 'react';
import { Col, Row } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import "./HashTag.css";
import axios from 'axios'

//그래프는 어떻게 가져와야 하는지, pagination도 답없음ㅎ.ㅎ

function HashTag(){
    //inputForm.js(검색 창), searchResults.js(검색 결과) 따로 구현한 뒤
    //HashTag에 합쳐야 하나..? <inputForm /><searchResults /> 
    //이런식은 post로 값을 전송하고 get으로 값을 받을 때 가능한듯..?

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [hashTag, setHashTag] = useState([]);

    const onChange = e => {
        setHashTag(e.target.value);
    };

    //전송 버튼 클릭 시 데이터 요청 위해 onSubmit에 fetch(get형식)를 해야하나?
    //get형식으로 name에 해시태그 값을 넣는 것이라고 하심
    const onSubmit = e => {
        e.preventDefault();
    }
    
    //get 형식으로 데이터 요청
    useEffect(() => {
        fetch('http://visualup.koreacentral.cloudapp.azure.com:8080 /goal/hashtag?name=')
            .then(res => res.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    setHashTag(result.hashTag);
                },(error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
    }, []);

    return(
        <div>
            <div className="hashtag-page-title-con">
                <div className="hashtag-page-title">
                    <form onSubmit={onSubmit}>
                        <div className="hash-top">
                        <SearchOutlined className="hash-icon"/>
                        <input
                            className="hash-input"
                            type="text"
                            value={hashTag}
                            placeholder="해시태그 검색"
                            onChange={onChange}
                        />
                        <input className="hash-submit" type="submit" value="검색" />
                        </div>
                    </form>
                </div><br/>
                <div className="page-subtitle"><h5>{hashTag} 검색결과입니다.</h5></div>
            </div><br/><br/>
           
            <Row align="middle" className="hash-body">
                <Col align="middle" className="hash-cont">
                    <ul> {/*파일 따로 만들어서 수정해야 할 듯*/}
                        {hashTag.map(hashTag => (
                        <li key={hashTag.name}>
                            {hashTag.userId} {hashTag.title} {hashTag.startDate} {hashTag.endDate}
                        </li>
                        ))}
                    </ul>
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
