import '@toast-ui/editor/dist/toastui-editor-viewer.css';
import { useRef, useState, useEffect } from 'react';

export default function HeaderColor(props) {
  const [gradient, setGradient] = useState(0);
  const [textcolor, setTextcolor] = useState("ffffff");
  const [color, setColor] = useState("000000");
  const [color2, setColor2] = useState("");
  
  

  const cancelcheck = (e) => {
    if(e.target.name === "stat"){
      if(e.target.checked){
        props.setgithubstats(`<img src="https://github-readme-stats.vercel.app/api?username=${props.username}&custom_title=${props.username+"'s Github Stat"}&bg_color=${gradient},${color},${color2}&title_color=${textcolor}&text_color=${textcolor}"
        />`);
      }else{
        props.setgithubstats("");
      }}else{
        if(e.target.checked){
          props.setmostusedlanguage(`<img src="https://github-readme-stats.vercel.app/api/top-langs/?username=${props.username}&layout=compact&bg_color=${gradient},${color},${color2}&title_color=${textcolor}&text_color=${textcolor}"
          />`);
        }else{
          props.setmostusedlanguage("");
      }
      
    }

    
  }

  const changetextcolor =(e) => {
    if(e.target.name === "white"){
      // eslint-disable-next-line no-undef
      setTextcolor(ffffff);
    }else if(e.target.name === "black"){
      setTextcolor("000000");
    }else{
      setTextcolor(e.target.value.slice(1));
    }
  }
  
  

const changebgcolor = (e) =>{
  if(e.target.name === "onecolor"){
    // eslint-disable-next-line no-undef
    setColor(e.target.value.slice(1));
  }else if(e.target.name === "gradient1"){
    setColor(e.target.value.slice(1));
  }else if(e.target.name === "gradient2"){
    setColor2(e.target.value.slice(1));
  }else if(e.target.name === "gradient"){
    if(e.target.checked){
      setGradient(60);
    }else{
      setGradient(180);
    }
  }else{
    setColor("00000000");
  }
}

useEffect(()=>{
  props.setgithubstats(`<img src="https://github-readme-stats.vercel.app/api?username=${props.username}&custom_title=${props.username+"'s Github Stat"}&bg_color=${gradient},${color},${color2}&title_color=${textcolor}&text_color=${textcolor}"
        // />`);
        props.setmostusedlanguage(`<img src="https://github-readme-stats.vercel.app/api/top-langs/?username=${props.username}&layout=compact&bg_color=${gradient},${color},${color2}&title_color=${textcolor}&text_color=${textcolor}"
          // />`);

}, [color, textcolor, gradient, color2])

  return (
    <>
                    <h3> Stat </h3>
                    <div>
                      <input type="checkbox" name="stat"  onClick={(e) => {cancelcheck(e)}}/>Github Stat
                      <input type="checkbox"  name="language" onClick={(e) => {cancelcheck(e)}}/>Most used language
                    </div >
                    <h4> 배경색 </h4>
                    <div>
                      <input type="color" name="onecolor"  onClick={changebgcolor}/>단색 컬러
                      <input type="checkbox" name="gradient"  onClick={changebgcolor}/>그라데이션
                      <input type="color"  name="gradient1" onClick={changebgcolor}/>그라데이션 컬러1
                      <input type="color"  name="gradient2" onClick={changebgcolor}/>그라데이션 컬러1
                      <input type="checkbox"  name="trans" onClick={changebgcolor}/>투명
                    </div >
                    <h4> 글자색 </h4>
                    <div >
                      <input type="checkbox" name="white"  onClick={changetextcolor}/>흰색
                      <input type="checkbox"  name="black" onClick={changetextcolor}/>검정색
                      <input type="color"  name="textcolor" onClick={changetextcolor}/>사용자 정의 색
                    </div >
                </>
  )
}
