const fetchGetNote = (url, setNotes) => {
    fetch(url).then(res => res.json()).then(result => {
      setNotes(result)
    })
}

const fetchPostNewNote = (url, nota, setNota, setIsVisible, setNoteIsUpdate) => {
    fetch(url, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(nota)
    }).then(res => {
        setNota({
            title: '',
            text: '',
            createdAt: '',
            deadline: '',
            important: ''
        })
        setIsVisible(false)
        setNoteIsUpdate(true)
    })
}

const fetchPatchNote = (url, nota, setIsVisibleUpdateNote, setNoteIsUpdate) => {
    fetch(url, {
        method: 'PATCH',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(nota)
    }).then(res => {
        setIsVisibleUpdateNote(false)
        setNoteIsUpdate(true)
    })
}

const fetchDeleteNote = (url, setNoteIsUpdate) => {
    fetch(url, {
        method: 'DELETE'
    }).then(res => {
        setNoteIsUpdate(true)
    })
}

export {
    fetchGetNote,
    fetchPostNewNote,
    fetchPatchNote,
    fetchDeleteNote
}