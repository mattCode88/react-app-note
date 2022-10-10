import React, {useState, useContext} from 'react';
import './NoteDetail.css';
import SingleNoteDetail from '../SingleNoteDetail/SingleNoteDetail';
import NewNote from '../NewNote/NewNote';
import { ContextNotes } from '../../views/NoteApp';
import track from '../../audioClip/open.mp3';
import { soundPlay } from '../../utils/genericsUtils';

function NoteDetail({ nota }) {

  const { dragStart, audioStatus } = useContext(ContextNotes);
    
  const [isSingleNoteView, setisSingleNoteView] = useState(false);
  const [isVisibleUpdateNote, setIsVisibleUpdateNote] = useState(false);

    return (
      <>
        <div
          className='nota-detail'
          draggable
          onDragStart={(e) => dragStart(e, nota.id)}>
          <div onClick={() => {
            setisSingleNoteView(true);
            soundPlay(track, audioStatus);
          }}>
            <div className='icon-container'>
              {nota.important ? <div className='nota-important'></div> : <div></div>}
              <ion-icon
                className='nota-modify'
                name="create"
                onClick={(e) => {
                  e.stopPropagation();
                  setIsVisibleUpdateNote(true);
                  soundPlay(track, audioStatus);
                }}></ion-icon>
            </div>
            <div className='title' >
                {nota.title}
            </div>
          </div>
        </div>
        {isSingleNoteView &&
          <SingleNoteDetail
              nota={nota}
              setisSingleNoteView={setisSingleNoteView}/>
        }
        {isVisibleUpdateNote &&
          <NewNote
            singleNote={nota}
            setIsVisibleUpdateNote={setIsVisibleUpdateNote} />}
      </>
      
  )
}

export default NoteDetail;