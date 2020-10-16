import React, { useState, useEffect } from 'react';
import { Row } from 'antd';
import { ArrowRightOutlined } from '@ant-design/icons';
import "./GoalList.css";
import axios from 'axios';
import Posts2 from '../components/Posts2';
import Pagination2 from '../components/Pagination2';
import PageHeader from '../components/PageHeader';

function GoalList(){
    const [data, setData] = useState([]);
    //const [goalId, setGoalId] = useState("");
    const name = "홍미주";
    const goalId = "goal144";

    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(4);
  
    useEffect(() => {
      
      const fetchPosts = async () => {
        const res = await axios(
          `http://visualup.koreacentral.cloudapp.azure.com/goal?userId=user103`
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
    }, []);

    //Get current posts
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = data.slice(indexOfFirstPost, indexOfLastPost);

    //Change page
    const paginate = (e, pageNumber) => {
      e.preventDefault();
      setCurrentPage(pageNumber)
    };

    function goToSetGoal(){
      window.location = `/GoalSet`;
    }

    return(
        <div>
           <PageHeader
                title={name + "님의 목표 리스트"}
                subtitle="본인이 계획한 모든 목표들을 한 눈에 볼 수 있어요."
            /><br/>
            <Row>
              <Posts2 data={currentPosts} /> 
            </Row>
            <Pagination2 
              postsPerPage={postsPerPage} 
              totalPosts={data.length} 
              paginate={paginate}
            />
            <button type="button" className="goal-setG" onClick={goToSetGoal}>목표 등록하러 가기<ArrowRightOutlined/></button>
        </div>
    );
};

export default GoalList;