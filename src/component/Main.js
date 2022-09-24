import { useEffect, useState } from "react";

export default function Main() {
  const bg = {
    background: "url(/images/bg.png)",
    backgroundPosition: "50%",
    backgroundRepeat: "no-repeat",
    position: "relative",
    backgroundSize: "cover",
  };
  const introduceDesc =
    "안녕하세요. 오늘보다 내일 더 성장하는 프론트엔드 개발자 박소희입니다. 소박할지라도 작은 목표를 세우고 그 목표를 달성하기 위해 필요한 것들을 공부하고, 방법을 찾아내는 것에 익숙합니다. 언제나 계획을 세우고 실천하는 것을 좋아해 로직을 고민할 때에도 1부터 순서대로 고민하는 습관이 있습니다.";
  const [desc, setDesc] = useState("");
  const [count, setCount] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setDesc(desc + introduceDesc[count]);
      setCount(count + 1);
    }, 30);
    if (count === introduceDesc.length) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  });
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
          <p className="introduce">{desc}</p>
        </div>
      </div>
    </div>
  );
}
