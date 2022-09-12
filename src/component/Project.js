import Skill from "./Skill";
import "../scss/Main.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faV } from "@fortawesome/free-solid-svg-icons";
export default function Project() {
  return (
    <>
      <div id="project">
        <div className="container">
          <div className="titleBox">
            <h1>Projects</h1>
          </div>
          <ul className="projectList">
            <li>
              <div className="imgBox">
                <img src="images/project01.png" alt="" />
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
                      <span>nodejs</span>
                    </li>
                    <li>
                      <span>MongoDB</span>
                    </li>
                    <li>
                      <span>Mongoose</span>
                    </li>
                    <li>
                      <span>javascript</span>
                    </li>
                  </ul>
                </div>
                <ul className="linkList">
                  <li>
                    <a href="https://github.com/pparksso/travelNote" target="blank">
                      <img src="images/github.svg" alt="" />
                    </a>
                  </li>
                  <li>
                    <a href="https://velog.io/@pparksso/nodejs-Toy-Project-%EC%97%AC%ED%96%89-%EB%B8%94%EB%A1%9C%EA%B7%B8-%ED%86%A0%EC%9D%B4%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8" target="blank">
                      <FontAwesomeIcon icon={faV} />
                    </a>
                  </li>
                  <li>
                    <a href="https://worldtraveldiary.herokuapp.com/" target="blank">
                      <img src="images/external-link.svg" alt="" />
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            {/* <li>
            <div className="imgBox">
              <img src="" alt="" />
            </div>
            <div className="txtBox">
              <h3></h3>
              <p></p>
              <div className="techBox">
                <ul>
                  <li>
                    <span></span>
                  </li>
                  <li>
                    <span></span>
                  </li>
                  <li>
                    <span></span>
                  </li>
                  <li>
                    <span></span>
                  </li>
                  <li>
                    <span></span>
                  </li>
                </ul>
              </div>
              <ul className="linkList">
                <li>
                  <Link to="/">
                    <span></span>
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <span></span>
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <span></span>
                  </Link>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <div className="imgBox">
              <img src="" alt="" />
            </div>
            <div className="txtBox">
              <h3></h3>
              <p></p>
              <div className="techBox">
                <ul>
                  <li>
                    <span></span>
                  </li>
                  <li>
                    <span></span>
                  </li>
                  <li>
                    <span></span>
                  </li>
                  <li>
                    <span></span>
                  </li>
                  <li>
                    <span></span>
                  </li>
                </ul>
              </div>
              <ul className="linkList">
                <li>
                  <Link to="/">
                    <span></span>
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <span></span>
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <span></span>
                  </Link>
                </li>
              </ul>
            </div>
          </li> */}
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
