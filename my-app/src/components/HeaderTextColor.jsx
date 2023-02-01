import '@toast-ui/editor/dist/toastui-editor-viewer.css';
import { useRef } from 'react';
import {Checkboxinput, Typeheader, Selectwrapper} from '../components/style';

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
    <Selectwrapper>
                    <Typeheader>6. Text Color</Typeheader>
                    <div ref={inputref}>
                      <Checkboxinput type="checkbox" name="000000" onClick={(e) => {cancelcheck(e)}}/>Black
                      <Checkboxinput type="checkbox"  name="ffffff" onClick={(e) => {cancelcheck(e)}}/>White
                      <Checkboxinput type="color" name="allcolor" onClick={(e) => {cancelcheck(e)}}/>사용자 정의 단색
                      
                    </div >
                </Selectwrapper>
  )
}
