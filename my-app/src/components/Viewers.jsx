/* eslint-disable no-unused-vars */
// import HeaderCheck from './HeaderCheck';
import { useState, useRef, useEffect } from 'react';
import { Viewer } from '@toast-ui/react-editor';
import '@toast-ui/editor/dist/toastui-editor.css';
import { Editor } from '@toast-ui/react-editor';
import styled from "styled-components";
import HeaderCheck from './HeaderType';
import HeaderColor from "./HeaderColor";
import HeaderHeight from './HeaderHeight';
import HeaderText from './HeaderText';
import HeaderTextAni from './HeaderTextAni';
import HeaderTextColor from './HeaderTextColor';
import HeaderTextSize from './HeaderTextSize';
import HeaderTextAlign from './HeaderTextAlign';
import BadgeSelect from './BadgeSelect';

const Wrapper = styled.div`
    display: flex;
`
const PreviewShow = styled.div`
    width: 70%;
    height: 70em;
`

const SelectWrapper = styled.div`
    width: 40%;
`


export default function Viewers(){
    const [value, setValue] = useState({header: "", skill: ""});
    const [valuechecked, setValuechecked] = useState("headernochecked");
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

    const [badge, setBadge] = useState("");
    const [gradient2, setGradient2] = useState("");
    // const [html, setHtml] = useState("");
    // const [css3, setCss3] = useState("");
    // const [javascript, setJavascript] = useState("");
    // const [react, setReact] = useState("");
    // const [typescript, setTypescript] = useState("");
    // const [cprogramming, setCprogramming] = useState("");
    // const [cplus, setCplus] = useState("");
    // const [java, setJava] = useState("");
    // const [python, setPython] = useState("");
    // const [kotlin, setKotlin] = useState("");
    // const [gradient2, setGradient2] = useState("");
    // const [gradient2, setGradient2] = useState("");
    // const [gradient2, setGradient2] = useState("");
    // const [gradient2, setGradient2] = useState("");
    // const [gradient2, setGradient2] = useState("");
    // const [gradient2, setGradient2] = useState("");


    const [skillchecked, setSkillchecked] = useState("");

    const [a, setA] = useState([])
    
    const ref = useRef();
    const ref1 = useRef();
    
    const headerdefault = `![header](https://capsule-render.vercel.app/api?type=${headertyped}&color=${color}&height=${height}&text=${text}&animation=${textanimation}&fontColor=${fontcolor}&fontSize=${fontsize}&fontAlign=${fontalign}&fontAlignY=${fontaligny})`
    const skilldefault = `<h2> Teck Stacks </h2> <br> <div> ${badge}</div>`
    const all = `${headerdefault}  ${skilldefault}`;
 
    const headerchecked = (e) => {
        if(e.target.checked){
            setValuechecked("headerchecked");
            setValue(prev => ({...prev, header: headerdefault,})) 
        }
        else{
            setValuechecked(`headernochecked`);   
            setValue(prev => ({...prev, header: "",})) 
        }
    }

    const checkskill = (e) => {
        if(e.target.checked){
            setSkillchecked("skillchecknow");
            setValue(prev => ({...prev, skill: skilldefault,})) 
            } 
        else{
            
            setSkillchecked(`skillnochecked`);   
            setValue(prev => ({...prev, skill: "",}))  
        }
    }

    useEffect(() => {
        if(valuechecked === "headerchecked" && skillchecked === "skillchecked"){
            setValue(prev => ({...prev, header: headerdefault, skill: skilldefault,}))
        }
        else if(valuechecked === "headerchecked" ){
            setValue(prev => ({...prev, header: headerdefault, skill: "",})) }
        else if(skillchecked === "skillchecked"){
            setValue(prev => ({...prev, header: "", skill: skilldefault,}))
        }
    }, [headerdefault, skillchecked, skilldefault, valuechecked])

    useEffect(() => {
        let copy = [...a];
        copy[0] = value.header;
        copy[1] = value.skill;
        console.log(copy);
        setA(copy);
}, [value.header, value.skill])



    useEffect(() => {
        ref.current.getInstance().setMarkdown("");
        console.log(a);
        let b = "";
        for (var i in a){
            b += a[i];
        }
        ref.current.getInstance().setMarkdown(b);
        ref1.current.getInstance().setMarkdown(b);

        }
    , [a])




    //헤더 관련 함수

    const setheadertype = (e) => {
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

    const setheadertextanimation = (e) => {
        setTextanimation(e.target.name);
    }

    const setheadertextcolor = (e) => {
        if(e.target.name === "allcolor"){
            setFontcolor(e.target.value.slice(1));
        }else{
            setFontcolor(e.target.name);
        }
    }

    const setheadertextsize = (e) => {
        setFontsize(e.target.name);
    }

    const setheadertextalign = (e) => {
        setFontalign(e.target.name);
    }
    
    //기술스택 함수모음

    const setAllBadge = () => {

    }

     


    const headercheckfunc = () => {
        if(valuechecked === "headerchecked"){
            return (
                <>
                    <HeaderCheck setheadertype={setheadertype}/>
                    <HeaderColor setheadercolor={setheadercolor}/>
                    <HeaderHeight setheaderheight={setheaderheight}/>
                    <HeaderText setheadertext={setheadertext}/>
                    <HeaderTextAni setheadertextanimation={setheadertextanimation}/>
                    <HeaderTextColor setheadertextcolor={setheadertextcolor}/>
                    <HeaderTextSize setheadertextsize={setheadertextsize}/>
                    <HeaderTextAlign setheadertextalign={setheadertextalign}/>
                </>
            )}
        else{
            return null;
        }
    }

    const skillcheckfunc = () => {
        if(skillchecked === "skillchecknow"){
            return(
                <>
                    <BadgeSelect setAllBadge={setAllBadge}/>
                    
                </>

            )
        }
    }

    

	return (
        <>  
            <Wrapper>
                {/* 선택지 */}
                <SelectWrapper>
                    <form>
                    <input type="checkbox" onClick={headerchecked}/>Header
                    {headercheckfunc()}
                    <input type="checkbox" onClick={checkskill}/>Skill Stack
                    {skillcheckfunc()}
                    </form>
                </SelectWrapper >
                {/* 미리보기 */}
                <PreviewShow>
                    <h2>미리보기</h2>
                    {valuechecked !== "headernochecked" || skillchecked !== "skillnochecked" ?
                         <Viewer ref={ref} initialValue={valuechecked}/>  : null
                    }
                </PreviewShow>
            </Wrapper>
        <Editor ref={ref1} content={valuechecked} previewStyle='vertical' height='100em' autofocus={false}/>
        </>
	);
}