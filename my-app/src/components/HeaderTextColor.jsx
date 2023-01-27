import '@toast-ui/editor/dist/toastui-editor-viewer.css';
import { useRef } from 'react';

export default function HeaderColor(props) {
  const inputref = useRef();
  const cancelcheck = (e) => {
    for(var i = 0; i < 4; i+=2){
      inputref.current.childNodes[i].checked = false;
    }
    e.target.checked = true;
    props.setheadertextcolor(e);

  }
  return (
    <>
                    <h3>Color</h3>
                    <div ref={inputref}>
                      <input type="checkbox" name="000000" onClick={(e) => {cancelcheck(e)}}/>Black
                      <input type="checkbox"  name="ffffff" onClick={(e) => {cancelcheck(e)}}/>White
                      <input type="color" name="allcolor" onClick={(e) => {cancelcheck(e)}}/>사용자 정의
                      
                    </div >
                </>
  )
}
