import React, { useState, useEffect } from 'react';
import { Col, Row } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import "./HashTag.css";
import axios from 'axios';
    
function HashTag(){
    //post가 data임
    const [data, setData] = useState([]);
    const [hashtag, setHashTag] = useState("");
    const [search, setSearch] = useState("");

    useEffect(() => {
      const fetchPosts = async () => {
        const res = await axios(
          `http://visualup.koreacentral.cloudapp.azure.com:8080/goal/hashtag?name=${search}`
        ).then((res)=>{
            console.dir(res);
            setData(res.data);
          })
          .catch((err)=>{ 
            console.dir(err);
            const status = err?.response?.status;
            if (status === undefined) {
              console.dir("데이터를 불러오던 중 예기치 못한 예외가 발생하였습니다.\n" + JSON.stringify(err));
            }
            else if (status === 400) {
              console.dir("400에러");
            }
            else if (status === 500) {
              console.dir("내부 서버 오류입니다. 잠시만 기다려주세요.");
            }
          });
      };
      fetchPosts();
    }, [search]);

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
                  {data.map((hash) => (
                    <div key={hash.userId}>
                      <div className="hash-userName">{hash.userId}</div>
                      <div className="hash-graph">_graph자리_</div>
                      <div className="hash-goal">{hash.title}</div>
                      <div className="hash-date">{hash.startDate}~{hash.endDate}</div>
                    </div>
                  ))}
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