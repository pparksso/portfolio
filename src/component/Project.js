import Skill from "./Skill";
import "../scss/Main.scss";

export default function Project() {
  const node = "https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=Node.js&logoColor=white";
  const mongoDb = "https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=MongoDB&logoColor=white";
  const mongoose = "https://img.shields.io/badge/Mongoose-8e0a0a?style=for-the-badge&logo=MongoDB&logoColor=white";
  const js = "https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=JavaScript&logoColor=white";
  return (
    <>
      <div id="project">
        <div className="container">
          <div className="titleBox">
            <h1>Projects</h1>
          </div>
          <div className="iconBox">
            <img src="images/mainVisual02.png" alt="" />
          </div>
          <ul className="projectList">
            <li className="project">
              <div className="imgBox">
                <img src="images/project01-1.png" alt="" />
              </div>
              <div className="txtBox">
                <h3>Travel Diary (여행 블로그)</h3>
                <p>
                  본 프로젝트는 node.js를 이용하여 제작한 여행의 순간을 기록할 수 있는 웹사이트입니다. 회원가입, 로그인, 회원 정보 수정, 회원 탈퇴가 가능하고, 사진 등 글을 등록, 수정, 삭제할 수
                  있으며, 글마다 댓글 작성, 삭제, 하트로 좋아요 기능과, 하트수도 구현하였습니다.
                </p>
                <div className="staff etc">
                  <span>개발 인원 : </span>
                  <span>1인</span>
                </div>
                <div className="time etc">
                  <span>소요 시간 : </span>
                  <span>2주(14일)</span>
                </div>
                <div className="techBox">
                  <ul>
                    <li>
                      <img src={node} alt="nodejs" />
                    </li>
                    <li>
                      <img src={mongoDb} alt="MongoDB" />
                    </li>
                    <li>
                      <img src={mongoose} alt="mongoose" />
                    </li>
                    <li>
                      <img src={js} alt="JavaScript" />
                    </li>
                  </ul>
                </div>
                <ul className="linkList">
                  <li>
                    <a href="https://github.com/pparksso/travelNote" target="blank">
                      <img src="images/github_logo_icon.png" alt="github" />
                    </a>
                  </li>
                  <li>
                    <a href="https://velog.io/@pparksso/nodejs-Toy-Project-%EC%97%AC%ED%96%89-%EB%B8%94%EB%A1%9C%EA%B7%B8-%ED%86%A0%EC%9D%B4%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8" target="blank">
                      <img src="images/velog_icon.png" alt="velog" />
                    </a>
                  </li>
                  <li>
                    <a href="https://worldtraveldiary.herokuapp.com/" target="blank">
                      <img src="images/link_icon.png" alt="link" />
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li className="reverse project">
              <div className="imgBox">
                <img src="images/project02.png" alt="" />
              </div>
              <div className="txtBox">
                <h3>랑벨 반응형웹 클론코딩</h3>
                <p>
                  본 프로젝트는 html, css를 연습하기 위해 제작한 반응형 웹페이지 입니다. 메인페이지와 서브페이지(전제품보기)를 구현하였으며, swiper 라이브러리를 사용하였습니다. json파일로 데이터를
                  만들어 axios를 이용하여 화면에 나타나게하였습니다.
                </p>
                <div className="staff etc">
                  <span>개발 인원 : </span>
                  <span>1인</span>
                </div>
                <div className="time etc">
                  <span>소요 시간 : </span>
                  <span>13일</span>
                </div>
                <div className="techBox">
                  <ul>
                    <li>
                      <img src={js} alt="JavaScript" />
                    </li>
                  </ul>
                </div>
                <ul className="linkList">
                  <li>
                    <a href="https://github.com/pparksso/Lanvelle_clone" target="blank">
                      <img src="images/github_logo_icon.png" alt="github" />
                    </a>
                  </li>
                  <li>
                    <a href="https://resplendent-paletas-4be473.netlify.app" target="blank">
                      <img src="images/link_icon.png" alt="link" />
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li className="project">
              <div className="imgBox">
                <img src="images/project03.png" alt="" />
              </div>
              <div className="txtBox">
                <h3>풍림무약 반응형웹 클론코딩</h3>
                <p>
                  본 프로젝트는 html, css를 연습하기 위해 제작한 반응형 웹페이지 입니다. 메인페이지와 서브페이지(위치안내)를 구현하였으며, swiper 라이브러리와 카카오맵 API를 사용하였습니다. 모든 탭은
                  javascript로 구현하였습니다.
                </p>
                <div className="staff etc">
                  <span>개발 인원 : </span>
                  <span>1인</span>
                </div>
                <div className="time etc">
                  <span>소요 시간 : </span>
                  <span>6일</span>
                </div>
                <div className="techBox">
                  <ul>
                    <li>
                      <img src={js} alt="JavaScript" />
                    </li>
                  </ul>
                </div>
                <ul className="linkList">
                  <li>
                    <a href="https://github.com/pparksso/punglim_clone" target="blank">
                      <img src="images/github_logo_icon.png" alt="github" />
                    </a>
                  </li>
                  <li>
                    <a href="https://deft-twilight-8524ab.netlify.app" target="blank">
                      <img src="images/link_icon.png" alt="link" />
                    </a>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
          <div className="github">
            <a href="https://github.com/pparksso" target="blank">
              <span>SEE MORE ON GITHUB</span>
            </a>
          </div>
        </div>
      </div>
      <Skill />
    </>
  );
}
