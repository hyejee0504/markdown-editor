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
    const [value, setValue] = useState({header: "", skill: "", contact: ""});
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
 


    const [skillchecked, setSkillchecked] = useState("skillnochecked");
    const [contactchecked, setContactchecked] = useState("skillnochecked");

    const [a, setA] = useState([])
    
    const ref = useRef();
    const ref1 = useRef();
    
    const headerdefault = `![header](https://capsule-render.vercel.app/api?type=${headertyped}&color=${color}&height=${height}&text=${text}&animation=${textanimation}&fontColor=${fontcolor}&fontSize=${fontsize}&fontAlign=${fontalign}&fontAlignY=${fontaligny})`
    const skilldefault = `<h2> 🛠️ Teck Stacks </h2> <br> <div> ${badge}</div>`
    const contactdefault = `<h2> ☎️ Contact me </h2> <br> <div> <img src="https://img.shields.io/badge/ReactNative-61DAFB?style=for-the-badge&logo=React&logoColor=white"></div>`
 
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

    const checkcontact = (e) => {
        if(e.target.checked){
            setContactchecked("contactchecknow");
            setValue(prev => ({...prev, contact: contactdefault,})) 
            } 
        else{
            setContactchecked(`contactnochecked`);   
            setValue(prev => ({...prev, contact: "",}))  
        }
    }

    useEffect(() => {
        if(valuechecked === "headerchecked" && skillchecked === "skillchecknow" && valuechecked === "contactchecknow"){
            setValue(prev => ({...prev, header: headerdefault, skill: skilldefault, contact: contactdefault,}))
        }
        else if(valuechecked === "headerchecked" && skillchecked === "skillchecknow"){
            setValue(prev => ({...prev, header: headerdefault, skill: skilldefault, contact: "",}))
        }
        else if(skillchecked === "skillchecknow" && valuechecked === "contactchecknow"){
            setValue(prev => ({...prev, header: "", skill: skilldefault, contact: contactdefault,}))
        }
        else if(valuechecked === "headerchecked" && valuechecked === "contactchecknow"){
            setValue(prev => ({...prev, header: headerdefault, skill: "", contact: contactdefault,}))
        }
        else if(valuechecked === "headerchecked" ){
            setValue(prev => ({...prev, header: headerdefault, skill: "", contact: ""})) }
        else if(skillchecked === "skillchecknow"){
            setValue(prev => ({...prev, header: "", skill: skilldefault, contact: ""}))
        }
        else if(valuechecked === "contactchecknow"){
            setValue(prev => ({...prev,header: "", skill: "", contact: contactdefault,}))
        }
    }, [headerdefault, skillchecked, skilldefault, valuechecked, contactchecked])

//     useEffect(() => {
//         if(skillchecked === "skillchecknow"){
//     setValue(prev => ({...prev, skill: skilldefault,}))}
//     else{
//         setValue(prev => ({...prev, skill: "",}))
//     }
// }, [skillchecked, skilldefault])

// useEffect(() => {
//     if(valuechecked === "headerchecked" ){
//     setValue(prev => ({...prev, header: headerdefault,}))}
//     else{
//         setValue(prev => ({...prev, header: "",}))
//     }
// }, [headerdefault, valuechecked])

// useEffect(() => {
//     if(valuechecked === "contactchecknow" ){
//     setValue(prev => ({...prev, contact: contactdefault,}))}
//     else{
//         setValue(prev => ({...prev, contact: "",}))
//     }
// }, [contactchecked, contactdefault, valuechecked])

    // useEffect(() => {
    //     if(valuechecked === "headerchecked" ){
    //         setValue(prev => ({...prev, header: headerdefault,})) }
    //     if(skillchecked === "skillchecknow"){
    //         setValue(prev => ({...prev, skill: skilldefault,}))
    //     }if(contactchecked === "contactchecknow"){
    //         setValue(prev => ({...prev, contact: contactdefault,}))
    //     }
    // }, [skillchecked, valuechecked, contactchecked])

    useEffect(() => {
        let copy = [...a];
        copy[0] = value.header;
        copy[1] = value.skill;
        copy[2] = value.contact;
        console.log(copy[0]);
        console.log(copy[1]);
        console.log(copy[2]);
        setA(copy);
}, [value.header, value.skill, value.contact])

    useEffect(() => {
        ref.current.getInstance().setMarkdown("");
        console.log(a);
        let b = "";
        for (var i in a){
            b += a[i];
        }
        ref.current.getInstance().setMarkdown(b);
        // ref1.current.getInstance().setMarkdown(b);
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

    const setAllBadge = (a) => {
        setBadge(a)
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
                    <input type="checkbox" onClick={checkcontact}/>Contact me
                    {/* {skillcheckfunc()} */}
                    </form>
                </SelectWrapper >
                {/* 미리보기 */}
                <PreviewShow>
                    <h2>미리보기</h2>
                    {valuechecked !== "headernochecked" || skillchecked !== "skillnochecked" || contactchecked !== "contactnochecked"?
                         <Viewer ref={ref}/>  : <Viewer ref={ref} initialValue=""/>
                    }
                    {/* <Viewer ref={ref} initialValue={valuechecked}/> */}

                </PreviewShow>
            </Wrapper>
        {/* <Editor ref={ref1} content={valuechecked} previewStyle='vertical' height='100em' autofocus={false}/> */}
        </>
	);
}