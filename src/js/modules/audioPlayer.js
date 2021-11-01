import playList from "./playList";

function audioPlayer() {

// Аудиоплеер
    let playerControls = document.querySelector('.player-controls'),
        playPrev = document.querySelector('.play-prev'),
        playNext = document.querySelector('.play-next'),
        playBtn = document.querySelector('.play'),
        isPlay = false,
        playNum = 0;

    const audio = new Audio();

    function playAudio() {
        audio.src = playList[playNum].src;
        audio.currentTime = 0;
        audio.play();
    }

    function pauseAudio() {
        audio.pause();
    }

    playBtn.addEventListener('click', () => {
        if (isPlay === false) {
            isPlay = true;
            playBtn.classList.add('pause')
            playAudio()
        } else {
            isPlay = false;
            playBtn.classList.remove('pause')
            pauseAudio();
        }
    });
    playNext.addEventListener('click', ()=> {
        if (playNum === playList.length - 1) {
            playAudio()
        } else {
            pauseAudio()
            playNum++;
            playAudio()
        }
    });
    playPrev.addEventListener('click', ()=> {
        if (playNum === 0) {
            playAudio()
        } else {
            pauseAudio()
            playNum--;
            playAudio()
        }
    });

    //Плейлист
    const audioList = document.querySelector('.play-list');

    playList.forEach(item => {
        const li = document.createElement('li');
        li.classList.add('play-item');
        li.textContent = item.title;
        audioList.append(li);
    });

}

export default audioPlayer;