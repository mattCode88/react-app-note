import React, { useState, useContext } from 'react';
import './Header.css';
import { ContextNotes } from '../../views/NoteApp';
import { changeTheme } from '../../utils/genericsUtils';
import { searchNoteForKey, sortNoteForKey } from '../../utils/searchUtils';

function Header() {

  const { theme, setTheme, setNotes } = useContext(ContextNotes);

  const [searchKey, setSearchKey] = useState('');
  const [sortKey, setSortKey] = useState('default');

  const searchKeyClick = (e) => {
    setSearchKey(e.target.value)
  }

  const chooseKeySort = (e) => {
    setSortKey(e.target.value)
    sortNoteForKey(e.target.value, 'http://localhost:8000/notes', setNotes)
  }

  return (
    <header className='header'>
      <nav className='nav'>
        <div title='Change Theme' className='change-theme' onClick={() => changeTheme(theme, setTheme)}></div>
        <div className='input-search'>
          <input
            value={searchKey}
            onChange={searchKeyClick}
            name='searchKey'
            type='text'
            placeholder='Search Note'
            onKeyDown={(e) => searchNoteForKey(e, 'http://localhost:8000/notes', searchKey, setNotes, setSearchKey, setSortKey)}>
          </input>
          <div className='search-icon'>
            <ion-icon
            onClick={(e) => searchNoteForKey(e, 'http://localhost:8000/notes', searchKey, setNotes, setSearchKey, setSortKey)}
            name="search"
            >
          </ion-icon>
          </div>
        </div>
        <div>
          <select onChange={chooseKeySort} value={sortKey}>
            <option value='default'>Deafult</option>
            <option value='priority'>Priority</option>
            <option value='deadline'>Deadline</option>
          </select>
        </div>
      </nav>
    </header>
  )
}

export default Header