import React from 'react'
import { useState } from 'react';
const Addnote = ({handleaddNote}) => {//handle addd note prop  linked all the way from appjs
    const [noteText, setNotetext] = useState('');
    const characterlimit = 200; //dosent use useState as user shouldnt be able to change this value

    const handleChange =(event)=>{
        if(characterlimit-event.target.value.length>=0){  //logic to keep charcter limit
        
        setNotetext(event.target.value);
        }
         //updates state every time the user types
    };

    const handleSave=()=>{
        if(noteText.trim().length>0){ //'if statement' handles blank notes 
        handleaddNote(noteText);
        setNotetext('') //resets text back to empty
        }
    };
    return (
        <div className='note new ' >
            <textarea rows='8' cols='10' placeholder='Type to add a note...' value={noteText} onChange={handleChange}>

            </textarea>
            <div className='note-footer'>
                <small>{characterlimit-noteText.length} remaining</small>
                <button className='save' onClick={handleSave}>save</button>
            </div>
            
        </div>
    )
}   

export default Addnote; 
