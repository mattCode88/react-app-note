import React, {useEffect, useState, createContext} from 'react';
import './NoteApp.css';
import Header from '../components/Header/Header';
import Main from '../components/Main/Main';
import NewNote from '../components/NewNote/NewNote';
import Footer from '../components/Footer/Footer';
import { dragStart, dragOver, dragDrop } from '../utils/dragUtils';
import { fetchGetNote } from '../utils/fetchUtils';
import { getThemeForLocalstorage } from '../utils/genericsUtils';

export const ContextNotes = createContext();

function NoteApp() {

  const [notes, setNotes] = useState([]),
    [notesIsUpdate, setNoteIsUpdate] = useState(false),
    [isVisible, setIsVisible] = useState(false),
    [audioStatus, setAudioStatus] = useState(true),
    [theme, setTheme] = useState(getThemeForLocalstorage());

  useEffect(() => {
    fetchGetNote('http://localhost:8000/notes', setNotes)
    return (() => setNoteIsUpdate(false))
  }, [notesIsUpdate]);

  useEffect(() => {
    document.documentElement.className = theme;
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <ContextNotes.Provider value={{
      notes,
      setNotes,
      isVisible,
      setIsVisible,
      setNoteIsUpdate,
      dragOver,
      dragStart,
      dragDrop,
      audioStatus,
      setAudioStatus,
      theme,
      setTheme
    }}>
      <div className='container-app'>
        <Header />
        <Main />
        <Footer/>
        {isVisible && <NewNote/>}
      </div>
    </ContextNotes.Provider>
  )
}

export default NoteApp

// npx json-server --watch data/db.json --port 8000