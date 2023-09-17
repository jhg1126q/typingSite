import { useState } from "react";
import "./main.css";

const TypingMain = () => {

    const [state, setState] = useState({
        typeConstentMsg : "",
        typeResultMsg : "타이핑 테스트 목록",
        typeSpeed : 0,
        typeAccuracy : 0
    });

    const handleChangeState = (e) => {
        
        if(e.target.name === "typeConstentMsg") {
            if(state.typeResultMsg.length >= state.typeConstentMsg.length) {
                if(state.typeResultMsg === e.target.value){
                    console.log(state.typeConstentMsg);
                    console.log("성공");
                }
            } else {
                console.log("실패");
            }
        }

        setState({
            ...state,
            [e.target.name] : e.target.value
        });
    };

    const handlePageMove = () => {
        console.log("추가하러가기");
    };
    
    

    return (
    <div className="TypingMain">
        <h2>사이트 메인화면</h2>
        <div>
            <p>{state.typeResultMsg}</p>
        </div>
        <div>
            <input 
                name="typeConstentMsg" 
                value={state.typeContentMsg} 
                onChange={handleChangeState}>
            </input>
        </div>
        <div>
            <p className="infotxt">속도 : {state.typeSpeed} / min</p>
        </div>
        <div>
            <p className="infotxt">정확도 : {state.typeAccuracy} %</p>
        </div>
        <div>
            <button onClick={handlePageMove}>Add / Delete</button>
        </div>
    </div>    
    );
}

export default TypingMain;