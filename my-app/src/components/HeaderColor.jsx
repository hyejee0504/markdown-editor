import '@toast-ui/editor/dist/toastui-editor-viewer.css';
import { useRef } from 'react';

export default function HeaderColor(props) {
  const inputref = useRef();
  const cancelcheck = (e) => {
    for(var i = 0; i < 8; i+=2){
      inputref.current.childNodes[i].checked = false;
    }
    e.target.checked = true;
    props.setheadercolor(e);

  }
  return (
    <>
                    <h3>Color</h3>
                    <div ref={inputref}>
                      <input type="checkbox" name="auto" onClick={(e) => {cancelcheck(e)}}/>Auto
                      <input type="checkbox"  name="random" onClick={(e) => {cancelcheck(e)}}/>Random
                      <input type="checkbox" name="gradient" onClick={(e) => {cancelcheck(e)}}/>Gradient
                      <input type="color" name="setcolor" onClick={(e) => {cancelcheck(e)}}/>사용자 정의
                      <input type="color" name="setcolorgradient1" onClick={(e) => {cancelcheck(e)}}/>사용자 정의 그라데이션 1
                      <input type="color" name="setcolorgradient2" onClick={(e) => {cancelcheck(e)}}/>사용자 정의 그라데이션 2
                      
                      
                    </div >
                </>
  )
}
