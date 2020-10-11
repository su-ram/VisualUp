import React, { useState, useEffect } from 'react';
import { Col, Row } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import "./HashTag.css";
import axios from 'axios'
    
function HashTag(){

    const [data, setData] = useState({ hits: [] });
    const [hashtag, setHashTag] = useState("");
    const [search, setSearch] = useState("");

    useEffect(() => {
      const fetchData = async () => {
        const result = await axios(
          `http://visualup.koreacentral.cloudapp.azure.com:8080/goal/hashtag?name=${search}`
        );
        setData(result.data);
      };
      fetchData();
    }, [search]);

    console.log(data);

    return(
        <div>
            <div className="hashtag-page-title-con">
                <div className="hashtag-page-title">
                        <div className="hash-top">
                        <SearchOutlined className="hash-icon"/>
                        <input
                            className="hash-input"
                            type="text"
                            value={hashtag}
                            placeholder="해시태그 검색"
                            onChange={(event) => setHashTag(event.target.value)}
                        />
                        <input className="hash-submit" type="button" value="검색" onClick={() => setSearch(hashtag)}/>
                        </div>
                </div><br/>
                <div className="page-subtitle"><h5>{hashtag} 검색결과입니다.</h5></div>
            </div><br/><br/>
           
            <Row align="middle" className="hash-body">
                <Col align="middle" className="hash-cont">
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
};

export default HashTag;