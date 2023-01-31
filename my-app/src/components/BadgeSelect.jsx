import '@toast-ui/editor/dist/toastui-editor-viewer.css';
import { useRef, useState, useEffect } from 'react';

export default function HeaderColor(props) {
  const colorArr = {"Amazon S3" : "569A31", 
  "Android": "3DDC84",
"AngularJS": "E23237",
"Apache Tomcat": "F8DC75",
"Apollo GraphQL": "311C87",
"Amazon AWS": "232F3E",
"Babel": "F9DC3E",
"Bitrise": "683D87",
"Bootstrap": "7952B3",
"C": "A8B9CC",
"C%2B%2B": "00599C",
"CSS3": "1572B6",
"Django": "092E20",
"Discord": "5865F2",
"Docker": "2496ED",
"Elasticsearch": "005571",
"Eslint" : "4B32C3",
"Expo": "000020",
"Express" : "000000",
"Figma" : "F24E1E",
"Firebase": "FFCA28",
"Flask" : "000000",
"Flutter": "02569B",
"Gatsby" : "663399",
"GitHub Pages": "222222", 
"Git": "F05032",
"Github" : "181717",
"Go" : "00ADD8",
"GraphQL" : "E10098", 
"Gulp" :"CF4647",
"HTML5": "E34F26",
"Heroku": "430098",
"Hyperledger": "2F3134",
"IOS" : "000000",
"jQuery" : "0769AD",
"Java" : "007396",
"Javascript": "F7DF1E", 
"Jenkins": "D24939",
"Keras": "D00000",
"Linux" : "FCC624",
"MariaDB" : "003545",
"MongoDB" : "47A248",
"MySQL":"4479A1",
"Netlify" : "00C7B7",
"Next.js" : "000000",
"Node.js":"339933",
"Notion" : "000000",
"Oracle" : "F80000",
"Prettier": "F7B93E",
"Prisma" :"2D3748",
"Pug": "A86454", 
"Python": "3776AB",
"PyTorch" : "EE4C2C",
"React" : "61DAFB",
"ReactNative" : "61DAFB",
"ReactiveX": "B7178C",
"Redux" : "764ABC",
"ReduxSaga": "999999",
"Sass" : "CC6699",
"Selenium" : "43B02A",
"Slack":"4A154B",
"Spring" : "6DB33F",
"Spring Boot" : "6DB33F",
"StyledComponents": "DB7093",
"Swift" : "F05138",
"Tailwind CSS": "06B6D4",
"Tensorflow": "FF6F00",
"Trello" : "0052CC",
"Vercel" : "000000",
"Vue.js" : "4FC08D",
"Zeplin": "fdbd39",
"Matlab": "0076a8"



  }
  const [badgeArr, setBadgeArr] = useState([]);
  const [style, setStyle] = useState("for-the-badge");
  const inputref = useRef();
  const inputref1 = useRef();
  const cancelcheck = (e) => {
    if(e.target.checked){
      setBadgeArr(badgeArr => [...badgeArr, e.target.name]);
    }else{
      setBadgeArr(badgeArr => badgeArr.filter(value => value !== e.target.name));
    }
  }

  const stylecheck = (e) => {
    for(var i = 0; i < 10; i+=2){
      inputref1.current.childNodes[i].checked = false;
    }
    e.target.checked = true;
    if(e.target.checked){
      setStyle(e.target.name);
      props.setBadgestyle(e.target.name);
    }
  }
  
  const resetCheck = () => {
    for(var i = 0; i < 140; i+=2){
      inputref.current.childNodes[i].checked = false;
    }
    setBadgeArr([])
  }

  useEffect(() => {
    let badgeText = ""
    for(var i in badgeArr){
      if(badgeArr[i] === "ReactNative"){
        badgeText += `<img src="https://img.shields.io/badge/ReactNative-61DAFB?style=${style}&logo=React&logoColor=white">  `
      }else{
        badgeText += `<img src="https://img.shields.io/badge/${badgeArr[i]}-${colorArr[badgeArr[i]]}?style=${style}&logo=${badgeArr[i]}&logoColor=white">  `
      }
    }
    props.setAllBadge(badgeText);
  }, [badgeArr, style])

  return (
    <>
                    <h3>본인이 보유한 기술 스택을 모두 선택해주세요.</h3>
                    <div ref={inputref}>
                      <input type="checkbox" name="Amazon S3"  onClick={(e) => {cancelcheck(e)}}/>Amazon S3
                      <input type="checkbox"  name="Android" onClick={(e) => {cancelcheck(e)}}/>Android
                      <input type="checkbox"  name="AngularJS" onClick={(e) => {cancelcheck(e)}}/>Angular.js
                      <input type="checkbox" name="Apache Tomcat" onClick={(e) => {cancelcheck(e)}}/>Apache Tomcat
                      <input type="checkbox" color="" name="Apollo GraphQL" onClick={(e) => {cancelcheck(e)}}/>Apollo GraphQL
                      <input type="checkbox" color="" name="Amazon AWS" onClick={(e) => {cancelcheck(e)}}/>Amazon AWS
                      <input type="checkbox" color="" name="Babel" onClick={(e) => {cancelcheck(e)}}/>Babel
                      <input type="checkbox" color="" name="Bitrise" onClick={(e) => {cancelcheck(e)}}/>Bitrise
                      <input type="checkbox" color="" name="Bootstrap" onClick={(e) => {cancelcheck(e)}}/>Bootstrap
                      <input type="checkbox" color="" name="C" onClick={(e) => {cancelcheck(e)}}/>C
                      <input type="checkbox" color="" name="C%2B%2B" onClick={(e) => {cancelcheck(e)}}/>C++
                      <input type="checkbox" color="" name="CSS3" onClick={(e) => {cancelcheck(e)}}/>CSS3
                      <input type="checkbox" color="" name="Apache Cordova" onClick={(e) => {cancelcheck(e)}}/>Apache Cordova
                      <input type="checkbox" color=""  name="Django" onClick={(e) => {cancelcheck(e)}}/>Django
                      <input type="checkbox" color=""  name="Discord" onClick={(e) => {cancelcheck(e)}}/>Discord
                      <input type="checkbox" color="" name="Docker" onClick={(e) => {cancelcheck(e)}}/>Docker
                      <input type="checkbox" color="" name="Elasticsearch" onClick={(e) => {cancelcheck(e)}}/>Elasticsearch
                      <input type="checkbox" color="" name="Eslint" onClick={(e) => {cancelcheck(e)}}/>Eslint
                      <input type="checkbox" color="" name="Expo" onClick={(e) => {cancelcheck(e)}}/>Expo
                      <input type="checkbox" color="" name="Express" onClick={(e) => {cancelcheck(e)}}/>Express
                      <input type="checkbox" color="" name="Figma" onClick={(e) => {cancelcheck(e)}}/>Figma
                      <input type="checkbox" color="" name="Firebase" onClick={(e) => {cancelcheck(e)}}/>Firebase
                      <input type="checkbox" color="" name="Flask" onClick={(e) => {cancelcheck(e)}}/>Flask
                      <input type="checkbox" color="" name="Flutter" onClick={(e) => {cancelcheck(e)}}/>Flutter
                      <input type="checkbox" color=""  name="Gatsby" onClick={(e) => {cancelcheck(e)}}/>Gatsby
                      <input type="checkbox" color=""  name="GitHub Pages" onClick={(e) => {cancelcheck(e)}}/>GitHub Pages
                      <input type="checkbox" color="" name="Git" onClick={(e) => {cancelcheck(e)}}/>Git
                      <input type="checkbox" color="" name="Github" onClick={(e) => {cancelcheck(e)}}/>Github
                      <input type="checkbox" color="" name="Go" onClick={(e) => {cancelcheck(e)}}/>Go
                      <input type="checkbox" color="" name="GraphQL" onClick={(e) => {cancelcheck(e)}}/>GraphQL
                      <input type="checkbox" color="" name="Gulp" onClick={(e) => {cancelcheck(e)}}/>Gulp
                      <input type="checkbox" color="" name="HTML5" onClick={(e) => {cancelcheck(e)}}/>HTML5
                      <input type="checkbox" color="" name="Heroku" onClick={(e) => {cancelcheck(e)}}/>Heroku
                      <input type="checkbox" color=""  name="Hyperledger" onClick={(e) => {cancelcheck(e)}}/>Hyperledger
                      <input type="checkbox" color="" name="IOS" onClick={(e) => {cancelcheck(e)}}/>IOS
                      <input type="checkbox" color="" name="jQuery" onClick={(e) => {cancelcheck(e)}}/>jQuery
                      <input type="checkbox" color="" name="Java" onClick={(e) => {cancelcheck(e)}}/>Java
                      <input type="checkbox" color="" name="Javascript" onClick={(e) => {cancelcheck(e)}}/>Javascript
                      <input type="checkbox" color="" name="Jenkins" onClick={(e) => {cancelcheck(e)}}/>Jenkins
                      <input type="checkbox" color="" name="Keras" onClick={(e) => {cancelcheck(e)}}/>Keras
                      <input type="checkbox" color="" name="Linux" onClick={(e) => {cancelcheck(e)}}/>Linux
                      <input type="checkbox" color="" name="MariaDB" onClick={(e) => {cancelcheck(e)}}/>MariaDB
                      <input type="checkbox" color="0076a8" name="Matlab" onClick={(e) => {cancelcheck(e)}}/>Matlab
                      <input type="checkbox" color="" name="MongoDB" onClick={(e) => {cancelcheck(e)}}/>MongoDB
                      <input type="checkbox" color="" name="MySQL" onClick={(e) => {cancelcheck(e)}}/>MySQL
                      <input type="checkbox" color="" name="Netlify" onClick={(e) => {cancelcheck(e)}}/>Netlify
                      <input type="checkbox" color="" name="Next.js" onClick={(e) => {cancelcheck(e)}}/>Next.js
                      <input type="checkbox" color="" name="Node.js" onClick={(e) => {cancelcheck(e)}}/>Node.js
                      <input type="checkbox" color="" name="Notion" onClick={(e) => {cancelcheck(e)}}/>Notion
                      <input type="checkbox" color="" name="Oracle" onClick={(e) => {cancelcheck(e)}}/>Oracle
                      <input type="checkbox" color=""  name="Prettier" onClick={(e) => {cancelcheck(e)}}/>Prettier
                      <input type="checkbox" color="" name="Prisma" onClick={(e) => {cancelcheck(e)}}/>Prisma
                      <input type="checkbox" color="" name="Pug" onClick={(e) => {cancelcheck(e)}}/>Pug
                      <input type="checkbox" color="" name="Python" onClick={(e) => {cancelcheck(e)}}/>Python

                      <input type="checkbox" color="" name="PyTorch" onClick={(e) => {cancelcheck(e)}}/>PyTorch
                      <input type="checkbox" color="" name="React" onClick={(e) => {cancelcheck(e)}}/>React
                      <input type="checkbox" color="" name="ReactNative" onClick={(e) => {cancelcheck(e)}}/>ReactNative
                      <input type="checkbox" color="" name="ReactiveX" onClick={(e) => {cancelcheck(e)}}/>ReactiveX
                      <input type="checkbox" color="" name="Redux" onClick={(e) => {cancelcheck(e)}}/>Redux
                      <input type="checkbox" color="" name="ReduxSaga" onClick={(e) => {cancelcheck(e)}}/>ReduxSaga
                      <input type="checkbox" color="" name="Sass" onClick={(e) => {cancelcheck(e)}}/>Sass
                      <input type="checkbox" color="" name="Selenium" onClick={(e) => {cancelcheck(e)}}/>Selenium
                      <input type="checkbox" color="" name="Slack" onClick={(e) => {cancelcheck(e)}}/>Slack
                      <input type="checkbox" color="" name="Spring" onClick={(e) => {cancelcheck(e)}}/>Spring
                      <input type="checkbox" color=""  name="Spring Boot" onClick={(e) => {cancelcheck(e)}}/>Spring Boot
                      <input type="checkbox" color="" name="StyledComponents" onClick={(e) => {cancelcheck(e)}}/>StyledComponents
                      <input type="checkbox" color="" name="Swift" onClick={(e) => {cancelcheck(e)}}/>Swift
                      <input type="checkbox" color="" name="Tailwind CSS" onClick={(e) => {cancelcheck(e)}}/>Tailwind CSS

                      <input type="checkbox" color="" name="Tensorflow" onClick={(e) => {cancelcheck(e)}}/>Tensorflow
                      <input type="checkbox" color="" name="Trello" onClick={(e) => {cancelcheck(e)}}/>Trello
                      <input type="checkbox" color="" name="Vercel" onClick={(e) => {cancelcheck(e)}}/>Vercel
                      <input type="checkbox" color="" name="Vue.js" onClick={(e) => {cancelcheck(e)}}/>Vue.js
                      <input type="checkbox" color="" name="Zeplin" onClick={(e) => {cancelcheck(e)}}/>Zeplin
                   
                      <button onClick={resetCheck}>초기화</button>

                      <h3>기술 스택 뱃지의 스타일을 선택해주세요.</h3>
                      <div ref={inputref1}>
                      <input type="checkbox" color="" name="plastic" onClick={stylecheck}/>Plastic
                      <input type="checkbox" color="" name="flat" onClick={stylecheck}/>Flat
                      <input type="checkbox" color="" name="flat-square" onClick={stylecheck}/>Flat-square
                      <input type="checkbox" color="" name="for-the-badge" onClick={stylecheck}/>For-the-badge
                      <input type="checkbox" color="" name="social" onClick={stylecheck}/>Social
                      </div>
                    </div >
                </>
  )
}
