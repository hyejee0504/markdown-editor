import '@toast-ui/editor/dist/toastui-editor-viewer.css';
import { useRef, useState, useEffect } from 'react';

export default function HeaderColor(props) {
  const colorArr = {"Facebook" : "1877F2", 
  "Instagram": "E4405F",
"Velog": "20C997",
"Naver": "03C75A",
"Tistory": "000000",
"Notion": "000000",
"Gmail": "EA4335",
  }

  
  const [badgeArr, setBadgeArr] = useState([]);
  const [checkArr, setCheckArr] = useState({Facebook: false, Instagram: false, Velog: false, Naver: false, Tistory:false, Notion: false, Gmail: false});
  const [linkArr, setLinkArr] = useState({Facebook: "", Instagram: "", Velog: "", Naver: "", Tistory: "", Notion: "", Gmail: ""});
  const inputref = useRef();
  

  const cancelcheck = (e) => {

    if(e.target.checked){
      setBadgeArr(badgeArr => [...badgeArr, e.target.name]);
      setCheckArr(checkArr => ({...checkArr, [e.target.name]: true }))
    }else{
      setBadgeArr(badgeArr => badgeArr.filter(value => value !== e.target.name));
      setCheckArr(checkArr => ({...checkArr, [e.target.name] : false }))
    }
  }
  
  

  useEffect(() => {
    let badgeText = ""
    for(var i in badgeArr){
      if(badgeArr[i] === "Gmail"){
        badgeText += `<a href=mailto:${linkArr[badgeArr[i]]}> <img src="https://img.shields.io/badge/${badgeArr[i]}-${colorArr[badgeArr[i]]}?style=${props.badgestyle}&logo=${badgeArr[i]}&logoColor=white&link=mailto:${linkArr[badgeArr[i]]}"> </a> `  
      }else{
        badgeText += `<a href=${linkArr[badgeArr[i]]}> <img src="https://img.shields.io/badge/${badgeArr[i]}-${colorArr[badgeArr[i]]}?style=${props.badgestyle}&logo=${badgeArr[i]}&logoColor=white&link=${linkArr[badgeArr[i]]}"> </a> ` 
      }
    }
    props.setContactAllBadge(badgeText);
  }, [badgeArr, linkArr, props.badgestyle])

const changeurl = (e) => {
  setLinkArr(linkArr => ({...linkArr, [e.target.name]: e.target.value }))
}

  return (
    <>
                    <h3>본인을 나타내고 연락할 수 있는 방법을 모두 선택해주세요.</h3>
                    <div ref={inputref}>
                      <input type="checkbox" name="Facebook"  onClick={(e) => {cancelcheck(e)}}/>Facebook
                      {checkArr.Facebook ? <input type="text" name="Facebook" placeholder='Facebook url 입력' onChange={changeurl}/> : null}
                      <input type="checkbox"  name="Instagram" onClick={(e) => {cancelcheck(e)}}/>Instagram
                      {checkArr.Instagram ? <input type="text" name="Instagram" placeholder='Instagram url 입력' onChange={changeurl}/> : null}
                      <input type="checkbox"  name="Velog" onClick={(e) => {cancelcheck(e)}}/>Velog
                      {checkArr.Velog ? <input type="text" name="Velog" placeholder='Velog url 입력' onChange={changeurl}/> : null}
                      <input type="checkbox" name="Naver" onClick={(e) => {cancelcheck(e)}}/>Naver blog
                      {checkArr.Naver ? <input type="text" name = "Naver" placeholder='Naver blog url 입력' onChange={changeurl}/> : null}
                      <input type="checkbox" name="Tistory" onClick={(e) => {cancelcheck(e)}}/>Tistory
                      {checkArr.Tistory ? <input type="text" name="Tistory" placeholder='Tistory url 입력' onChange={changeurl}/> : null}
                      <input type="checkbox" name="Notion" onClick={(e) => {cancelcheck(e)}}/>Notion
                      {checkArr.Notion ? <input type="text" name="Notion" placeholder='Notion url 입력' onChange={changeurl}/> : null}
                      <input type="checkbox" name="Gmail" onClick={(e) => {cancelcheck(e)}}/>Gmail
                      {checkArr.Gmail ? <input type="text" name="Gmail" placeholder='Gmail url 입력' onChange={changeurl}/> : null}
                     
                      {/* <button onClick={resetCheck}>초기화</button> */}





                    </div >
                </>
  )
}
