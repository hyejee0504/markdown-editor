/* eslint-disable no-unused-vars */
// import HeaderCheck from './HeaderCheck';
import { useState, useRef, useEffect } from 'react';
import { Viewer } from '@toast-ui/react-editor';
import '@toast-ui/editor/dist/toastui-editor.css';
import { Editor } from '@toast-ui/react-editor';
import styled from "styled-components";
import HeaderCheck from './HeaderCheck';
import HeaderColor from "./HeaderColor";
import HeaderHeight from './HeaderHeight';
import HeaderText from './HeaderText';

const Wrapper = styled.div`
    display: flex;
`
const PreviewShow = styled.div`
    width: 70%;
    height: 70em;
`

const SelectWrapper = styled.div`
    width: 30%;
`


export default function Viewers(){
    const [valuechecked, setValuechecked] = useState("## 체크해주세요");
    const [headertyped, setHeadertyped] = useState("wave");
    const [color, setColor] = useState("#b897ff");
    const [height, setHeight] = useState(120);
    const [text, setText] = useState("");
    const [textanimation, setTextanimation] = useState("");
    const [fontcolor, setFontcolor] = useState("000000");
    const [fontsize, setFontsize] = useState(70);
    const [fontalign, setFontalign] = useState(50);
    const [fontaligny, setFontaligny] = useState(50);
    const [gradient1, setGradient1] = useState("");
    const [gradient2, setGradient2] = useState("");
    


    const ref = useRef();
    const ref1 = useRef();
    
    const headerdefault = `![header](https://capsule-render.vercel.app/api?type=${headertyped}&color=${color}&height=${height}&text=${text}&animation=${textanimation}&fontColor=${fontcolor}&fontSize=${fontsize}&fontAlign=${fontalign}&fontAlignY=${fontaligny})`
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
    }

    const setheadercolor = (e) => {
        if(e.target.name === "setcolor"){
            setColor(e.target.value.slice(1));
        }else if(e.target.name === "setcolorgradient1"){
            // eslint-disable-next-line no-const-assign
            setGradient1(e.target.value.slice(1));
        }else if(e.target.name === "setcolorgradient2"){
            // eslint-disable-next-line no-const-assign
            setGradient2(e.target.value.slice(1));
            setColor(`0:${gradient1},100:${gradient2}`);
        }else{
            setColor(e.target.name);
        }        
    }

    const setheaderheight = (e) => {
        if(e.target.name === "small"){
            setHeight(120);
        }else if(e.target.name === "medium"){
            setHeight(180);
        }else{
            setHeight(240);
        }
    }

    const setheadertext = (e) => {
        const a = e.target.value.replaceAll(" ", "%20");
        setText(a);
    }

     useEffect(() => {
            ref.current.getInstance().setMarkdown(headerdefault);
            // ref1.current.getInstance().setMarkdown(headerdefault);
            console.log(headerdefault);
        })

    const headercheckfunc = () => {
        if(valuechecked === "headerchecked"){
            return (
                <>
                    <HeaderCheck setheader={setheader}/>
                    <HeaderColor setheadercolor={setheadercolor}/>
                    <HeaderHeight setheaderheight={setheaderheight}/>
                    <HeaderText setheadertext={setheadertext}/>
                </>
            )}
        else{
            return null;
        }

    }

    
    useEffect(() => {
        if(valuechecked === "headerchecked" ){
            ref.current.getInstance().setMarkdown(headerdefault);
            // ref1.current.getInstance().setMarkdown(headerdefault);
        }else{
            ref.current.getInstance().setMarkdown("");
            // ref1.current.getInstance().setMarkdown("");
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
        {/* <Editor ref={ref1} content={valuechecked} previewStyle='vertical' height='100em' autofocus={false}/> */}
        </>
	);
}