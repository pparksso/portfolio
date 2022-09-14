export default function Main() {
  const bg = {
    background: "url(/images/bg.png)",
    backgroundPosition: "50%",
    backgroundRepeat: "no-repeat",
    position: "relative",
    backgroundSize: "cover",
  };
  return (
    <div id="main">
      <div className="container" style={bg}>
        <div className="mainVisual">
          <img src="images/mainVisual01-01.png" alt="컴퓨터 하는 우주인" />
        </div>
        <div className="txtBox">
          <h1>
            Hello. <br /> I'm sohee
          </h1>
          <p>안녕하세요. 프론트엔드 개발자 박소희입니다. 저는 꾸준히 발전하고 새로운 것을 시도하는 것을 좋아합니다. </p>
        </div>
      </div>
    </div>
  );
}
