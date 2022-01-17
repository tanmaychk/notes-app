import React from 'react';
import {useState, useEffect} from 'react';
import Noteslist from './components/noteslist';
import {nanoid} from 'nanoid';
import Search from './components/Search';
import Header from './components/Header';

const App = () => {
  const [notes, setNotes] = useState([] );

const [searchText, setSearchText] = useState('');
const [darkMode, setDarkMode] = useState(false); //to switch into dark mode using state variable


useEffect(()=>{
  const savedNotes = JSON.parse(
    localStorage.getItem('react-notes-app-data') //retreiving notes from local storage and saves to variable savedNotes
  );

  if(savedNotes){
    setNotes(savedNotes);
  }
},[])

useEffect(()=>{
  localStorage.setItem(
    'react-notes-app-data',
    JSON.stringify(notes)
  )
},[notes]) //saves the notes data on local storage
  
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
    <div className={`${darkMode && 'dark-mode'}`}>
      <div className='container'>
        <Header handleToggleDarkMode={setDarkMode}/>
        <Search handleSearchNote={setSearchText}/>
        <Noteslist 
        notes={notes.filter((note)=>note.text.toLowerCase().includes(searchText))} 
        handleaddNote={addNote}
        handledeleteNote={deleteNote}/>
      </div>
    </div>

  )
};
export default App
