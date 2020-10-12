import React, { useState, useEffect } from 'react';
import { Col, Row } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import "./HashTag.css";
import axios from 'axios';
import Posts from '../components/Posts';
import Pagination from '../components/Pagination';
    
function HashTag(){

    const [data, setData] = useState([]);
    const [hashtag, setHashTag] = useState("");
    const [search, setSearch] = useState("");

    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(3);

    //수람님이 새로 주신 주소는 net::ERR_CERT_AUTHORITY_INVALID 뜸
    useEffect(() => {
      const fetchPosts = async () => {
        setLoading(true);
        const res = await axios(
          `http://visualup.koreacentral.cloudapp.azure.com:8080/goal/hashtag?name=${search}`
        ).then((res)=>{
            console.dir(res);
            setData(res.data);
            setLoading(false);
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

    //Get current posts
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = data.slice(indexOfFirstPost, indexOfLastPost);

    //Change page
    const paginate = pageNumber => setCurrentPage(pageNumber);

    return(
        <div className="hash-total">
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
            <Row>
            <Posts data={currentPosts} loading={loading} />
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