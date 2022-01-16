import React from 'react';
import {useState} from 'react';
import Noteslist from './components/noteslist';
import {nanoid} from 'nanoid';
import Search from './components/Search';

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

const [searchText, setSearchText] = useState('');
  
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

const deleteNote = (id) =>{
  const newNotes=notes.filter((note)=>note.id!==id)
  setNotes(newNotes);
}

return (
    <div className='container'>
      <Search/>
      <Noteslist notes={notes} 
      handleaddNote={addNote}
      handledeleteNote={deleteNote}/>
    </div>
  )
};
export default App
