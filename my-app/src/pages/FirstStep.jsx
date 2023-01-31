import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';


export default function FirstStep() {
    const [username, setUsername] = useState("");
    const [headerchecked, setHeaderchecked] = useState(false);
    const [introductionchecked, setIntroductionchecked] = useState(false);
    const [skillstackschecked, setSkillstackschecked] = useState(false);
    const [contactchecked, setContactchecked] = useState(false);
    const [statschecked, setStatschecked] = useState(false);

    const navigate = useNavigate();
    const nextpage = () => {
        navigate("../secondstep", {
            state: {
              username: username,
              headerchecked: headerchecked,
              introductionchecked: introductionchecked,
              skillstackschecked: skillstackschecked,
              contactchecked: contactchecked,
              statschecked: statschecked

            }})
    }

    //username input값이 바뀔때마다 변수가 바뀌게 하는 함수
    const changeusername = (e) => {
        setUsername(e.target.value);
    }

    const checkchecked = (e) => {
        if(e.target.name === "header"){
            if(e.target.checked){
                setHeaderchecked(true);
            }else{
                setHeaderchecked(false);
            }
        }else if(e.target.name === "introduction"){
            if(e.target.checked){
                setIntroductionchecked(true);
            }else{
                setIntroductionchecked(false);
            } 
        }else if(e.target.name === "skillstack"){
            if(e.target.checked){
                setSkillstackschecked(true);
            }else{
                setSkillstackschecked(false);
            }
        }else if(e.target.name === "contact"){
            if(e.target.checked){
                setContactchecked(true);
            }else{
                setContactchecked(false);
            }
        }else{
            if(e.target.checked){
                setStatschecked(true);
            }else{
                setStatschecked(false);
            }
        }
        
    }

  return (
    <>
        <div>
            <h2>본인의 Github username을 입력하세요.</h2>
            <input type="text" placeholder='username을 입력하세요.' onChange={changeusername}/>
        </div>
       <div>
            <h2>Profile에 추가하고 싶은 내용을 선택하세요.</h2>
                <input type="checkbox" name='header' onClick={checkchecked} />헤더
                <input type="checkbox" name='introduction' onClick={checkchecked}/>자기소개
                <input type="checkbox" name='skillstack' onClick={checkchecked}/>기술스택
                <input type="checkbox" name='contact' onClick={checkchecked}/>블로그, 이메일, link연결 페이지
                <input type="checkbox" name='stat' onClick={checkchecked}/>Github Stat
       </div>
        <button onClick={nextpage}>Next</button>
    </>
    
  )
}
