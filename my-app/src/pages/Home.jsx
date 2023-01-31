import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Home() {
    const navigate = useNavigate();
    const nextpage = () => {
        navigate("../FirstStep")
    }

  return (
    <>
        <h1>Let's create amazing Github profile readme!</h1>
        <button onClick={nextpage}>Start!</button>
    </>
  )
}
