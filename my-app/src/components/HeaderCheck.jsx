import '@toast-ui/editor/dist/toastui-editor-viewer.css';
import { Viewer } from '@toast-ui/react-editor';
import { useEffect, useState, useRef } from 'react';

export default function HeaderCheck(content) {
    const [content1, setContent1] = useState("");
    const ref = useRef();
    const content2 =`![header](https://capsule-render.vercel.app/api?type=waving&color=0:f6acdd,100:c6acf6&width=1500&height=240&section=header&text=Hello%20World✋%20I'm%20Hyeji!&fontSize=50&fontColor=ffffff ) `; 

    // console.log(content.content);
    // if(content&& ref.current){
    //     ref.current.props.initialValue = content
    // }

    useEffect(() => {
        setContent1(content.content);         
        // console.log(content1);
    }, [ content.content, content1])

    console.log(ref.current);

  return (
    <Viewer ref={ref} initialValue={content1}/>
  )
}
