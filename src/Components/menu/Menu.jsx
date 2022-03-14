import React from 'react'
import "./menu.scss"

export default function Menu({menuOpen , setmenuOpen}) {
    return (
        <div className={"menu " + (menuOpen && "active")}>
            <ul>
            <li onClick={()=>setmenuOpen(false)}>
                    <a href='#intro'>Home</a>
                </li>
                <li onClick={()=>setmenuOpen(false)}>
                    <a href='#portfolio'>Portfolio</a>
                </li>
                {/* <li onClick={()=>setmenuOpen(false)}>
                    <a href='#works'>Work</a>
                </li> */}
                <li onClick={()=>setmenuOpen(false)}>
                    <a href='#testimonials'>Prefered links</a>
                </li>
                <li onClick={()=>setmenuOpen(false)}>
                    <a href='#contact'>Contact</a>
                </li>
            </ul>
        </div>
    )
}
