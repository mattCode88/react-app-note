import { soundPlay } from "./genericsUtils";
import track from '../audioClip/success-drag.wav';
import { fetchDeleteNote } from "./fetchUtils";

const dragStart = (e, id) => {
    e.dataTransfer.setData("drag-item", id);
  }

const dragOver = (e) => {
    e.preventDefault();
}

const dragDrop = (e, audioStatus, setNoteIsUpdate) => {
    const id = Number(e.dataTransfer.getData('drag-item'))
    soundPlay(track, audioStatus);
    fetchDeleteNote(`http://localhost:8000/notes/${id}`, setNoteIsUpdate)
}
  
export {
    dragStart,
    dragOver,
    dragDrop
}