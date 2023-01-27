import '@toast-ui/editor/dist/toastui-editor-viewer.css';
import { useRef } from 'react';

export default function HeaderColor(props) {
  const inputref = useRef();

  const cancelcheck = (e) => {
    for(var i = 0; i < 10; i+=2){
      inputref.current.childNodes[i].checked = false;
    }
    e.target.checked = true;
    props.setheadertextanimation(e);

  }
  return (
    <>
                    <h3>Text Animation</h3>
                    <div ref={inputref}>
                      <input type="checkbox" name="fadeIn" onClick={(e) => {cancelcheck(e)}}/>FadeIn
                      <input type="checkbox"  name="scaleIn" onClick={(e) => {cancelcheck(e)}}/>ScaleIn
                      <input type="checkbox" name="blink" onClick={(e) => {cancelcheck(e)}}/>Blink
                      <input type="checkbox" name="blinking" onClick={(e) => {cancelcheck(e)}}/>Blinking
                      <input type="checkbox" name="twinkling" onClick={(e) => {cancelcheck(e)}}/>Twinkling
                    </div >
                </>
  )
}
