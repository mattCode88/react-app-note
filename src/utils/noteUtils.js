import React from 'react';
import Note from "../classes/Note";
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const createNewNote = (nota) => {
    
    return new Note(
        new Date().getTime(),
        nota.title,
        nota.text,
        `${new Date().getDate() < 10 ?
            '0' + new Date().getDate() :
            new Date().getDate()}/${new Date().getMonth() + 1 < 10 ?
            '0' + new Date().getMonth() + 1 :
            new Date().getMonth() + 1}/${new Date().getFullYear()}`,
        `${nota.deadline.split('-').reverse().join('/')}`,
        nota.important === 'si' ? true : false
    )
}

const updateNote = (nota, singleNote) => {
    return new Note(
        singleNote.id,
        nota.title,
        nota.text,
        singleNote.createdAt,
        `${nota.deadline.split('-').reverse().join('/')}`,
        nota.important === 'si' ? true : false
    )
}

const verifyForm = (nota) => {
    if (!nota.title || !nota.text || !nota.deadline || !nota.important) {
        const MySwal = withReactContent(Swal)
        MySwal.fire({
            title: <p>Compila tutti i campi</p>,
            html: <p>hhhhh</p>,
            icon: 'warning',
            iconColor: 'crimson',
            toast: true,
            buttonsStyling: false,
            customClass: {
                confirmButton: 'my-swal-title'
            }
        })
        return false
    }
    return true
}

export {
    createNewNote,
    updateNote,
    verifyForm
}