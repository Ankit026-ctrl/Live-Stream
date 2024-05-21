document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const videoSrc = urlParams.get('videourl');

    if (videoSrc) {
        // Define multiple resolution options
        const sources = [
            {
                src: videoSrc + '&resolution=360p',
                type: 'application/x-mpegURL',
                label: '360p',
                res: 360
            },
            {
                src: videoSrc + '&resolution=480p',
                type: 'application/x-mpegURL',
                label: '480p',
                res: 480
            },
            {
                src: videoSrc + '&resolution=720p',
                type: 'application/x-mpegURL',
                label: '720p',
                res: 720
            },
            // Add more resolution options as needed
        ];

        // Sort sources array based on resolution in ascending order
        sources.sort((a, b) => a.res - b.res);

        // Initialize Video.js with resolution options
        const player = videojs('video-container', {
            controls: true,
            autoplay: true,
            sources: sources
        });
    }
});
                          
