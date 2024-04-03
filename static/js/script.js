var video = document.getElementById('webcam');
const fileInput = document.getElementById('file');
const resultDiv = document.getElementById('result');

navigator.mediaDevices.getUserMedia({ video: true })
    .then(stream => {
        video.srcObject = stream;
    })
    .catch(err => {
        console.error('Error accessing webcam:', err);
    });




