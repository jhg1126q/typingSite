import { useState } from "react";
import "./main.css";

const TypingMain = () => {
  // 변수
  const [state, setState] = useState({
    typeContentMsg: "",
  });
  // state 하나로 관리하기가 안됨
  const [typeAccuracy, setTypeAccuracy] = useState(0);
  const [typeSpeed, setTypeSpeed] = useState(0);
  const typeResultMsg = "타이핑 테스트 목록";

  /*********************************************
        title : handleChangeState
        param : event
        content : 변수 변경시 데이터 업데이트 반영
    **********************************************/
  const handleChangeState = (e) => {
    let contents = e.target.value;

    if (e.target.name === "typeContentMsg") {
      checkTypingContent(contents);
    }

    setState({
      ...state,
      [e.target.name]: contents,
    });
  };

  /*********************************************
        title : handleChangeState
        param : event
        content : typingContent 칸 제어
    **********************************************/
  const checkTypingContent = (txt) => {
    if (typeResultMsg.length <= txt.length) {
      if (typeResultMsg === txt) {
        setTypeSpeed(10);
        setTypeAccuracy(100);
        txt = "";
      } else {
        // 작성중인 상태 일수 도 있다.
        // 해당 판별 여부를 위해 정확도를 측정하지 않아야합니다
        console.log("실패 ");
        setTypeSpeed(10);
        setTypeAccuracy(0);
      }
    } else if (typeResultMsg.length <= txt.length) {
      // 작성 완료인 상태
      // 텍스트 잘라서 비교해야한다
    } else {
      console.log("작성중");
    }
  };

  /*********************************************
        title : handlePageMove
        param : event
        content : 
    **********************************************/
  const handlePageMove = () => {
    console.log("페이지 이동 ::: 추가 삭제");
  };

  /*********************************************
        title : handleKeyDown
        param : event
        content : 입력되는 키 구분
    **********************************************/
  const handleKeyDown = (e) => {
    if (e.keyCode === 13) {
      console.log("Enter");
    } else if (e.keyCode === 32) {
      console.log("Space");
    }
  };

  // 타이핑 성공시 텍스트 인풋 초기화 해야한다

  return (
    <div className="TypingMain">
      <h2>사이트 메인화면</h2>
      <div>
        <p>{typeResultMsg}</p>
      </div>
      <div>
        <input
          name="typeContentMsg"
          value={state.typeContentMsg}
          onChange={handleChangeState}
          onKeyDown={handleKeyDown}
        ></input>
      </div>
      <div>
        <p className="infotxt">속도 : {typeSpeed} / min</p>
      </div>
      <div>
        <p className="infotxt">정확도 : {typeAccuracy} %</p>
      </div>
      <div>
        <button onClick={handlePageMove}>Add / Delete</button>
      </div>
    </div>
  );
};

export default TypingMain;
