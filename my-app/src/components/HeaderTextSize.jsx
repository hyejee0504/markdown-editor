import '@toast-ui/editor/dist/toastui-editor-viewer.css';
import { useRef } from 'react';

export default function HeaderColor(props) {
  const inputref = useRef();
  const cancelcheck = (e) => {
    for(var i = 0; i < 10; i+=2){
      inputref.current.childNodes[i].checked = false;
    }
    e.target.checked = true;
    props.setheadertextsize(e);

  }
  return (
    <>
                    <h3>Text Size</h3>
                    <div ref={inputref}>
                      <input type="checkbox" name="40" onClick={(e) => {cancelcheck(e)}}/>XS
                      <input type="checkbox"  name="50" onClick={(e) => {cancelcheck(e)}}/>S
                      <input type="checkbox" name="60" onClick={(e) => {cancelcheck(e)}}/>M
                      <input type="checkbox" name="70" onClick={(e) => {cancelcheck(e)}}/>L
                      <input type="checkbox" name="90" onClick={(e) => {cancelcheck(e)}}/>XL     
                    </div >
                </>
  )
}
