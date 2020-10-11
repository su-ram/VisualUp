import React, { useState, useEffect } from 'react';
import { Col, Row } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import "./HashTag.css";
import axios from 'axios'

//그래프는 어떻게 가져와야 하는지, pagination도 답없음ㅎ.ㅎ

//__방법(1)
export default () => {
    const [data, setData] = useState({ hits: [] });
    const [hashtag, setHashTag] = useState("redux");
    const [search, setSearch] = useState("");

    useEffect(() => {
      const fetchData = async () => {
        const result = await axios(
          `http://visualup.koreacentral.cloudapp.azure.com:8080/goal/hashtag?name=${search}`
        );
        setData(result.data);
      };
      fetchData();
      // 검색 시에만 data fetching을 요구해야 하므로 객체에는 search을 넣음
    }, [search]);
/*
    <input
        type="text"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
      />
      // 버튼을 눌렀을 때 search에 query값을 담기게 함
      <button type="button" onClick={() => setSearch(query)}>
        Search
      </button>
      <ul> //가져올 때 이런 방식으로 가져오면 됨
        {data.hits.map((item) => (
          <li key={item.objectID}>
            <a href={item.url}>{item.title}</a>
          </li>
        ))}
      </ul>
*/
/*function HashTag(){
    //inputForm.js(검색 창), searchResults.js(검색 결과) 따로 구현한 뒤
    //HashTag에 합쳐야 하나..? <inputForm /><searchResults />

    const axios = require('axios');

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [hashTag, setHashTag] = useState([]);

    //전송 버튼 클릭 시 데이터 요청 위해 axios.get 넣어봄__방법(2)
    /*const onSubmit = e => {
        //get형식으로 name에 hashTag 넣어서 요청(axios 사용)
        axios.get('http://visualup.koreacentral.cloudapp.azure.com:8080 /goal/', {
            params: {
              name: hashTag
            }
          })
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });

        e.preventDefault();
    }   */

    return(
        <div>
            <div className="hashtag-page-title-con">
                <div className="hashtag-page-title">
                    {/*<form onSubmit={onSubmit}>__방법(2)*/}
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
                    {/*</form>*/}
                </div><br/>
                <div className="page-subtitle"><h5>{hashtag} 검색결과입니다.</h5></div>
            </div><br/><br/>
           
            <Row align="middle" className="hash-body">
                <Col align="middle" className="hash-cont">
                    {/*<ul> 파일 따로 만들어서 수정해야 할 듯__방법(2)
                        {hashTag.map(hashTag => (
                        <li key={hashTag.name}>
                            {hashTag.userId} {hashTag.title} {hashTag.startDate} {hashTag.endDate}
                        </li>
                        ))}
                        </ul>*/}
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