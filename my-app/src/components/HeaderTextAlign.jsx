import '@toast-ui/editor/dist/toastui-editor-viewer.css';
import { useRef } from 'react';

export default function HeaderColor(props) {
  const inputref = useRef();
  const cancelcheck = (e) => {
    for(var i = 0; i < 6; i+=2){
      inputref.current.childNodes[i].checked = false;
    }
    e.target.checked = true;
    props.setheadertextalign(e);

  }
  return (
    <>
                    <h3>Text Align</h3>
                    <div ref={inputref}>
                      <input type="checkbox" name="30" onClick={(e) => {cancelcheck(e)}}/>왼쪽 정렬
                      <input type="checkbox"  name="50" onClick={(e) => {cancelcheck(e)}}/>가운데 정렬
                      <input type="checkbox" name="70" onClick={(e) => {cancelcheck(e)}}/>오른쪽 정렬
                    </div >
                </>
  )
}
