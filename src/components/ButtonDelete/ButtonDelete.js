import React, {useContext} from 'react';
import './ButtonDelete.css';
import { ContextNotes } from '../../views/NoteApp';

function ButtonDelete() {  

  const { dragOver, dragDrop, audioStatus, setNoteIsUpdate } = useContext(ContextNotes);

  return (
    <button
      onDragOver={dragOver}
      onDrop={(e) => dragDrop(e, audioStatus, setNoteIsUpdate)}
      type='button'
      title='Drag Note To Delete'
      className='btn btn-delete'>
      <ion-icon name="trash"></ion-icon>
    </button>
  )
  
}

export default ButtonDelete;