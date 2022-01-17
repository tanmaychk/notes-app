import React from 'react';
import {MdDarkMode} from "react-icons/md";

const Header = ({handleToggleDarkMode}) => {
    return (
        <div className='header'>
            <h1>Notes</h1>
            <MdDarkMode onClick={()=>handleToggleDarkMode((previousDarkMode)=>!previousDarkMode)} className='dark'>Toggle mode</MdDarkMode>
        </div>
    )
}

export default Header
