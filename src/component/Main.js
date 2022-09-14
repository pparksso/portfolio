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
          <img src="images/mainVisual.png" alt="컴퓨터 하는 우주인" />
        </div>
        <div className="txtBox">
          <h1>안녕하세요. 두줄로 나누기</h1>
          <p>자기소개 세줄정도 짧게 생각해보기... </p>
        </div>
      </div>
    </div>
  );
}
