import '@toast-ui/editor/dist/toastui-editor-viewer.css';
import { useRef } from 'react';

export default function HeaderCheck(props) {
  const inputref = useRef()
  const cancelcheck = (e) => {
    for(var i = 0; i < 19; i+=2){
      inputref.current.childNodes[i].checked = false;
    }
    e.target.checked = true;
    props.setheader(e);

  }
  return (
    <>
                    <h3>Type</h3>
                    <div ref={inputref}>
                      <input type="checkbox" name="wave" onClick={(e) => {cancelcheck(e)}}/>Wave
                      <input type="checkbox"  name="egg" onClick={(e) => {cancelcheck(e)}}/>Egg
                      <input type="checkbox" name="shark" onClick={(e) => {cancelcheck(e)}}/>Shark
                      <input type="checkbox" name="slice" onClick={(e) => {cancelcheck(e)}}/>Slice
                      <input type="checkbox" name="rect" onClick={(e) => {cancelcheck(e)}}/>Rect
                      <input type="checkbox" name="soft" onClick={(e) => {cancelcheck(e)}}/>Soft
                      <input type="checkbox" name="rounded" onClick={(e) => {cancelcheck(e)}}/>Rounded
                      <input type="checkbox" name="cylinder" onClick={(e) => {cancelcheck(e)}}/>Cylinder
                      <input type="checkbox" name="waving" onClick={(e) => {cancelcheck(e)}}/>Waving
                      <input type="checkbox" name="transparent" onClick={(e) => {cancelcheck(e)}}/>Transparent
                    </div >
                </>
  )
}
