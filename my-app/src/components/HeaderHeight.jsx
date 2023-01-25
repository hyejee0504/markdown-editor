import '@toast-ui/editor/dist/toastui-editor-viewer.css';
import { useRef } from 'react';

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
    <>
                    <h3>Height</h3>
                    <div ref={inputref}>
                      <input type="checkbox" name="small" onClick={(e) => {cancelcheck(e)}}/>Small
                      <input type="checkbox"  name="medium" onClick={(e) => {cancelcheck(e)}}/>Medium
                      <input type="checkbox" name="large" onClick={(e) => {cancelcheck(e)}}/>Large
                    </div >
                </>
  )
}
