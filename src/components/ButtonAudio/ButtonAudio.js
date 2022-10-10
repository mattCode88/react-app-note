import React, {useContext} from 'react';
import './ButtonAudio.css';
import track from '../../audioClip/success-drag.wav';
import { soundPlayButton } from '../../utils/genericsUtils';
import { ContextNotes } from '../../views/NoteApp';

function ButtonAudio() {

  const { setAudioStatus, audioStatus } = useContext(ContextNotes);

  const changeVolume = e => {
    if (e.target.tagName === 'BUTTON') {
      if (e.target.lastChild.name === 'volume-high') {
        e.target.lastChild.name = 'volume-off';
        setAudioStatus(false);
      } else {
        e.target.lastChild.name = 'volume-high'
        setAudioStatus(true);
        soundPlayButton(track, audioStatus);
      }
    } else {
      if (e.target.name === 'volume-high') {
        e.target.name = 'volume-off'
        setAudioStatus(false);
      }
      else {
        e.target.name = 'volume-high'
        setAudioStatus(true);
        soundPlayButton(track, audioStatus);
      }
    }
  }

  return (
    <button type='button' onClick={changeVolume} className='btn btn-audio'><ion-icon name="volume-high"></ion-icon></button>
  )

}

export default ButtonAudio;