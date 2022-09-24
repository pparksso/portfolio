export default function Skill() {
  return (
    <div id="skill">
      <div className="container">
        <div className="titleBox skillBox">
          <h1>Skill & Tools</h1>
        </div>
        <ul className="skillList">
          <li>
            <div className="imgBox">
              <img src="images/javascript-original.svg" alt="javascript" />
            </div>
            <span>Javascript</span>
          </li>
          {/* <li>
            <div className="imgBox">
              <img src="images/typescript.svg" alt="typescript" />
            </div>
            <span>TypeScript</span>
          </li> */}
          <li>
            <div className="imgBox">
              <img src="images/react-original.svg" alt="react" />
            </div>
            <span>React Js</span>
          </li>
          {/* <li>
            <div className="imgBox">
              <img src="images/redux.svg" alt="redux" />
            </div>
            <span>Redux</span>
          </li> */}
          <li>
            <div className="imgBox">
              <img src="images/nodejs-original.svg" alt="nodejs" />
            </div>
            <span>Node Js</span>
          </li>
          <li>
            <div className="imgBox">
              <img src="images/mongodb-original.svg" alt="mongodb" />
            </div>
            <span>MongoDB</span>
          </li>
          <li>
            <div className="imgBox">
              <img src="images/mongoose.png" alt="mongoose" />
            </div>
            <span>Mongoose</span>
          </li>
          <li>
            <div className="imgBox">
              <img src="images/html5-original.svg" alt="html5" />
            </div>
            <span>HTML 5</span>
          </li>
          <li>
            <div className="imgBox">
              <img src="images/css3-original.svg" alt="css3" />
            </div>
            <span>CSS 3</span>
          </li>
          <li>
            <div className="imgBox">
              <img src="images/sass.svg" alt="sass" />
            </div>
            <span>SASS</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
