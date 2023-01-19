// import HeaderCheck from './HeaderCheck';
import { useState, useRef, useEffect } from 'react';
import { Viewer } from '@toast-ui/react-editor';
import '@toast-ui/editor/dist/toastui-editor.css';
import { Editor } from '@toast-ui/react-editor';


export default function Viewers(){
    const [valuechecked, setValuechecked] = useState("## 체크해주세요");
    const ref = useRef();
    const ref1 = useRef();
    const a = `![header](https://capsule-render.vercel.app/api?type=waving&color=0:f6acdd,100:c6acf6&width=1500&height=240&section=header&text=Hello%20World✋%20I'm%20Hyeji!&fontSize=50&fontColor=ffffff )   `
    // 현습이의 !조언 틀려서 그냥 냅둠
    
 
    const headerchecked = (e) => {
        if(e.target.checked){
            setValuechecked(`체크`);
        }else{
            setValuechecked(`# 체크안함`);     
        }
    }

    useEffect(() => {
        if(valuechecked === `체크`){
            ref.current.getInstance().setMarkdown(a);
            ref1.current.getInstance().setMarkdown(a);
        }else{
            ref.current.getInstance().setMarkdown(valuechecked);
            ref1.current.getInstance().setMarkdown(valuechecked);
        }


    
    }, [valuechecked])

	return (
        <>
            <form>
            <input type="checkbox" onClick={headerchecked}/>header
    
        </form>

        <h2>미리보기</h2>
    	

        {valuechecked&&
        <Viewer ref={ref} initialValue={valuechecked}/> }
        <Editor ref={ref1} content={valuechecked} previewStyle='vertical' height='100em'/>
        </>
	);
}