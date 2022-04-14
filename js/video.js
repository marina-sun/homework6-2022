var video;

window.addEventListener("load", function() {
	console.log("Good job opening the window")
	video = document.querySelector("#player1");
    video.autoplay = false;
    video.loop = false;
});

document.querySelector("#play").addEventListener("click", function() {
 	console.log("Play Video");
	document.querySelector("#volume").innerHTML= video.volume * 100 + "%"
	video.play()
});

document.querySelector("#pause").addEventListener("click", function() {
    console.log("Pause Video");
    video.pause();
});

document.querySelector("#slower").addEventListener("click", function() {
    console.log("Slow Down")
    console.log("The speed right now is " + video.playbackRate)
    var speed = video.playbackRate
    video.playbackRate = 0.95*speed
    console.log("The new speed is " + video.playbackRate)
})

document.querySelector("#faster").addEventListener("click", function() {
    console.log("Speed Up")
    console.log("The speed right now is " + video.playbackRate)
    video.playbackRate /=0.95
    console.log("The new speed is " + video.playbackRate)
})

document.querySelector("#mute").addEventListener("click", function() {
    console.log("The volume is " + video.muted)
    if (video.muted == false) {
        video.muted = true
        document.querySelector("#mute").innerHTML = "Unmute" 
        console.log("Muted")
    }
    else {
        video.muted = false
        document.querySelector("#mute").innerHTML = "Mute"
        console.log("Unmuted")
    }
})

document.querySelector("#slider").addEventListener("click", function() {
    console.log(this.value)
    video.volume = this.value/100
    document.querySelector("#volume").innerHTML = video.volume*100 + "%"
})

document.querySelector("#skip").addEventListener("click", function() {
    console.log("The current timestamp of the video is: " + video.currentTime)
    video.currentTime = video.currentTime + 15
    if (video.currentTime >= 67.403333) {
        video.currentTime = 0
    }
    console.log("New timestamp of the video is: " + video.currentTime)
})

document.querySelector("#vintage").addEventListener("click", function() {
    console.log("Old School")
    video.classList.add("oldSchool")
})

document.querySelector("#orig").addEventListener("click", function() {
    console.log("Original")
    video.classList.remove("oldSchool")
})