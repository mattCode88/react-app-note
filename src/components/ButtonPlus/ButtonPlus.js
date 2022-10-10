import React, { useContext } from 'react';
import './ButtonPlus.css';
import { ContextNotes } from '../../views/NoteApp';
import track from '../../audioClip/open.mp3';
import { soundPlay } from '../../utils/genericsUtils';

function ButtonPlus() {

  const { setIsVisible, audioStatus } = useContext(ContextNotes);

  return (
    <button
      className='btn btn-plus'
      type='button'
      onClick={() => {
        soundPlay(track, audioStatus)
        setIsVisible(true)
      }}>
      +
    </button>
  )
}

export default ButtonPlus