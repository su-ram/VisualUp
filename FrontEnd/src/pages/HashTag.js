import React from 'react';
import { Col, Row } from 'antd';
import "./HashTag.css";
import { PageHeader } from '../components';

//daily 테이블에서 해시태그 검색하면 그 user의 그래프를 가져옴.

function HashTag(){
    const hashTag = "취업준비";//해시태그 검색 결과 

    //생각해보니 검색을 어따하나..
    //페이지네이션 다시 만들어야함...

    return(
        <div>
            <PageHeader title={"# "+hashTag} subtitle="해시태그 검색결과입니다."/><br/><br/>
            <Row align="middle" className="hash-body">
                <Col align="middle" className="hash-cont">
                    <p className="hash-userName">userName</p>
                    <div className="hash-graph">그래프 자리</div>
                    <p className="hash-goal">목표</p>
                    <p className="hash-date">날짜</p>
                </Col>
                <Col align="middle" className="hash-cont">
                    <p className="hash-userName">userName</p>
                    <div className="hash-graph">그래프 자리</div>
                    <p className="hash-goal">목표</p>
                    <p className="hash-date">날짜</p>
                </Col>
                <Col align="middle" className="hash-cont">
                    <p className="hash-userName">userName</p>
                    <div className="hash-graph">그래프 자리</div>
                    <p className="hash-goal">목표</p>
                    <p className="hash-date">날짜</p>
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