import React, {Component} from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";
import Logo from "../../src/img/logoFull.png";
import { UserOutlined , UnorderedListOutlined ,SearchOutlined  } from '@ant-design/icons';


class Navigation extends React.Component {
  render() {
    return (
      <div className="navigation-bar">
        <div className="links">
          <div className="link logo">
            <Link to="/">
                <img src ={Logo} />
            </Link>
          </div>
          <div className = "icon">
              <div className="link">
                  <Link to="/hashtag">
                      <SearchOutlined style ={{fontSize : '25px', color : 'black'}}/>
                  </Link>
              </div>
              <div className="link">
                  <Link to="/goalList">
                      <UnorderedListOutlined  style ={{fontSize : '25px', color : 'black'}}/>
                  </Link>
              </div>
              <div className="link">
                  <Link to="/goalSet">
                      <UserOutlined style={{ fontSize : '25px', color: 'black' }}/>
                  </Link>
              </div>
          </div>
       </div>
      </div>
    );
  }
}

export default Navigation;