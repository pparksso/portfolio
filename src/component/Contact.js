import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faV } from "@fortawesome/free-solid-svg-icons";
import Email from "./Email";
export default function Contact() {
  return (
    <>
      <div id="contact">
        <div className="container">
          <div className="left">
            <div className="titleBox">
              <h1>Contact Me</h1>
              <p>Please feel free contact me!</p>
            </div>
            <div className="txtBox">
              <p className="name">프론트엔드 개발자 박소희입니다.</p>
              <a href="mailto:thgml5143@hanmail.net">
                <span className="email">thgml5143@hanmail.net</span>
              </a>
            </div>
            <div className="linkBox">
              <ul>
                <li>
                  <a href="https://github.com/pparksso">
                    <img src="images/github.svg" alt="" />
                    <span>GitHub</span>
                  </a>
                </li>
                <li>
                  <a href="https://velog.io/@pparksso">
                    <FontAwesomeIcon icon={faV} />
                    <span>velog</span>
                  </a>
                </li>
              </ul>
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
