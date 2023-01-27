import '@toast-ui/editor/dist/toastui-editor-viewer.css';
import { useRef, useState } from 'react';

export default function HeaderColor(props) {
  const [badgeArr, setBadgeArr] = useState([]);
  const inputref = useRef();
  const cancelcheck = (e) => {
    // for(var i = 0; i < 146; i+=2){
    //   inputref.current.childNodes[i].checked = false;
    // }
    // e.target.checked = true;
    if(e.target.checked){
      setBadgeArr(badgeArr => [...badgeArr, e.target.name]);
    }else{
      setBadgeArr(badgeArr => badgeArr.filter(value => value !== e.target.name));
    }
    // props.setheadertextsize(e);
  }

  // useEffect(() => {
  //   for(var i in badgeArr){

  //   }
    
  // }, [badgeArr])

  console.log(badgeArr);
  return (
    <>
                    <h3>기술 스택 선택</h3>
                    <div ref={inputref}>
                      <input type="checkbox" name="Amazon S3" onClick={(e) => {cancelcheck(e)}}/>Amazon S3
                      <input type="checkbox"  name="Android" onClick={(e) => {cancelcheck(e)}}/>Android
                      <input type="checkbox"  name="Angular.js" onClick={(e) => {cancelcheck(e)}}/>Angular.js
                      <input type="checkbox"  name="Apache Tomcat" onClick={(e) => {cancelcheck(e)}}/>Apache Tomcat
                      <input type="checkbox" name="Apollo" onClick={(e) => {cancelcheck(e)}}/>Apollo
                      <input type="checkbox" name="AWS" onClick={(e) => {cancelcheck(e)}}/>AWS
                      <input type="checkbox" name="Babel" onClick={(e) => {cancelcheck(e)}}/>Babel
                      <input type="checkbox" name="Bitrise" onClick={(e) => {cancelcheck(e)}}/>Bitrise
                      <input type="checkbox" name="Bitrise" onClick={(e) => {cancelcheck(e)}}/>Bitrise
                      <input type="checkbox" name="Bootstrap" onClick={(e) => {cancelcheck(e)}}/>Bootstrap
                      <input type="checkbox" name="C" onClick={(e) => {cancelcheck(e)}}/>C
                      <input type="checkbox" name="Cplus" onClick={(e) => {cancelcheck(e)}}/>C++
                      <input type="checkbox" name="CSS" onClick={(e) => {cancelcheck(e)}}/>CSS
                      <input type="checkbox" name="Cordova" onClick={(e) => {cancelcheck(e)}}/>Cordova
                      <input type="checkbox"  name="Django" onClick={(e) => {cancelcheck(e)}}/>Django
                      <input type="checkbox"  name="Discord" onClick={(e) => {cancelcheck(e)}}/>Discord
                      <input type="checkbox" name="Docker" onClick={(e) => {cancelcheck(e)}}/>Docker
                      <input type="checkbox" name="Elasticsearch" onClick={(e) => {cancelcheck(e)}}/>Elasticsearch
                      <input type="checkbox" name="Eslint" onClick={(e) => {cancelcheck(e)}}/>Eslint
                      <input type="checkbox" name="Expo" onClick={(e) => {cancelcheck(e)}}/>Expo
                      <input type="checkbox" name="Express" onClick={(e) => {cancelcheck(e)}}/>Express
                      <input type="checkbox" name="Figma" onClick={(e) => {cancelcheck(e)}}/>Figma
                      <input type="checkbox" name="Firebase" onClick={(e) => {cancelcheck(e)}}/>Firebase
                      <input type="checkbox" name="Flask" onClick={(e) => {cancelcheck(e)}}/>Flask
                      <input type="checkbox" name="Flutter" onClick={(e) => {cancelcheck(e)}}/>Flutter
                      <input type="checkbox"  name="Gatsby" onClick={(e) => {cancelcheck(e)}}/>Gatsby
                      <input type="checkbox"  name="Gh Pages" onClick={(e) => {cancelcheck(e)}}/>Gh Pages
                      <input type="checkbox" name="Git" onClick={(e) => {cancelcheck(e)}}/>Git
                      <input type="checkbox" name="Github" onClick={(e) => {cancelcheck(e)}}/>Github
                      <input type="checkbox" name="Go" onClick={(e) => {cancelcheck(e)}}/>Go
                      <input type="checkbox" name="GraphQL" onClick={(e) => {cancelcheck(e)}}/>GraphQL
                      <input type="checkbox" name="Gulp" onClick={(e) => {cancelcheck(e)}}/>Gulp
                      <input type="checkbox" name="HTML" onClick={(e) => {cancelcheck(e)}}/>HTML
                      <input type="checkbox" name="Heroku" onClick={(e) => {cancelcheck(e)}}/>Heroku
                      <input type="checkbox"  name="HyperledgerFabric" onClick={(e) => {cancelcheck(e)}}/>HyperledgerFabric
                      <input type="checkbox" name="IOS" onClick={(e) => {cancelcheck(e)}}/>IOS
                      <input type="checkbox" name="jQuery" onClick={(e) => {cancelcheck(e)}}/>jQuery
                      <input type="checkbox" name="Java" onClick={(e) => {cancelcheck(e)}}/>Java
                      <input type="checkbox" name="Javascript" onClick={(e) => {cancelcheck(e)}}/>Javascript
                      <input type="checkbox" name="Jenkins" onClick={(e) => {cancelcheck(e)}}/>Jenkins
                      <input type="checkbox" name="Keras" onClick={(e) => {cancelcheck(e)}}/>Keras
                      <input type="checkbox" name="Linux" onClick={(e) => {cancelcheck(e)}}/>Linux
                      <input type="checkbox" name="MariaDB" onClick={(e) => {cancelcheck(e)}}/>MariaDB
                      <input type="checkbox" name="MongoDB" onClick={(e) => {cancelcheck(e)}}/>MongoDB
                      <input type="checkbox" name="MySQL" onClick={(e) => {cancelcheck(e)}}/>MySQL
                      <input type="checkbox" name="Netlify" onClick={(e) => {cancelcheck(e)}}/>Netlify
                      <input type="checkbox" name="Next.js" onClick={(e) => {cancelcheck(e)}}/>Next.js
                      <input type="checkbox" name="Node.js" onClick={(e) => {cancelcheck(e)}}/>Node.js
                      <input type="checkbox" name="Notion" onClick={(e) => {cancelcheck(e)}}/>Notion
                      <input type="checkbox" name="Oracle" onClick={(e) => {cancelcheck(e)}}/>Oracle
                      <input type="checkbox"  name="Prettier" onClick={(e) => {cancelcheck(e)}}/>Prettier
                      <input type="checkbox" name="Prisma" onClick={(e) => {cancelcheck(e)}}/>Prisma
                      <input type="checkbox" name="Pug" onClick={(e) => {cancelcheck(e)}}/>Pug
                      <input type="checkbox" name="Python" onClick={(e) => {cancelcheck(e)}}/>Python
                      

                      <input type="checkbox" name="PyTorch" onClick={(e) => {cancelcheck(e)}}/>PyTorch
                      <input type="checkbox" name="React" onClick={(e) => {cancelcheck(e)}}/>React
                      <input type="checkbox" name="ReactNative" onClick={(e) => {cancelcheck(e)}}/>ReactNative
                      <input type="checkbox" name="ReactiveX" onClick={(e) => {cancelcheck(e)}}/>ReactiveX
                      <input type="checkbox" name="Redux" onClick={(e) => {cancelcheck(e)}}/>Redux
                      <input type="checkbox" name="ReduxSaga" onClick={(e) => {cancelcheck(e)}}/>ReduxSaga
                      <input type="checkbox" name="Sass" onClick={(e) => {cancelcheck(e)}}/>Sass
                      <input type="checkbox" name="Selenium" onClick={(e) => {cancelcheck(e)}}/>Selenium
                      <input type="checkbox" name="Slack" onClick={(e) => {cancelcheck(e)}}/>Slack
                      <input type="checkbox" name="Spring" onClick={(e) => {cancelcheck(e)}}/>Spring
                      <input type="checkbox"  name="Spring Boot" onClick={(e) => {cancelcheck(e)}}/>Spring Boot
                      <input type="checkbox" name="StyledComponents" onClick={(e) => {cancelcheck(e)}}/>StyledComponents
                      <input type="checkbox" name="Swift" onClick={(e) => {cancelcheck(e)}}/>Swift
                      <input type="checkbox" name="Tailwind CSS" onClick={(e) => {cancelcheck(e)}}/>Tailwind CSS

                      <input type="checkbox" name="Tensorflow" onClick={(e) => {cancelcheck(e)}}/>Tensorflow
                      <input type="checkbox" name="Trello" onClick={(e) => {cancelcheck(e)}}/>Trello
                      <input type="checkbox" name="Vercel" onClick={(e) => {cancelcheck(e)}}/>Vercel
                      <input type="checkbox" name="Vue.js" onClick={(e) => {cancelcheck(e)}}/>Vue.js
                      <input type="checkbox" name="Zeplin" onClick={(e) => {cancelcheck(e)}}/>Zeplin
                      






                    </div >
                </>
  )
}
