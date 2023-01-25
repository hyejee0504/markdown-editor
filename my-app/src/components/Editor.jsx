import '@toast-ui/editor/dist/toastui-editor.css';
import { Editor } from '@toast-ui/react-editor';
import { useState, useEffect, useRef } from 'react';


export default function Writer(){
	return (
	<Editor 
	previewStyle='vertical' height='100em'
	/>
	);
}