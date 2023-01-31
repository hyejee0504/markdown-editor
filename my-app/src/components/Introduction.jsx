import '@toast-ui/editor/dist/toastui-editor-viewer.css';
import { useRef, useState, useEffect } from 'react';

export default function HeaderColor(props) {


  
  // const [badgeArr, setBadgeArr] = useState([]);
  // const [checkArr, setCheckArr] = useState({Facebook: false, Instagram: false, Velog: false, Naver: false, Tistory:false, Notion: false, Gmail: false});
  // const [linkArr, setLinkArr] = useState({Facebook: "", Instagram: "", Velog: "", Naver: "", Tistory: "", Notion: "", Gmail: ""});
  // const inputref = useRef();
  

  const changeheader = (e) => {
    props.setMyintroheader(e.target.value);
  }

  const changetext = (e) => {
    let a = e.target.value.replaceAll("-", "<li>")
    
    props.setMyintro(a);
  }
  
  

  // useEffect(() => {
  //   let badgeText = ""
  //   for(var i in badgeArr){
  //     if(badgeArr[i] === "Gmail"){
  //       badgeText += `<a href=mailto:${linkArr[badgeArr[i]]}> <img src="https://img.shields.io/badge/${badgeArr[i]}-${colorArr[badgeArr[i]]}?style=${props.badgestyle}&logo=${badgeArr[i]}&logoColor=white&link=mailto:${linkArr[badgeArr[i]]}"> </a> `  
  //     }else{
  //       badgeText += `<a href=${linkArr[badgeArr[i]]}> <img src="https://img.shields.io/badge/${badgeArr[i]}-${colorArr[badgeArr[i]]}?style=${props.badgestyle}&logo=${badgeArr[i]}&logoColor=white&link=${linkArr[badgeArr[i]]}"> </a> ` 
  //     }
  //   }
  //   props.setContactAllBadge(badgeText);
  // }, [badgeArr, linkArr, props.badgestyle])



  return (
    <>
                    <h3>자기소개 제목 내용을 입력하세요.</h3>
                    <input type="text" placeholder='자기소개제목 입력'  onChange={changeheader}/>
                    <h3>자기소개 내용을 입력하세요.</h3>
                    <textarea placeholder='자기소개내용 입력'  onChange={changetext}/>
                      
              
                </>
  )
}
