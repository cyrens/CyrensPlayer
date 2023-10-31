const music = new Audio('vande.mp3');

const songs = [
    {
        id:'1',
        songName:`sTraNgeRs
        <div class="subtitle">Bring Me The Horizon</div>`,
        poster: "img/bmthstran.jpg"
    },
    {
        id:'2',
        songName:`Missery Business
        <div class="subtitle">Paramore</div>`,
        poster: "img/paramoreriot.jpeg"
    },
    {
        id:'3',
        songName:`I m Just A Kid
        <div class="subtitle">SimplePlan</div>`,
        poster: "img/simpleplan.jpg"
    },
    {
        id:'4',
        songName:`American Idiot
        <div class="subtitle">Green Day</div>`,
        poster: "img/greendayAI.jpeg"
    },
    {
        id:'5',
        songName:`20/20
        <div class="subtitle">One Ok Rock</div>`,
        poster: "img/oorAmbitions.jpeg"
    },
    {
        id:'6',
        songName:`Dammit
        <div class="subtitle">Blink182</div>`,
        poster: "img/blink182dammit.jpeg"
    },
]

Array.from(document.getElementsByClassName('songItem')).forEach((element, i)=>{
    element.getElementsByTagName('img')[0].src = songs[i].poster;
    element.getElementsByTagName('h5')[0].innerHTML = songs[i].songName;
})

let masterPlay = document.getElementById('masterPlay');
let wave = document.getElementsByClassName('wave')[0];

masterPlay.addEventListener('click',()=>{
    if (music.paused || music.currentTime <=0) {
        music.play();
        masterPlay.classList.remove('bi-play');
        masterPlay.classList.add('bi-pause');
        wave.classList.add('active2');
    } else {
        music.pause();
        masterPlay.classList.add('bi-play');
        masterPlay.classList.remove('bi-pause');
        wave.classList.remove('active2');
    }
})

Array.from(document.getElementsByClassName('playListPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{
        index = e.target.id;
        e.target.classList.remove('bi-play-circle');
        e.target.classList.add('bi-pause-circle');
    })
})