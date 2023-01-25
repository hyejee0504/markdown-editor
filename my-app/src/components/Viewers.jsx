// import HeaderCheck from './HeaderCheck';
import { useState, useRef, useEffect } from 'react';
import { Viewer } from '@toast-ui/react-editor';
import '@toast-ui/editor/dist/toastui-editor.css';
import { Editor } from '@toast-ui/react-editor';
import styled from "styled-components";
import HeaderCheck from './HeaderCheck';

const Wrapper = styled.div`
    display: flex;
`
const PreviewShow = styled.div`
    width: 50%;
`

const SelectWrapper = styled.div`
    width: 50%;
`


export default function Viewers(){
    const [valuechecked, setValuechecked] = useState("## 체크해주세요");
    const [headertyped, setHeadertyped] = useState("wave");
    // const [valuechecked, setValuechecked] = useState("## 체크해주세요");
    // const [valuechecked, setValuechecked] = useState("## 체크해주세요");


    const ref = useRef();
    const ref1 = useRef();
    
    const headerdefault = `![header](https://capsule-render.vercel.app/api?type=${headertyped})`
    // 현습이의 !조언 틀려서 그냥 냅둠
    
 
    const headerchecked = (e) => {
        if(e.target.checked){
            setValuechecked("headerchecked");
        }else{
            setValuechecked(`headernochecked`);     
        }
    }


    const setheader = (e) => {
        setHeadertyped(e.target.name);
        console.log(e);
    }

     useEffect(() => {
            ref.current.getInstance().setMarkdown(headerdefault);
            ref1.current.getInstance().setMarkdown(headerdefault);
        })

    const headercheckfunc = () => {
        if(valuechecked === "headerchecked"){
            return (
                <HeaderCheck setheader={setheader}/>
            )}
        else{
            return null;
        }

    }

    
    useEffect(() => {
        if(valuechecked === "headerchecked" ){
            ref.current.getInstance().setMarkdown(headerdefault);
            ref1.current.getInstance().setMarkdown(headerdefault);
        }else{
            ref.current.getInstance().setMarkdown("");
            ref1.current.getInstance().setMarkdown("");
        }


    
    }, [valuechecked])

	return (
        <>  
            <Wrapper>
                {/* 선택지 */}
                <SelectWrapper>
                    <form>
                    <input type="checkbox" onClick={headerchecked}/>Header
                    {headercheckfunc()}

            
                    </form>
                </SelectWrapper >
                {/* 미리보기 */}
                <PreviewShow>
                    <h2>미리보기</h2>
                    <Viewer ref={ref} initialValue={valuechecked}/> 
                </PreviewShow>
            </Wrapper>
        <Editor ref={ref1} content={valuechecked} previewStyle='vertical' height='100em'/>
        </>
	);
}