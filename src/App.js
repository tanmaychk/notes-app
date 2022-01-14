import React from 'react';
import {useState} from 'react';
import Noteslist from './components/noteslist';
import {nanoid} from 'nanoid';

const App = () => {
  const [notes, setNotes] = useState([
    {
    id:nanoid(),
    text:'my first note',
    date: '14/01/2022',
  },
  {
    id:nanoid(),
    text:'my second note',
    date: '14/01/2022',
  },
  {
    id:nanoid(),
    text:'my third note',
    date: '14/01/2022',
  },
]);
  
const addNote =(text)=>{
  const date = new Date();
  const newNote={
    text:text,
    date:date.toLocaleDateString(),
    id:nanoid(),

  }
  const newNotes =[...notes,newNote];
  setNotes(newNotes);
}


return (
    <div className='container'>
      <Noteslist notes={notes} handleaddNote={addNote}/>
    </div>
  )
};
export default App
