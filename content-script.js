var totalTime;

var titleCheck = setInterval(() => {
    var videoElement = document.querySelector("video");

    if(videoElement != null) {
        clearInterval(titleCheck);

        var progressBar = document.createElement("div");
        progressBar.id = "progressBar";
        var progress = document.createElement("div");
        progress.id = "progress";
        progressBar.appendChild(progress);
        
        videoElement.parentNode.append(progressBar);

        totalTime = videoElement.duration;
        
        setInterval(() => {
            progress.style.width = videoElement.currentTime * 100 / totalTime + "%";
        }, 1000);

        setInterval(() => {
            if(videoElement?.duration != totalTime) {
                videoElement = document.querySelector("video");
                totalTime = videoElement.duration;
                videoElement.parentNode.append(progressBar);
            }
        }, 10000);
    }
}, 1000);