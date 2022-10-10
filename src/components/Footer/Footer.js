import React from 'react';
import './Footer.css';
import ButtonPlus from '../ButtonPlus/ButtonPlus';
import ButtonDelete from '../ButtonDelete/ButtonDelete';
import ButtonAudio from '../ButtonAudio/ButtonAudio';

function Footer() {
  return (
      <footer className='footer'>
          <ButtonAudio/>
          <ButtonDelete/>
          <ButtonPlus/>
    </footer>
  )
}

export default Footer;