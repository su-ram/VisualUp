import React, { useState, useEffect } from 'react';
import { Col, Row } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import "./HashTag.css";
import axios from 'axios';
import Posts from '../components/Posts';
import Pagination from '../components/Pagination';
    
function HashTag({match}){

    const [data, setData] = useState([]);
    const [hashtag, setHashTag] = useState("");
    const [keyword, setKeyWord] = useState("");

    //const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(3);
  
    useEffect(()=>{
      // 주소로 넘어온 hashtag setting 하기
      setHashTag(match.params.hashtag);
      setKeyWord(match.params.hashtag);
    },[match.params.hashtag])

    useEffect(() => {
      const fetchPosts = async () => {
        //setLoading(true);
        const res = await axios(
          `https://visualup.koreacentral.cloudapp.azure.com/goal/hashtag?name=${match.params.hashtag}`
        ).then((res)=>{
          console.dir(res);
          setData(res.data);
          //setLoading(false);
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
      // hashtag 세팅 후, api 데이터 받아오기
      fetchPosts();
     /*
    setData([
      {
        "userId": "user102",
        "title": "파이썬 뿌시기",
        "termGoal": "예제 문제 1개씩 코드로 구현하기",
        "open": true,
        "startDate": "2020-10-22",
        "endDate": "2020-12-31",
        "term": 5,
        "hashtags": "coding, commit, python, os",
        "template": "Area",
        "graphColor": "black"
      },
      {
        "userId": "user103",
        "title": "파이썬어어어엉ㄴ",
        "termGoal": "서버 구현",
        "open": true,
        "startDate": "2020-10-21",
        "endDate": "2020-12-20",
        "term": 3,
        "hashtags": "coding, commit, python, web",
        "template": "Bar",
        "graphColor": "red"
      },
      {
        "userId": "user104",
        "title": "파이썬어어어엉ㄴ",
        "termGoal": "서버 구현",
        "open": true,
        "startDate": "2020-10-21",
        "endDate": "2020-12-20",
        "term": 3,
        "hashtags": "coding, commit, python, web",
        "template": "Bar",
        "graphColor": "red"
      },
      {
        "userId": "user105",
        "title": "파이썬어어어엉ㄴ",
        "termGoal": "서버 구현",
        "open": true,
        "startDate": "2020-10-21",
        "endDate": "2020-12-20",
        "term": 3,
        "hashtags": "coding, commit, python, web",
        "template": "Bar",
        "graphColor": "red"
      },
      {
        "userId": "user106",
        "title": "파이썬어어어엉ㄴ",
        "termGoal": "서버 구현",
        "open": true,
        "startDate": "2020-10-21",
        "endDate": "2020-12-20",
        "term": 3,
        "hashtags": "coding, commit, python, web",
        "template": "Bar",
        "graphColor": "red"
      }
    ]);
      */

    }, [hashtag]);
    
    function startSearching(){
      window.location = `/hashtag/${keyword}`;
    }

    //Get current posts
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = data.slice(indexOfFirstPost, indexOfLastPost);

    //Change page
    const paginate = (e, pageNumber) => {
      e.preventDefault();
      setCurrentPage(pageNumber)
    };

    return(
        <div className="hash-total">
            <div className="hashtag-page-title-con">
                <div className="hashtag-page-title">
                    <div className="hash-top">
                      <SearchOutlined className="hash-icon"/>
                      <input
                          className="hash-input"
                          type="text"
                          defaultValue={keyword} //value = {hashtag}
                          placeholder="해시태그 검색"
                          onChange={(event) => setKeyWord(event.target.value)}
                          //onChange={(event) => setHashTag(event.target.value)}
                      />
                      <input className="hash-submit" type="button" value="검색" onClick={startSearching}/>
                    </div>
                </div><br/>
                <div className="page-subtitle">
                {
                  data.length===0?
                  <h5>검색 결과가 없습니다.</h5>:
                    hashtag===undefined?
                      <h5>검색어를 입력해주세요.</h5>:
                        <h5>{hashtag} 검색결과입니다.</h5>
                }
                </div>
            </div><br/><br/>
            <Row>
              <Posts data={currentPosts} /> 
            </Row>
            <Pagination 
              postsPerPage={postsPerPage} 
              totalPosts={data.length} 
              paginate={paginate}
            />
        </div>
    );
};

export default HashTag;