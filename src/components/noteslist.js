import React from 'react';
import Note from'./Note';
import AddNote from './Addnote';
const Noteslist = ({notes,handleaddNote}) => {
    return (
        <div className='notes-list'>
            {notes.map((note)=>(
            <Note id={note.id} text={note.text} date={note.date}/>
            ))}
            <AddNote handleaddNote={handleaddNote}/>
        </div>
    )
}

export default Noteslist
