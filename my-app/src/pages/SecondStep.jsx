import {React, useState, useRef, useEffect} from 'react';
import { useLocation } from 'react-router-dom';
import { Viewer } from '@toast-ui/react-editor';
import styled from "styled-components";
import HeaderCheck from '../components/HeaderType';
import HeaderColor from "../components/HeaderColor";
import HeaderHeight from '../components/HeaderHeight';
import HeaderText from '../components/HeaderText';
import HeaderTextAni from '../components/HeaderTextAni';
import HeaderTextColor from '../components/HeaderTextColor';
import HeaderTextSize from '../components/HeaderTextSize';
import BadgeSelect from '../components/BadgeSelect';
import ContactBadgeSelect from '../components/ContactBadgeSelect'
import Introduction from '../components/Introduction';
import Stat from '../components/Stat';

import downpng from '../asset/icon-down-arrow.png';
import uppng from '../asset/icon-up-arrow.png';

const Wrapper = styled.div`
    display: flex;
    width: 100%;
`

const PreviewShow = styled.div`
    width: 100%;
    height: 60em;
    padding-left: 30px;
`

const SelectWrapper = styled.div`
    width: 60%;
    border-right: 2px solid black;
    padding-right:15px;
    padding-left: 15px;
`

const Topheader = styled.h2`
    position: relative;
    cursor: pointer;
`
const Downimg = styled.img`
    width: 25px;
    padding-top: 15px;
    position: absolute;
    top: -10px;
    right: 40px;
`

const HeadertypeWrapper = styled.div`
    margin-left: 20px;
`

export default function SecondStep() {

    const [value, setValue] = useState({header: "", skill: "", contact: "", introduce: "", stat: ""});
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

    const [hitbadge, setHitBadge] = useState("");
    const [contactbadge, setContactBadge] = useState("");

    const [introductionheader, setIntroductionheader] = useState("");
    const [introduction, setIntroduction] = useState("");

    const [stats, setStats] = useState("");
    const [mostlanguage, setMostlanguage] = useState("");
    
    const [headeractive, setHeaderactive] = useState(false);
    const [introactive, setIntroactive] = useState(false);
    const [skillactive, setSkillactive] = useState(false);
    const [contactactive, setContactactive] = useState(false);
    const [statacitve, setStatacitve] = useState(false);



    const [a, setA] = useState([])
    
    const headerbutton = useRef();
    const introbutton = useRef();
    const skillbutton = useRef();
    const contactbutton = useRef();
    const statbutton = useRef();


    const ref = useRef();
    const ref1 = useRef();
    const ref2= useRef();
    const ref3= useRef();
    const ref4= useRef();




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
    const contactdefault = `<h2> 🧑‍💻 Contact me </h2> <br> <div> ${contactbadge} </div>  <br> ${hitbadge}
    `
    const introductiondefault = `<h2> ${introductionheader} </h2>  <div style="font-weight: 700; font-size: 15px"> 
    ${introduction} </div>
    `
    const statdefault = `<h2> 🏅 Stats </h2> <div> ${stats} ${mostlanguage} </div>
    `

    const headerdesignactive  = () => {
        if(headeractive === false){
            setHeaderactive(true);
            headerbutton.current.src = uppng;
        }else{
            setHeaderactive(false);
            headerbutton.current.src = downpng;
        }
    }

    const skilldesignactive  = () => {
        if(skillactive === false){
            setSkillactive(true);
            skillbutton.current.src = uppng;
        }else{
            setSkillactive(false);
            skillbutton.current.src = downpng;
        }
    }

    const contactdesignactive  = () => {
        if(contactactive === false){
            setContactactive(true);
           contactbutton.current.src = uppng;
        }else{
            setContactactive(false);
            contactbutton.current.src = downpng;
        }
    }

    const introducedesignactive  = () => {
        if(introactive === false){
            setIntroactive(true);
            introbutton.current.src = uppng;
        }else{
            setIntroactive(false);
            introbutton.current.src = downpng;
        }
    }

    const statdesignactive  = () => {
        if(statacitve === false){
            setStatacitve(true);
            statbutton.current.src = uppng;
        }else{
            setStatacitve(false);
            statbutton.current.src = downpng;
        }
    }


    useEffect(() => {
        if(headerchecked){
            ref.current.getInstance().setMarkdown("");
            setValue(prev => ({...prev, header: headerdefault}))
        }else{
            setValue(prev => ({...prev, header: ""}))
        }
    }, [headerdefault, headeractive])

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
            setValue(prev => ({...prev, introduce: ""}))
        }
    }, [introductiondefault])

    useEffect(() => {
        if(statschecked){
            ref.current.getInstance().setMarkdown("");
            setValue(prev => ({...prev, stat: statdefault}))
        }else{
            setValue(prev => ({...prev, stat: ""}))
        }
    }, [statdefault]);



    useEffect(() => {
        let copy = [...a];
        copy[0] = value.header;
        copy[1] = value.introduce;
        copy[2] = value.skill;
        copy[3] = value.contact; 
        copy[4] = value.stat;
        setA(copy);
}, [value.header, value.skill, value.contact, value.introduce, value.stat])

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
        ref4.current.getInstance().setMarkdown(a[4]);
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

    const setGithubhitbadge = (b) => {
        setHitBadge(b);
    }

    //자기소개하는 함수
    const setMyintroheader = (c) => {
        setIntroductionheader(c);
    }

    const setMyintro = (c) => {
        setIntroduction(c);
    }

    //Stat, most used language 함수
    const setgithubstats = (c) => {
        setStats(c);
    }

    const setmostusedlanguage = (c) => {
        setMostlanguage(c);
    }

    
  return (
    <Wrapper>
                {/* 선택지 */}
                <SelectWrapper>
                   {headerchecked&&
                        <>  
                            <Topheader onClick={headerdesignactive}>🎈  Header Design <Downimg ref={headerbutton} src={downpng} alt='아래버튼'/> </Topheader> 
                            {headeractive&&
                                <HeadertypeWrapper>
                                <HeaderCheck setheadertype={setheadertype}/>
                                <HeaderColor setheadercolor={setheadercolor}/>
                                <HeaderHeight setheaderheight={setheaderheight}/>
                                <HeaderText setheadertext={setheadertext}/>
                                <HeaderTextAni setheadertextanimation={setheadertextanimation}/>
                                <HeaderTextColor setheadertextcolor={setheadertextcolor}/>
                                <HeaderTextSize setheadertextsize={setheadertextsize}/>
                                {/* <HeaderTextAlign setheadertextalign={setheadertextalign}/> */}
                            </HeadertypeWrapper>}
                        </>
                   }
                   {introductionchecked&&
                        <>
                            <Topheader onClick={introducedesignactive}>🙌  Introduction Design <Downimg ref={introbutton} src={downpng} alt='아래버튼'/> </Topheader> 
                            {introactive&&
                            <HeadertypeWrapper>
                            <Introduction setMyintroheader={setMyintroheader} setMyintro={setMyintro}/>
                            </HeadertypeWrapper>
                            }
                        </>
                   }
                   {skillstackschecked&&
                        <>
                            <Topheader onClick={skilldesignactive}>🛠️ Skill Stack Design <Downimg ref={skillbutton} src={downpng} alt='아래버튼'/> </Topheader> 
                            {skillactive&&
                            <HeadertypeWrapper>
                            <BadgeSelect setAllBadge={setAllBadge} setBadgestyle={setBadgestyle}/>
                            </HeadertypeWrapper>
                            }
                        </>
                        
                   }
                   {contactchecked&&
                        <>
                            <Topheader onClick={contactdesignactive}>🧑‍💻  Contact Design <Downimg ref={contactbutton} src={downpng} alt='아래버튼'/> </Topheader> 
                            {contactactive&&
                            <HeadertypeWrapper>
                            <ContactBadgeSelect setContactAllBadge={setContactAllBadge} badgestyle={badgestyle} setGithubhitbadge={setGithubhitbadge} username={username} />
                            </HeadertypeWrapper>
                            }
                        </> 
                   }
                   {statschecked&&
                        <>
                            <Topheader onClick={statdesignactive} >🏅  Stat Design <Downimg ref={statbutton} src={downpng} alt='아래버튼'/> </Topheader> 
                            {statacitve&&
                            <HeadertypeWrapper>
                            <Stat setgithubstats={setgithubstats} setmostusedlanguage={setmostusedlanguage} username={username}/>
                            </HeadertypeWrapper>
                            }
                        </>      
                   }
                </SelectWrapper >
                {/* 미리보기 */}
                <PreviewShow>
                    <h2>미리보기</h2>
                    
                         <Viewer ref={ref}/> 
                         <Viewer ref={ref1}/> 
                         <Viewer ref={ref2}/> 
                         <Viewer ref={ref3}/> 
                         <Viewer ref={ref4}/> 
                    
                   
                </PreviewShow>
                {/* <Editor ref={ref6} initialValue={valuechecked}/> */}

            </Wrapper>
        
  )
}
