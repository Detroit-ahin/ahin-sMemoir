import React from 'react'
import "./topbar.scss"
import {ContactPhone,Email} from "@material-ui/icons"

export default function Topbar({menuOpen , setmenuOpen}) {
    return (
        <div className={"topbar " + (menuOpen && "active")}>
            <div className="wrapper">
             <div className="left">
                <a href='#intro' className='logo'>ahin'sMemoir</a>
                <div className='itemsContainer'>
                    <ContactPhone className='icon'/>
                    <span>+91 7001882454</span>
                </div>
                <div className='itemsContainer' >
                    <Email className='icon'/>
                    <span>ahinsubhradas1997@gmail.com</span>
                </div>
             </div>
             <div className="right">
             <div className='hamburger' onClick={()=>setmenuOpen(!menuOpen)}>
                 <span className='line1'></span>
                 <span className='line2'></span>
                 <span className='line3'></span>
             </div>
             </div>
            </div>

        </div>
    )
}
