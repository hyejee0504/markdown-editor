import {React, useState, useRef, useEffect} from 'react';
import { useLocation } from 'react-router-dom';
import { Editor, Viewer } from '@toast-ui/react-editor';
import styled from "styled-components";
import HeaderCheck from '../components/HeaderType';
import HeaderColor from "../components/HeaderColor";
import HeaderHeight from '../components/HeaderHeight';
import HeaderText from '../components/HeaderText';
import HeaderTextAni from '../components/HeaderTextAni';
import HeaderTextColor from '../components/HeaderTextColor';
import HeaderTextSize from '../components/HeaderTextSize';
import HeaderTextAlign from '../components/HeaderTextAlign';
import BadgeSelect from '../components/BadgeSelect';
import ContactBadgeSelect from '../components/ContactBadgeSelect'
import Introduction from '../components/Introduction';

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

export default function SecondStep() {

    const [value, setValue] = useState({header: "", introduction: "", skill: "", contact: "", introduce: ""});


    const [valuechecked, setValuechecked] = useState("headernochecked");
    const [headertyped, setHeadertyped] = useState("wave");
    const [color, setColor] = useState("#b897ff");
    const [height, setHeight] = useState(120);
    const [text, setText] = useState("");
    const [textanimation, setTextanimation] = useState("");
    const [fontcolor, setFontcolor] = useState("000000");
    const [fontsize, setFontsize] = useState(70);
    const [fontalign, setFontalign] = useState(50);
    const [gradient1, setGradient1] = useState("");
    const [gradient2, setGradient2] = useState("");

    const [badge, setBadge] = useState("");
    const [badgestyle, setBadgestyle] = useState("");

    const [contactbadge, setContactBadge] = useState("");

    const [introductionheader, setIntroductionheader] = useState("");
    const [introduction, setIntroduction] = useState("");
    
    



    const [a, setA] = useState([])
    
    const ref = useRef();
    const ref1 = useRef();
    const ref2= useRef();
    const ref3= useRef();

    const ref6= useRef();



    const location = useLocation();

    const username = location.state.username;
    const headerchecked = location.state.headerchecked;
    const introductionchecked = location.state.introductionchecked;
    const skillstackschecked = location.state.skillstackschecked;
    const contactchecked = location.state.contactchecked;
    const statschecked = location.state.statschecked;

    const headerdefault = `![header](https://capsule-render.vercel.app/api?type=${headertyped}&color=${color}&height=${height}&text=${text}&animation=${textanimation}&fontColor=${fontcolor}&fontSize=${fontsize}&fontAlign=${fontalign})
    `
    const skilldefault = `<h2> 🛠️ Tech Stacks </h2> <br> <div> ${badge}</div>
    `
    const contactdefault = `<h2> 🧑‍💻 Contact me </h2> <br> <div> ${contactbadge} </div>
    `
    const introductiondefault = `<h2> ${introductionheader} </h2> <br> <div> 
    ${introduction} </div>
    `


    useEffect(() => {
        if(headerchecked){
            ref.current.getInstance().setMarkdown("");
            setValue(prev => ({...prev, header: headerdefault}))
        }else{
            setValue(prev => ({...prev, header: ""}))
        }
    }, [headerdefault])

    useEffect(() => {
        if(skillstackschecked){
            ref.current.getInstance().setMarkdown("");
            setValue(prev => ({...prev,skill: skilldefault}))
        }else{
            setValue(prev => ({...prev, skill: ""}))
        }
    }, [skilldefault])

    useEffect(() => {
        if(contactchecked){
            ref.current.getInstance().setMarkdown("");
            setValue(prev => ({...prev, contact: contactdefault}))
        }else{
            setValue(prev => ({...prev, contact: ""}))
        }
    }, [contactdefault])

    useEffect(() => {
        if(introductionchecked){
            ref.current.getInstance().setMarkdown("");
            setValue(prev => ({...prev, introduce: introductiondefault}))
        }else{
            setValue(prev => ({...prev, contactintroduce: ""}))
        }
    }, [introductiondefault])



    useEffect(() => {
        let copy = [...a];
        copy[0] = value.header;
        copy[1] = value.skill;
        copy[2] = value.contact;
        copy[3] = value.introduce;
        setA(copy);
}, [value.header, value.skill, value.contact, value.introduce])

    useEffect(() => {
        ref.current.getInstance().setMarkdown("");
        let b = "";
        for (var i in a){
            b += a[i];
        }
        ref.current.getInstance().setMarkdown("");
        ref.current.getInstance().setMarkdown(a[0]);
        ref1.current.getInstance().setMarkdown(a[1]);
        ref2.current.getInstance().setMarkdown(a[2]);
        ref3.current.getInstance().setMarkdown(a[3]);
        // ref6.current.getInstance().setMarkdown(b);
        }
    , [a])


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
    
    //기술스택 함수

    const setAllBadge = (a) => {
        setBadge(a);
    }

    //contact하는 부분 함수

    const setContactAllBadge = (b) => {
        setContactBadge(b);
    }

    //자기소개하는 함수
    const setMyintroheader = (c) => {
        setIntroductionheader(c);
    }

    const setMyintro = (c) => {
        setIntroduction(c);
    }
    
  return (
    <Wrapper>
                {/* 선택지 */}
                <SelectWrapper>
                   {headerchecked&&
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
                   }
                   {skillstackschecked&&
                        <BadgeSelect setAllBadge={setAllBadge} setBadgestyle={setBadgestyle}/>
                   }
                   {contactchecked&&
                        <ContactBadgeSelect setContactAllBadge={setContactAllBadge} badgestyle={badgestyle}/>
                   }
                   {introductionchecked&&
                        <Introduction setMyintroheader={setMyintroheader} setMyintro={setMyintro}/>
                   }
                </SelectWrapper >
                {/* 미리보기 */}
                <PreviewShow>
                    <h2>미리보기</h2>
                    
                         <Viewer ref={ref}/> 
                         <Viewer ref={ref1}/> 
                         <Viewer ref={ref2}/> 
                         <Viewer ref={ref3}/> 
                    
                   
                </PreviewShow>
                {/* <Editor ref={ref6} initialValue={valuechecked}/> */}

            </Wrapper>
        
  )
}
