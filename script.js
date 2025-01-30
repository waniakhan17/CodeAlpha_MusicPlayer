let progress = document.getElementById("progress");
let song = document.getElementById("song");
let ctrlIcon = document.getElementById("ctrlIcon");
let forwardBtn = document.querySelector(".fa-forward");
let backwardBtn = document.querySelector(".fa-backward");

song.onloadedmetadata = function() {
    progress.max = song.duration;
    progress.value = song.currentTime;
};

function playPause() {
    if (ctrlIcon.classList.contains("fa-pause")) {
        song.pause();
        ctrlIcon.classList.remove("fa-pause");
        ctrlIcon.classList.add("fa-play");
    } else {
        song.play();
        ctrlIcon.classList.remove("fa-play");
        ctrlIcon.classList.add("fa-pause");
    }
}

if (song.play()) {
    setInterval(() => {
        progress.value = song.currentTime;
    }, 500);
}

progress.onchange = function () {
    song.play();
    song.currentTime = progress.value;
    ctrlIcon.classList.remove("fa-play");
    ctrlIcon.classList.add("fa-pause");
};

// Skip 5 seconds forward
forwardBtn.addEventListener("click", function() {
    song.currentTime += 5;
});

// Skip 5 seconds backward
backwardBtn.addEventListener("click", function() {
    song.currentTime -= 5;
    if (song.currentTime < 0) {
        song.currentTime = 0;
    }
});
