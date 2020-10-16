import React from 'react';
import { Col, Row } from 'antd';
import { MakeGraph } from "./index.js";

const Posts = ({ data })=>{ //, loading }) => {
    if(data===undefined) {
        return <h2>Loading...</h2>;
    }

    return (
            <Row align="middle" className="hash-col">
              {data.map((hash) => (
                <div className="hash-post" key={hash.userName}>
                  <div className="hash-userName">{hash.userName}</div>
                  <div className="hash-graph">
                    <MakeGraph
                        goalId={hash.goalId}
                        width={300}
                        height= {200}
                    />
                  </div>
                  <div className="hash-goal">{hash.title}</div>
                  <div className="hash-date">{hash.startDate}~{hash.endDate}</div>
                </div>
              ))}
              
            </Row>
            
        
    );
};

export default Posts;