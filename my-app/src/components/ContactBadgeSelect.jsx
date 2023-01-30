import '@toast-ui/editor/dist/toastui-editor-viewer.css';
import { useRef, useState, useEffect } from 'react';

export default function HeaderColor(props) {
  const colorArr = {"Amazon S3" : "569A31", 
  "Android": "3DDC84",
"AngularJS": "E23237",
"Apache Tomcat": "F8DC75",
"Apollo GraphQL": "311C87",
"Amazon AWS": "232F3E",
"Babel": "F9DC3E",
"Bitrise": "683D87",
"Bootstrap": "7952B3",



  }
  const [badgeArr, setBadgeArr] = useState([]);
  const inputref = useRef();
  const cancelcheck = (e) => {
    // for(var i = 0; i < 146; i+=2){
    //   inputref.current.childNodes[i].checked = false;
    // }
    // e.target.checked = true;
    if(e.target.checked){
      setBadgeArr(badgeArr => [...badgeArr, e.target.name]);
    }else{
      setBadgeArr(badgeArr => badgeArr.filter(value => value !== e.target.name));
    }
  }
  
  const resetCheck = () => {
    for(var i = 0; i < 130; i+=2){
      inputref.current.childNodes[i].checked = false;
    }
    setBadgeArr([])
  }

  useEffect(() => {
    let badgeText = ""
    for(var i in badgeArr){
      if(badgeArr[i] === "ReactNative"){
        badgeText += `<img src="https://img.shields.io/badge/ReactNative-61DAFB?style=for-the-badge&logo=React&logoColor=white">  `
      }else{
        badgeText += `<img src="https://img.shields.io/badge/${badgeArr[i]}-${colorArr[badgeArr[i]]}?style=for-the-badge&logo=${badgeArr[i]}&logoColor=white">  `
      }
    }
    props.setAllBadge(badgeText);
  }, [badgeArr])

  return (
    <>
                    <h3>기술 스택 선택</h3>
                    <div ref={inputref}>
                      <input type="checkbox" name="Amazon S3"  onClick={(e) => {cancelcheck(e)}}/>Amazon S3
                      <input type="checkbox"  name="Android" onClick={(e) => {cancelcheck(e)}}/>Android
                      <input type="checkbox"  name="AngularJS" onClick={(e) => {cancelcheck(e)}}/>Angular.js
                      <input type="checkbox" name="Apache Tomcat" onClick={(e) => {cancelcheck(e)}}/>Apache Tomcat
                      <input type="checkbox" color="" name="Apollo GraphQL" onClick={(e) => {cancelcheck(e)}}/>Apollo GraphQL
                      <input type="checkbox" color="" name="Amazon AWS" onClick={(e) => {cancelcheck(e)}}/>Amazon AWS
                      <input type="checkbox" color="" name="Babel" onClick={(e) => {cancelcheck(e)}}/>Babel
                      <input type="checkbox" color="" name="Bitrise" onClick={(e) => {cancelcheck(e)}}/>Bitrise
                      <input type="checkbox" color="" name="Bootstrap" onClick={(e) => {cancelcheck(e)}}/>Bootstrap
                      <input type="checkbox" color="" name="C" onClick={(e) => {cancelcheck(e)}}/>C
                     
                      <button onClick={resetCheck}>초기화</button>





                    </div >
                </>
  )
}
