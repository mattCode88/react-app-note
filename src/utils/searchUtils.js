const searchNoteForKey = (e, url, searchKey, setNotes, setSearchKey, setSortKey) => {
    if (e.key === 'Enter' || e.type === 'click') {
      fetch(url)
        .then(res => res.json())
        .then(result => {
          const research = result.filter(nota => nota.title.toLowerCase().includes(searchKey));
          setNotes(research)
            setSearchKey('')
            setSortKey('default')
      }).catch(err => {})
    }
}

const sortNoteForKey = (value, url, setNotes) => {
    fetch(url)
        .then(res => res.json())
        .then(result => {
            let research = [];
            if (value === 'default') research = result;
            if (value === 'priority') {
                research = result.filter(nota => nota.important)
            }
            if (value === 'deadline') {
                let dataNotes = result.map(el => el.deadline)
                    .map(el => el.split('/').reverse().join('/'))
                    .map(el => Date.parse(el))
                    .sort((a, b) => a > b)
                    .map(el => new Date(el));
                let count1 = 0, count2 = 0;
                while (count1 < dataNotes.length) {
                    if (count2 === dataNotes.length) count2 = 0;
                    if (Date.parse(result[count2].deadline.split('/').reverse().join('/')) === Date.parse(dataNotes[count1])) {
                        research.push(result[count2])
                        count1++
                    }
                    count2++
                } 
            }
            setNotes(research)
        })
}

export {
    searchNoteForKey,
    sortNoteForKey
}