import '@toast-ui/editor/dist/toastui-editor-viewer.css';
import { useRef, useState, useEffect } from 'react';
import {Checkboxinput, Typeheader, Selectwrapper} from '../components/style';

export default function HeaderColor(props) {
  const [gradient, setGradient] = useState(0);
  const [textcolor, setTextcolor] = useState("ffffff");
  const [color, setColor] = useState("000000");
  const [color2, setColor2] = useState("");
  
  const ref1 = useRef();
  const ref2 = useRef();

 
  

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
    for(var i = 0; i < 6; i+=1){
      ref2.current.childNodes[i].checked = false;
    }
    e.target.checked = true;
    if(e.target.name === "white"){
      // eslint-disable-next-line no-undef
      setTextcolor("ffffff");
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
    for(var i = 3; i < 15; i+=3){
      ref1.current.childNodes[i].checked = false;
    }
    e.target.checked = true;
    if(e.target.checked){
      setGradient(60);
      
    }else{
      setGradient(180);
    }
  }else{
    setColor("00000000");
    for(var i = 3; i < 15; i+=6){
      ref1.current.childNodes[i].checked = false;
    }
    e.target.checked = true;
  }
}

useEffect(()=>{
  props.setgithubstats(`<img src="https://github-readme-stats.vercel.app/api?username=${props.username}&custom_title=${props.username+"'s Github Stat"}&bg_color=${gradient},${color},${color2}&title_color=${textcolor}&text_color=${textcolor}"
        // />`);
        props.setmostusedlanguage(`<img src="https://github-readme-stats.vercel.app/api/top-langs/?username=${props.username}&layout=compact&bg_color=${gradient},${color},${color2}&title_color=${textcolor}&text_color=${textcolor}"
          // />`);

}, [color, textcolor, gradient, color2])

  return (
    <Selectwrapper>
                    <h3>1. 추가할 부분을 선택하세요. </h3>
                    <div>
                      <Checkboxinput type="checkbox" name="stat"  onClick={(e) => {cancelcheck(e)}}/>Github Stat
                      <Checkboxinput type="checkbox"  name="language" onClick={(e) => {cancelcheck(e)}}/>Most used language
                    </div >
                    <Typeheader>2. Background Color </Typeheader>
                    <div ref={ref1}>
                      <Checkboxinput type="color" name="onecolor"  onClick={changebgcolor}/>사용자 정의 단색
                      <br></br>
                      <Checkboxinput type="checkbox" name="gradient"  onClick={changebgcolor}/>그라데이션
                      <br></br>
                      <Checkboxinput type="color"  name="gradient1" onClick={changebgcolor}/>사용자 정의 그라데이션 1
                      <br></br>
                      <Checkboxinput type="color"  name="gradient2" onClick={changebgcolor}/>사용자 정의 그라데이션 2
                      <br></br>
                      <Checkboxinput type="checkbox"  name="trans" onClick={changebgcolor}/>투명
                    </div >
                    <Typeheader>3. Text Color </Typeheader>
                    <div ref={ref2}>
                      <Checkboxinput type="checkbox" name="white"  onClick={changetextcolor}/>흰색
                      <Checkboxinput type="checkbox"  name="black" onClick={changetextcolor}/>검정색
                      <Checkboxinput type="color"  name="textcolor" onClick={changetextcolor}/>사용자 정의 단색
                    </div >
                </Selectwrapper>
  )
}
