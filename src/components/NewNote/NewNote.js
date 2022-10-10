import React, {useState, useContext, useEffect} from 'react';
import './NewNote.css';
import { ContextNotes } from '../../views/NoteApp';
import ButtonExit from '../ButtonExit/ButtonExit';
import { fetchPostNewNote, fetchPatchNote } from '../../utils/fetchUtils';
import { verifyForm, createNewNote, updateNote } from '../../utils/noteUtils'
import track from '../../audioClip/confirm.mp3';
import { soundPlay } from '../../utils/genericsUtils';

function NewNote({ singleNote, setIsVisibleUpdateNote }) {
    
    const { setIsVisible, notes, setNoteIsUpdate, audioStatus } = useContext(ContextNotes);

    const [nota, setNota] = useState({
        title: '',
        text: '',
        createdAt: '',
        deadline: '',
        important: ''
    })

    const formSubmit = e => {

        e.preventDefault();

        if (!singleNote) {

            if (verifyForm(nota)) {
                fetchPostNewNote(
                    'http://localhost:8000/notes',
                    createNewNote(nota, notes),
                    setNota,
                    setIsVisible,
                    setNoteIsUpdate,
                )
                soundPlay(track, audioStatus);
            } else {
                return;
            }
            
        }

        if (singleNote) {

            if (verifyForm(nota)) {
                fetchPatchNote(
                    `http://localhost:8000/notes/${singleNote.id}`,
                    updateNote(nota, singleNote),
                    setIsVisibleUpdateNote,
                    setNoteIsUpdate
                )
                soundPlay(track, audioStatus);
            } else {
                return;
            }
            
        }

    }

    const handleClick = e => {
        setNota({...nota, [e.target.name]: e.target.value})
    }

    useEffect(() => {
        if (singleNote) {
            setNota({
                title: singleNote.title,
                text: singleNote.text,
                createdAt: singleNote.createdAt,
                deadline: singleNote.deadline.split('/').reverse().join('-'),
                important: singleNote.important ? 'si' : 'no',
            })
        }        
        return () => setNota({
            title: '',
            text: '',
            createdAt: '',
            deadline: '',
            important: ''
        })
    }, [])

    return (
        <div className='modal'>
            <div className='modal-content'>
                <ButtonExit setIsVisibleUpdateNote={setIsVisibleUpdateNote} />
                <form onSubmit={formSubmit}>
                    <div>
                        <label htmlFor='title'>Titolo:</label>
                        <div className='input-container'>
                            <input className='input-text' type='text' name='title' id='title' value={nota.title} onChange={handleClick}></input>
                        </div>
                    </div>
                    <div>
                        <label htmlFor='text'>Nota:</label>
                        <div className='input-container'>
                            <textarea className='input-text' name='text' id='text' rows="1" cols="30" value={nota.text} onChange={handleClick}></textarea>
                        </div>
                    </div>
                    <div>
                        <label htmlFor='deadline'>Scadenza:</label>
                        <div className='input-container'>
                            <input className='input-text' type='date' name='deadline' id='deadline' value={nota.deadline} onChange={handleClick}></input>
                        </div>
                    </div>
                    <div>
                        <label htmlFor='important'>Priorità:</label>
                        <div className='input-radio'>
                            <span className='title'>Si </span>
                            {
                                singleNote && singleNote.important ?
                                <input type='radio' name='important' id='important' value='si' checked onChange={handleClick}></input> :
                                <input type='radio' name='important' id='important' value='si' onChange={handleClick}></input>
                            }
                            <span className='title'> No </span>
                            {
                                singleNote && !singleNote.important ?
                                <input type='radio' name='important' id='important' value='no' checked onChange={handleClick}></input> :
                                <input type='radio' name='important' id='important' value='no' onChange={handleClick}></input>
                            }
                        </div>
                    </div>
                    <button className='btn-confirm' type='submit'>{ singleNote ? 'UPDATE' : 'CREATE'}</button>
                </form>
            </div>
        </div>
    )
    
}

export default NewNote