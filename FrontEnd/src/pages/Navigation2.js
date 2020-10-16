import React, {Component} from "react";
import { Link } from "react-router-dom";
import "./Navigation2.css";
import Logo from "../../src/img/full_row_Logo.png";

import { Tooltip } from 'antd';
import { LogoutOutlined , UnorderedListOutlined ,SearchOutlined  } from '@ant-design/icons';



class Navigation extends React.Component {
  render() {
    return (
      <div className="navigation-bar">
        <div className="second-links">
          <div className="link logo">
            <Link to="/">
                <img src ={Logo} />
            </Link>
          </div>
          <div className = "icon">
              <div className="link">

                  <Link to="/HashTag">
                    <Tooltip placement="bottom" title="해시태그 검색">
                      <SearchOutlined style ={{fontSize : '30px', color : 'black'}}/>
                    </Tooltip>
                  </Link>
              </div>
              <div className="link">
                  <Link to="/GoalList">
                    <Tooltip placement="bottom" title="목표 리스트">
                      <UnorderedListOutlined  style ={{fontSize : '30px', color : 'black'}}/>
                    </Tooltip>
                  </Link>
              </div>
              <div className="link">
                  <Link to="/login">

                      <Tooltip placement="bottom" title="로그아웃">
                        <LogoutOutlined style={{ fontSize : '30px', color: 'black' }}/>
                      </Tooltip>
                  </Link>
              </div>
          </div>
       </div>
      </div>
    );
  }
}

export default Navigation;