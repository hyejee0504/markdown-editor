import '@toast-ui/editor/dist/toastui-editor.css';
import { Editor } from '@toast-ui/react-editor';
import { useState, useEffect, useRef } from 'react';


export default function Writer(){
	// const [content1, setContent1] = useState("왜 그러지");
	// const ref = useRef();

	// useEffect(() => {
	// 	setContent1(""); 
    //     setContent1(content.content);     
	// 	console.log(content1);   
	// 	console.log(ref.current); 
    // }, [ content.content])

	return (
	<Editor 
	previewStyle='vertical' height='100em'
	/>
	);
}