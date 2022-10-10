import React from 'react';
import './SingleNoteDetail.css';
import ButtonExit from '../ButtonExit/ButtonExit';

function SingleNoteDetail({ nota, setisSingleNoteView }) {

    return (
        <div className='modal-x'>
            <div className='modal-content-x'>
                <div className='info-container'>
                    <div className='title info'>Titolo:</div>
                    <div className='text'>{nota.title}</div>
                </div> 
                <div className='info-container'>
                    <div className='title info'>Testo:</div>
                    <div className='text'>{nota.text}</div>
                </div> 
                <div className='info-container'>
                    <div className='title info'>Creato il:</div>
                    <div className='text'>{nota.createdAt}</div>
                </div> 
                <div className='info-container'>
                    <div className='title info'>Scadenza:</div>
                    <div className='text'>{nota.deadline}</div>
                </div> 
                <div className='info-container'>
                    <div className='title info'>Priorità:</div>
                    <div className='text'>{nota.important ? 'yes' : 'no'}</div>
                </div> 
                <ButtonExit setisSingleNoteView={ setisSingleNoteView } />
            </div>
        </div>
    )
}
        

export default SingleNoteDetail;