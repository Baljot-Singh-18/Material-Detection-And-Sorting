var video = document.getElementById('webcam');
const controlsBtn = document.getElementById('controlsBtn');
const notPlaying = document.getElementById('notPlaying');
let stream = null; // Variable to store the video stream

navigator.mediaDevices.getUserMedia({ video: true })
.then(newStream => {
    video.srcObject = newStream;
    stream = newStream;
    controlsBtn.textContent = 'Stop Detection'; // Update button text
})
.catch(err => {
    console.error('Error accessing webcam:', err);
});

controlsBtn.addEventListener('click', () => {
    if (stream) {
        // Stop video streaming
        stream.getTracks().forEach(track => track.stop());
        video.srcObject = null; // Clear the srcObject
        stream = null;
        controlsBtn.textContent = 'Start Detection'; // Update button text
        notPlaying.style.display = 'block';
        video.style.display = 'none';

    } else {
        // Start video streaming
        navigator.mediaDevices.getUserMedia({ video: true })
            .then(newStream => {
                video.srcObject = newStream;
                stream = newStream;
                controlsBtn.textContent = 'Stop Detection'; // Update button text
                video.style.display = 'block';
                notPlaying.style.display = 'none'
            })
            .catch(err => {
                console.error('Error accessing webcam:', err);
            });
    }
});
