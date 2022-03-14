import React from 'react'
import "./intro.scss"
import {init} from 'ityped'
import { useEffect,useRef } from 'react'

export default function Intro() {
    const textRef = useRef();

    useEffect(() => {
        init(textRef.current,{
            showCursor:true,
            backDelay: 1500,
            backSpeed:50,
            strings :["Full Stack Developer","Len'sman","Bengali Quotes Writer"],
        });
    }, [])

    return (
        <div className='intro' id="intro">
           <div className='left'>
                <div className="imgContainer">
                    <img src="assets/main.png" alt=''></img>
                </div>
           </div>
        <div className='right'>
            <div className='wrapper'>
                <h2>
                    Hi There , I'm
                </h2>
                <h1>
                    Ahin Subhra Das .
                </h1>
                <h3>
                    I'm a <span ref={textRef}></span>
                </h3>
                <a href="#portfolio">
                    <img src='assets/down.png' alt='' />
                </a>
            </div>
        </div>
        </div>
    )
}
