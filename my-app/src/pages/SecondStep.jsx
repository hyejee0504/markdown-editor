import {React, useState, useRef, useEffect} from 'react';
import { useLocation } from 'react-router-dom';
import { Viewer } from '@toast-ui/react-editor';
import '../pages/style.css';
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
import Align from '../components/Align';

import downpng from '../asset/icon-down-arrow.png';
import uppng from '../asset/icon-up-arrow.png';

import useCopyClipBoard from '../components/useCopyClipBoard';

const Wrapper = styled.div`
    display: flex;
    width: 100%;
    
`

const PreviewShow = styled.div`
    width: 100%;
    height: 60em;
    padding-left: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const SelectWrapper = styled.div`
    width: 60%;
    border-right: 2px solid black;
    padding-right:15px;
    padding-left: 15px;
    position: relative;
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

const Completebutton = styled.button`
font-family: 'Baloo Paaji', cursive;
    width: 180px;
    height: 80px;
    font-size: 30px;
    border: 0;
    border-radius: 40px;
    background-color: #ffd875;
    color: #000000;
    cursor: pointer;
    /* position: absolute; */
    bottom: 50px;
    right: 100px;
    z-index: 2;
    :hover{
    background-color: #6a9eff;}
    /* display: float; */
    text-align: center;
    margin-top: 30px;
`;

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

    const [allalign, setAllalign] = useState("left");
    const [align, setAlign] = useState("left");
    const [badgealign, setBadgealign] = useState("");
    
    const [headeractive, setHeaderactive] = useState(false);
    const [introactive, setIntroactive] = useState(false);
    const [skillactive, setSkillactive] = useState(false);
    const [contactactive, setContactactive] = useState(false);
    const [statactive, setStatactive] = useState(false);
    const [alignacitve, setAlignacitve] = useState(false);



    const [a, setA] = useState([]);
    const [completetext, setCompletetext] = useState("");
    
    const headerbutton = useRef();
    const introbutton = useRef();
    const skillbutton = useRef();
    const contactbutton = useRef();
    const statbutton = useRef();
    const alignbutton = useRef();


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
    const skilldefault = `<div style="text-align: ${allalign};"><h2> 🛠️ Tech Stacks </h2> <br> <div style="width: 600px; text-align: ${align}; margin: ${badgealign};"> ${badge}</div></div>
    `
    const contactdefault = `<div style="text-align: ${allalign};"><h2> 🧑‍💻 Contact me </h2> <br> <div style="text-align: ${align};"> ${contactbadge} </div>  <br> <div style="text-align: ${align};"> ${hitbadge} </div> </div>
    `
    const introductiondefault = `<div style="text-align: ${allalign};"> <h2> ${introductionheader} </h2>  <div style="font-weight: 700; font-size: 15px; text-align: ${align};"> 
    ${introduction} </div> </div>
    `
    const statdefault = `<div style="text-align: ${allalign};"> <h2> 🏅 Stats </h2> <div style="text-align: ${align};"> ${stats} ${mostlanguage} </div> </div>
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
        if(statactive === false){
            setStatactive(true);
            statbutton.current.src = uppng;
        }else{
            setStatactive(false);
            statbutton.current.src = downpng;
        }
    }

    const aligndesignactive  = () => {
        if(alignacitve === false){
            setAlignacitve(true);
            alignbutton.current.src = uppng;
        }else{
            setAlignacitve(false);
            alignbutton.current.src = downpng;
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
        setCompletetext(b);
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

    //align 함수
    const setallalign = (a) => {
        setAllalign(a)
    }

    const setalign = (a) => {
        setAlign(a)
    }

    const setbadgealign = (a) => {
        setBadgealign(a)
    }

    const [isCopy, onCopy] = useCopyClipBoard();

  const handleCopyClipBoard = (text) => {
    onCopy(text);
  };

    
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
                            {statactive&&
                            <HeadertypeWrapper>
                            <Stat setgithubstats={setgithubstats} setmostusedlanguage={setmostusedlanguage} username={username}/>
                            </HeadertypeWrapper>
                            }
                        </>      
                   }
                   <>
                            <Topheader onClick={aligndesignactive} >💡  Align Design <Downimg ref={alignbutton} src={downpng} alt='아래버튼'/> </Topheader> 
                            {alignacitve&&
                            <HeadertypeWrapper>
                            <Align setallalign={setallalign} setalign={setalign} setbadgealign={setbadgealign}/>
                            </HeadertypeWrapper>
                            }
                        </>  
                        
                </SelectWrapper >
                {/* 미리보기 */}
                <PreviewShow>
                    <div>
                        <h2>미리보기</h2>
                        
                             <Viewer ref={ref}/> 
                             <Viewer ref={ref1}/> 
                             <Viewer ref={ref2}/> 
                             <Viewer ref={ref3}/> 
                             <Viewer ref={ref4}/> 
                    </div>
                    
                         <Completebutton onClick={() => handleCopyClipBoard(completetext)}>Copy code!</Completebutton>
                </PreviewShow>
                {/* <Editor ref={ref6} initialValue={valuechecked}/> */}
                
            </Wrapper>
           
        
  )
}
