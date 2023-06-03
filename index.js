console.log("hello world");
let index = 0;

var audio = new Audio('1.mp3');

let playBtn = document.getElementById("playBtn");
// console.log(playBtn);
let myProgressBar = document.getElementById("myProgressBar");
let masterPlay = document.getElementById("masterPlay");
let gif = document.getElementById("gif");
let masterSongName = document.getElementById("masterSongName");
let x = document.getElementById("myNavbar");


var songs = [
    { songName: "Pagol ", filePath: "1.mp3", coverPath: "https://c.saavncdn.com/241/Pagol-Punjabi-2019-20190704155556-500x500.jpg" },
    { songName: "Aye Khuda", filePath: "2.mp3", coverPath: "https://c.saavncdn.com/916/Murder-2-Hindi-2011-20221211193711-500x500.jpg" },
    { songName: "Maahi", filePath: "3.mp3", coverPath: "https://c.saavncdn.com/542/RAAZ-The-Mystery-Continues-Hindi-2008-20190617160418-500x500.jpg" },
    { songName: "Bones", filePath: "4.mp3", coverPath: "https://i.ytimg.com/vi/ZNsPYmkSPeI/maxresdefault.jpg" },
    { songName: "Unholy", filePath: "5.mp3", coverPath: "https://images.hungama.com/c/1/b9f/0df/97434074/97434074_300x300.jpg" },
    { songName: "Daku", filePath: "6.mp3", coverPath: "https://i1.sndcdn.com/avatars-000535674090-r2zl8x-t500x500.jpg" },
];

playBtn.addEventListener('click', function () {
    if (audio.paused || audio.currentTime == 0) {
        audio.play();
        myProgressBar.style.opacity = 1;
        gif.style.opacity=1;
        masterSongName.style.opacity = 1;


    }
    else {
        audio.pause();
        gif.style.opacity=0;
    }
});
masterPlay.addEventListener('click', function () {
    if (audio.paused || audio.currentTime == 0) {
        audio.play();
        myProgressBar.style.opacity = 1;
        masterSongName.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;

    }
    else {
        audio.pause();
        masterPlay.classList.add('fa-play-circle');
        masterPlay.classList.remove('fa-pause-circle');
        gif.style.opacity=0;
    }
});

const Play = function () {
    Array.from(document.querySelectorAll(".play")).forEach(function (element) {
        element.classList.remove("fa-pause-circle");
        element.classList.add("fa-play-circle");

    });
}

Array.from(document.querySelectorAll(".play")).forEach(function (element) {

    element.addEventListener('click', (element) => {

        if (audio.paused || audio.currentTime <= 0) {
            Play();

            index = parseInt(element.target.id);


            element.target.classList.remove('fa-play-circle');
            element.target.classList.add('fa-pause-circle');
            audio.src = index + 1 + '.mp3';
            audio.currentTime = 0;
            masterSongName.innerHTML = songs[index].songName;
            myProgressBar.style.opacity = 1;

            audio.play();
            gif.style.opacity = 1;
            masterSongName.style.opacity = 1;
            masterPlay.classList.remove('fa-play-circle');
            masterPlay.classList.add('fa-pause-circle');
        }
        else {
            Play();

            index = parseInt(element.target.id);
            element.target.classList.add('fa-play-circle');
            element.target.classList.remove('fa-pause-circle');
            audio.src = index + 1 + '.mp3';
            masterSongName.innerHTML = songs[index].songName;
            
            audio.pause();
            gif.style.opacity = 0;
            masterPlay.classList.add('fa-play-circle');
            masterPlay.classList.remove('fa-pause-circle');
        }
    })
})



audio.addEventListener('timeupdate', function () {

    myProgressBar.value = parseInt((audio.currentTime / audio.duration) * 100);
    console.log(myProgressBar.value);
});
myProgressBar.addEventListener('change', () => {
    audio.currentTime = parseInt((myProgressBar.value * audio.duration) / 100);
})

document.querySelector("#next").addEventListener('click',()=>{
    if(index>=6){
        index = 0;
        audio.src = index + 1+'.mp3';
        audio.play();
        audio.currentTime=0;
        masterSongName.innerHTML = songs[index].songName;

        gif.style.opacity = 1;
        masterSongName.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    }
    
    else{
        index +=1;
        audio.src = index+1+'.mp3';
        audio.play();
        audio.currentTime=0;
        masterSongName.innerHTML = songs[index].songName;

        gif.style.opacity = 1;
        masterSongName.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    }
});
document.querySelector("#previous").addEventListener('click',()=>{
  
    if(index<=0){
        index = 0;
        console.log("you can only apply next button");
        
    }
    else{
        index -=1;
        audio.src = index+1+'.mp3';
        audio.play();
        audio.currentTime = 0;
        masterSongName.innerHTML = songs[index].songName;
        gif.style.opacity = 1;
        masterSongName.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    }
});

function myFunction(){
    if(x.className === "navbar"){
        x.classList.remove('navbar');
        x.classList.add('responsive');
      
    }
    else{
        x.className = "navbar";
    }
}
