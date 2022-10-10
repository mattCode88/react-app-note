import React, {useContext} from 'react';
import './ButtonExit.css';
import { ContextNotes } from '../../views/NoteApp';
import track from '../../audioClip/close.mp3';
import { soundPlay } from '../../utils/genericsUtils';

function ButtonExit({setisSingleNoteView, setIsVisibleUpdateNote}) {

  const { setIsVisible, audioStatus } = useContext(ContextNotes)

  const exit = () => {
    if (!setisSingleNoteView && !setIsVisibleUpdateNote) {
      setIsVisible(false)
      return
    }
    if (setisSingleNoteView && !setIsVisibleUpdateNote) {
      setisSingleNoteView(false)
      return
    }
    if (!setisSingleNoteView && setIsVisibleUpdateNote) {
      setIsVisibleUpdateNote(false)
      return
    }
  }
    
    return (
      <button
        className='btn btn-exit'
        onClick={() => {
          exit()
          soundPlay(track, audioStatus)
        } }>
        X
      </button>
    )
 
}

export default ButtonExit;