import React, {Component} from "react";
import { Link } from "react-router-dom";
import "./Navigation2.css";
import Logo from "../../src/img/full_row_Logo.png";
import { LogoutOutlined  , UnorderedListOutlined ,SearchOutlined  } from '@ant-design/icons';


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
                      <SearchOutlined style ={{fontSize : '30px', color : 'black'}}/>
                  </Link>
              </div>
              <div className="link">
                  <Link to="/GoalList">
                      <UnorderedListOutlined  style ={{fontSize : '30px', color : 'black'}}/>
                  </Link>
              </div>
              <div className="link">
                  <Link to="/login">
                      <LogoutOutlined  style={{ fontSize : '30px', color: 'black' }}/>
                  </Link>
              </div>
          </div>
       </div>
      </div>
    );
  }
}

export default Navigation;