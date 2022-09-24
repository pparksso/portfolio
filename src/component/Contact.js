import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faV } from "@fortawesome/free-solid-svg-icons";
import Email from "./Email";
export default function Contact() {
  return (
    <>
      <div id="contact">
        <div className="container">
          <div className="left">
            <div className="infoBox">
              <div className="infoWrap">
                <div className="titleBox">
                  <h1>Contact Me</h1>
                  <p>Please feel free contact me!</p>
                </div>
                <div className="txtBox">
                  <p className="name">프론트엔드 개발자 박소희입니다.</p>
                  <a href="mailto:thgml5143@hanmail.net">
                    <span className="email">thgml5143@hanmail.net</span>
                  </a>
                  <p className="phone">010 - 6482 - 5124</p>
                </div>
                <div className="linkBox">
                  <ul>
                    <li>
                      <a href="https://github.com/pparksso" target="blank">
                        <img src="images/github.svg" alt="" />
                        <span>GitHub</span>
                      </a>
                    </li>
                    <li>
                      <a href="https://velog.io/@pparksso" target="blank">
                        <FontAwesomeIcon icon={faV} />
                        <span>velog</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="imgBox">
              <img src="images/mainVisual03.png" alt="인사하는 우주인" />
            </div>
          </div>
          <div className="right">
            <Email />
          </div>
        </div>
      </div>
    </>
  );
}
