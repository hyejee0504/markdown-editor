import '@toast-ui/editor/dist/toastui-editor-viewer.css';
import { useRef } from 'react';
import {Checkboxinput, Typeheader, Selectwrapper} from '../components/style';

export default function HeaderHeight(props) {
  const inputref = useRef();
  const cancelcheck = (e) => {
    for(var i = 0; i < 6; i+=2){
      inputref.current.childNodes[i].checked = false;
    }
    e.target.checked = true;
    props.setheaderheight(e);

  }
  return (
    <Selectwrapper>
                    <Typeheader>3. Height</Typeheader>
                    <div ref={inputref}>
                      <Checkboxinput type="checkbox" name="small" onClick={(e) => {cancelcheck(e)}}/>Small
                      <Checkboxinput type="checkbox"  name="medium" onClick={(e) => {cancelcheck(e)}}/>Medium
                      <Checkboxinput type="checkbox" name="large" onClick={(e) => {cancelcheck(e)}}/>Large
                    </div >
                </Selectwrapper>
  )
}
