import React from 'react';
import { Col, Row } from 'antd';

const Posts = ({ data, loading }) => {
    if(loading) {
        return <h2>Loading...</h2>;
    }

    return (
            <Col align="middle" className="hash-col">
                  {data.map((hash) => (
                    <div key={hash.userId}>
                      <div className="hash-userName">{hash.userId}</div>
                      <div className="hash-graph">_graph자리_</div>
                      <div className="hash-goal">{hash.title}</div>
                      <div className="hash-date">{hash.startDate}~{hash.endDate}</div>
                    </div>
                  ))}
            </Col>
            
        
    );
};

export default Posts;