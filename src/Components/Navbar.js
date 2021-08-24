import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'



export default function Navbar(props) {
    let style;
    if(props.mode==="dark"){
        style = {
            // color:props.mode==="dark"?props.fontColor:"#343a40",
            color:props.fontColor,
            // backgroundColor:props.mode ==="light"?"white":props.customColor
            backgroundColor:props.navColor
        }
    }
    
    const colorChange = (event)=>{
        const color = event.target.value;
        if(props.mode === "dark"){
            console.log(color)
            props.darkModeColors(color,"theme");
        }
    }
    const navColorChange = (event)=>{
        const color = event.target.value;
        if(props.mode === "dark"){
            console.log(color)
            props.darkModeColors(color,"nav");
        }
    }
    const fontColorChange = (event)=>{
        const color = event.target.value;
        if(props.mode === "dark"){
            console.log(color)
            props.darkModeColors(color,"font");
        }
    }
    //  
    return (
        <nav className={`navbar py-0 navbar-expand-lg navbar-${props.mode} bg-${props.mode}` } style={style} >
            <div className="py-2 container-fluid" style={style}>
                <Link  className="navbar-brand" to="/">{props.title}</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent" >
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to="/about">{props.aboutText}</Link>
                    </li>
                    
                </ul>
                {props.mode==="dark" && <div style={style}>
                        <input className="me-md-1 color-pallette" type="color" onChange={colorChange} name="" id="theme" value="#858585"/>
                        <label className={`me-md-3 form-check-label text-${props.mode==="light"? "dark" :"light"}`} htmlFor="theme">Theme</label>
                        <input className="me-md-1 color-pallette" type="color" onChange={navColorChange} name="" id="nav" value="#858585"/>
                        <label className={`me-md-3 form-check-label text-${props.mode==="light"? "dark" :"light"}`} htmlFor="nav">Navbar</label>
                        <input className="me-md-1 color-pallette" type="color" onChange={fontColorChange} name="" id="font" value="#858585"/>
                        <label className={`me-md-3 form-check-label text-${props.mode==="light"? "dark" :"light"}`} htmlFor="color">Font</label>
                    {/* <div className="mx-1">
                    </div>
                    <div className="mx-1">
                    </div>
                    <div className="mx-1">
                    </div > */}
                    </div>}
                
                <div className="form-check form-switch mx-2" style={style}>
                    <input onClick={props.toggleMode} className="form-check-input" type="checkbox" id="flexSwitchCheckDefault"/>
                    <label className={`form-check-label text-${props.mode==="light"? "dark" :"light"}`} htmlFor="flexSwitchCheckDefault">{`${props.mode==="dark"?"Disable":"Enable"} Dark Mode`}</label>
                </div>
                {/* <form className="d-flex">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                    <button className="btn btn-outline-success" type="submit">Search</button>
                </form> */}
                </div>
            </div>
        </nav>
    )
}

Navbar.propTypes = {            // this sets the data-type of each prop
    title: PropTypes.string.isRequired,      // now "title"  can only be a string   and is required
    aboutText : PropTypes.string.isRequired         // if we don't send a "title" prop & no defaultProp is set, there will be error
}

Navbar.defaultProps = {                  // if no props are passed in app.js,  these will be used
    title: "Set Title Here",
    aboutText : "About Text Here"
}