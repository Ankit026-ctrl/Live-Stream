// Fetch the video source URL from the domain
const urlParams = new URLSearchParams(window.location.search);
const videoSrc = urlParams.get('videourl');

// Update the video source dynamically
if (videoSrc) {
    const videoPlayer = document.getElementById('my-video');
    const source = document.createElement('source');
    source.src = videoSrc;
    source.type = 'application/x-mpegURL'; // Adjust the type if needed
    videoPlayer.appendChild(source);
}
