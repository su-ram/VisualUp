import React from 'react';
import { Row, Dropdown, Menu, Button } from 'antd';
import { MoreOutlined, SettingOutlined, DeleteOutlined } from '@ant-design/icons';
import axios from 'axios';

const Posts2 = ({ data })=>{
    //const [num, setNum] = useState(1);

    if(data===undefined) {
        return <h2>Loading...</h2>;
    }
    /*
    const increaseNumber=()=>{
        setNum(num + 1);
    }*/
    
    function deleteGoal(goalId){
      //goal 삭제
      if(window.confirm("정말 삭제하시겠습니까?")){
        axios.delete(`http://visualup.koreacentral.cloudapp.azure.com/goal?goalId=${goalId}`)
          .then(function (response) {
          // handle success
          console.log(response);
        })
        .catch((err)=>{
          const status = err?.response?.status;
          if (status === undefined) {
              console.dir("데이터를 불러오던 중 예기치 못한 예외가 발생하였습니다.\n" + JSON.stringify(err));
          }
          else if (status === 400) {
              alert("");
              console.dir("400에러");
          }
          else if (status === 500) {
              console.dir("내부 서버 오류입니다. 잠시만 기다려주세요.");
          }
          });
      }
    }

    function editGoal(goalId){
      window.location = `/GoalSet/${goalId}`;
    }

    //데이터로 받은 goalId를 변수에 따로 저장해야함
    const menu =(goalId)=>{

      return (
        <Menu style = {{backgroundColor : "#FFE5B2"}}  className="menu-button">
          <Menu.Item 
            onClick={()=>editGoal(goalId)}
            style={{color : "#5D4215"}} 
            key="1" 
            icon={<SettingOutlined /> }
            >
              수정하기
          </Menu.Item>
          <Menu.Item
            onClick={()=>deleteGoal(goalId)} 
            style={{color : "#5D4215"}} 
            key="2" 
            icon={<DeleteOutlined />}
           >
            삭제하기
          </Menu.Item>
        </Menu>
      );
    }


    return (
            <Row align="middle" className="goal-col">
              {data.map((goal, index) => (
                <div className="goal-post" key={goal.userId}>
                  <div className="goal-event-con" onClick={()=>{window.location.href=`/visualize/${index}`}}>
                    <div className="goal-num">목표 {index+1}</div>
                    <div>
                      <div className="goal-goal">{goal.title}</div>
                      <div className="goal-date">{goal.startDate}~{goal.endDate}</div>
                    </div>
                  </div>
                  <Dropdown 
                    overlay={menu(goal.goalId)} 
                    placement="bottomCenter" arrow
                  >
                    <a className="goal-dropdown-link" onClick={e => e.preventDefault()}>
                    <MoreOutlined style={{color : "#5D4215"}} className="goal-dropImg"/>
                    </a>
                  </Dropdown>
                </div>
              ))}
              
            </Row>
            
        
    );
};

export default Posts2;