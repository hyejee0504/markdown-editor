import '@toast-ui/editor/dist/toastui-editor-viewer.css';
import { useRef } from 'react';
import {Checkboxinput, Typeheader, Selectwrapper} from '../components/style';

export default function HeaderColor(props) {
  const inputref = useRef();
  const cancelcheck = (e) => {
    for(var i = 0; i < 15; i+=3){
      inputref.current.childNodes[i].checked = false;
    }
    e.target.checked = true;
    props.setheadercolor(e);

  }
  return (
    <Selectwrapper>
                    <Typeheader>2. Color</Typeheader>
                    <div ref={inputref}>
                      <Checkboxinput type="checkbox" name="auto" onClick={(e) => {cancelcheck(e)}}/>Auto : 검증된 랜덤 컬러
                      <br></br>
                      <Checkboxinput type="checkbox"  name="random" onClick={(e) => {cancelcheck(e)}}/>Random : 정말 무작위 컬러
                      <br></br>
                      <Checkboxinput type="checkbox" name="gradient" onClick={(e) => {cancelcheck(e)}}/>Gradient : 검증된 무작위 그라데이션
                      <br></br>
                      <Checkboxinput type="color" name="setcolor" onClick={(e) => {cancelcheck(e)}}/>사용자 정의 단색
                      <br></br>
                      <p style={{margin : "5px 0px","margin-top":"10px", "font-weight" : "600"}}>✨ 그라데이션은 두 컬러를 골라야합니다.</p>
                      <Checkboxinput type="color" name="setcolorgradient1" onClick={(e) => {cancelcheck(e)}}/>사용자 정의 그라데이션 1
                      <br></br>
                      <Checkboxinput type="color" name="setcolorgradient2" onClick={(e) => {cancelcheck(e)}}/>사용자 정의 그라데이션 2
                      
                      
                    </ div>
                </Selectwrapper>
  )
}
