import { Howl } from 'howler';

const soundPlay = (src, audioStatus) => {
    
    if (audioStatus) {
        const sound = new Howl({ src, html5: true })
        sound.play()
    }
    return;
}

const soundPlayButton = src => {
    const sound = new Howl({ src, html5: true })
    sound.play()
}

const changeTheme = (theme, setTheme) => {
    theme === 'light-mode' ? setTheme('dark-mode') : setTheme('light-mode');
}

const getThemeForLocalstorage = () => {
    if (localStorage.getItem('theme')) return localStorage.getItem('theme');
    return 'light-mode';
}
  
export {
    soundPlay,
    soundPlayButton,
    changeTheme,
    getThemeForLocalstorage
}