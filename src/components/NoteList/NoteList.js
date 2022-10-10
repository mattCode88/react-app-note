import React, { useContext } from 'react';
import { ContextNotes } from '../../views/NoteApp';
import NoteDetail from '../NoteDetail/NoteDetail';
import './NoteList.css';

function NoteList() {

    const { notes } = useContext(ContextNotes);

  return (
    <div className='note-list'>
        {notes.map(nota => <NoteDetail key={nota.id} nota={nota} />)}
    </div>
  )
}

export default NoteList;