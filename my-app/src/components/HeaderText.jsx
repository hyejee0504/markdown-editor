import '@toast-ui/editor/dist/toastui-editor-viewer.css';
import { useRef } from 'react';

export default function HeaderText(props) {
  const inputref = useRef();
  const cancelcheck = (e) => {
    // for(var i = 0; i < 6; i+=2){
    //   inputref.current.childNodes[i].checked = false;
    // }
    // e.target.checked = true;
    props.setheadertext(e);

  }
  return (
    <>
                    <h3>Text</h3>
                    <div ref={inputref}>
                      <input type="text" name="small" onChange={(e) => {cancelcheck(e)}}/>
                      <button>텍스트</button>
                    </div >
                </>
  )
}
