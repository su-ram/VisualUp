import React, { Fragment } from "react";
import { FourthBox } from '../components';
// import ImgFace from "./img/face.png";
import logo from "../../src/img/logo.png";
// import {InstagramOutlined, TwitterOutlined, FacebookOutlined, GithubOutlined } from '@ant-design/icons';
import "./FourthComponent.css"


function FourthComponent() {
  return (
    <Fragment>
      <div className="component fourth-component">
        <div className = "fourth-container">
          <div className="fourth-box container">
            
            <div className = "fourth-box-content only">
              <h3>Visual Up!</h3>
              <h3>팀원소개</h3>
              <h5>Visual Up Team Members</h5>
            </div>

            <FourthBox
              name="홍영주"
              part="기획"
           />

            <FourthBox
              name="박미현"
              part="디자인"
           />

            <FourthBox
              name="김서현"
              part="개발"
           />

            <FourthBox
              name="김수람"
              part="개발"
           />

          </div>

          <div className="fourth-box container">
            <FourthBox
              name="우희은"
              part="개발"
            />

            <FourthBox
              name="이소정"
              part="개발"
            />

            <FourthBox
              name="임정민"
              part="개발"
            />

            <FourthBox
              name="조은학"
              part="개발"
            />

            <div className = "fourth-box-content only">
             <img src =  {logo} />
               <h3>DOUBLE<br></br>SLASH</h3>
            </div>
          
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default FourthComponent;


// import React, { Fragment } from "react";
// import ImgFace from "../../src/img/face.png";
// import logo from "../../src/img/logo.png";
// import {InstagramOutlined, FacebookOutlined, GithubOutlined } from '@ant-design/icons';
// import "./FourthComponent.css"


// function FourthComponent() {
//   return (
//     <Fragment>
//       <div className="component fourth-component">
//         <div className = "fourth-container">
//           <div className="fourth-box container">
            
//             <div className = "fourth-box-content only">
//               <h1>팀원소개</h1>
//               <h5>Introduce Visual Team Members</h5>
//               <h4>Visuap Up을 만든 팀원들을 소개합니다.</h4>
//             </div>

//             <div className = "fourth-box-content">
//               <img src =  {ImgFace} />
//               <h3>홍영주</h3>
//               <h5>기획</h5>
//               <InstagramOutlined style ={{fontSize : '18px', color : 'rgb(231,229,230)', padding:'3px'}}/>
//               <FacebookOutlined style ={{fontSize : '18px', color : 'rgb(231,229,230)', padding:'3px'}}/>
//               <GithubOutlined style ={{fontSize : '18px', color : 'rgb(231,229,230)', padding:'3px'}}/>
//             </div>

//             <div className = "fourth-box-content">
//               <img src =  {ImgFace} />
//               <h3>박미현</h3>
//               <h5>디자인</h5>
//               <InstagramOutlined style ={{fontSize : '18px', color : 'rgb(231,229,230)', padding:'3px'}}/>
//               <FacebookOutlined style ={{fontSize : '18px', color : 'rgb(231,229,230)', padding:'3px'}}/>
//               <GithubOutlined style ={{fontSize : '18px', color : 'rgb(231,229,230)', padding:'3px'}}/>
//             </div>

//             <div className = "fourth-box-content">
//               <img src =  {ImgFace} />
//               <h3>김서현</h3>
//               <h5>개발</h5>
//               <InstagramOutlined style ={{fontSize : '18px', color : 'rgb(231,229,230)', padding:'3px'}}/>
//               <FacebookOutlined style ={{fontSize : '18px', color : 'rgb(231,229,230)', padding:'3px'}}/>
//               <GithubOutlined style ={{fontSize : '18px', color : 'rgb(231,229,230)', padding:'3px'}}/>
//             </div>

//             <div className = "fourth-box-content">
//               <img src =  {ImgFace} />
//               <h3>김수람</h3>
//               <h5>개발</h5>
//               <InstagramOutlined style ={{fontSize : '18px', color : 'rgb(231,229,230)', padding:'3px'}}/>
//               <FacebookOutlined style ={{fontSize : '18px', color : 'rgb(231,229,230)', padding:'3px'}}/>
//               <GithubOutlined style ={{fontSize : '18px', color : 'rgb(231,229,230)', padding:'3px'}}/>
//             </div>
//           </div>

//           <div className="fourth-box container">
//             <div className = "fourth-box-content">
//               <img src =  {ImgFace} />
//               <h3>우희은</h3>
//               <h5>개발</h5>
//               <InstagramOutlined style ={{fontSize : '18px', color : 'rgb(231,229,230)', padding:'3px'}}/>
//               <FacebookOutlined style ={{fontSize : '18px', color : 'rgb(231,229,230)', padding:'3px'}}/>
//               <GithubOutlined style ={{fontSize : '18px', color : 'rgb(231,229,230)', padding:'3px'}}/>
//             </div>

//             <div className = "fourth-box-content">
//               <img src =  {ImgFace} />
//               <h3>이소정</h3>
//               <h5>개발</h5>
//               <InstagramOutlined style ={{fontSize : '18px', color : 'rgb(231,229,230)', padding:'3px'}}/>
//               <FacebookOutlined style ={{fontSize : '18px', color : 'rgb(231,229,230)', padding:'3px'}}/>
//               <GithubOutlined style ={{fontSize : '18px', color : 'rgb(231,229,230)', padding:'3px'}}/>
//             </div>

//             <div className = "fourth-box-content">
//               <img src =  {ImgFace} />
//               <h3>임정민</h3>
//               <h5>개발</h5>
//               <InstagramOutlined style ={{fontSize : '18px', color : 'rgb(231,229,230)', padding:'3px'}}/>
//               <FacebookOutlined style ={{fontSize : '18px', color : 'rgb(231,229,230)', padding:'3px'}}/>
//               <GithubOutlined style ={{fontSize : '18px', color : 'rgb(231,229,230)', padding:'3px'}}/>
//             </div>

//             <div className = "fourth-box-content">
//               <img src =  {ImgFace} />
//               <h3>조은학</h3>
//               <h5>개발</h5>
//               <InstagramOutlined style ={{fontSize : '18px', color : 'rgb(231,229,230)', padding:'3px'}}/>
//               <FacebookOutlined style ={{fontSize : '18px', color : 'rgb(231,229,230)', padding:'3px'}}/>
//               <GithubOutlined style ={{fontSize : '18px', color : 'rgb(231,229,230)', padding:'3px'}}/>
//             </div>

//             <div className = "fourth-box-content only">
//               <img src =  {logo} />
//               <h3>DOUBLE<br></br>SLASH</h3>

                
//             </div>
//           </div>
//         </div>
//       </div>
//     </Fragment>
//   );
// }

// export default FourthComponent;