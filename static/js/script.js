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

document.getElementById('uploadForm').addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent default form submission
    const formData = new FormData();
    const fileInput = document.getElementById('file');
    formData.append('file', fileInput.files[0]);
    
    fetch('/upload', {
        method: 'POST',
        body: formData
    })
    .then(response => response.text())
    .then(data => {
        console.log(data);
        // Display success message or handle response as needed
    })
    .catch(error => {
        console.error('Error uploading file:', error);
        // Display error message or handle error as needed
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const fileInput = document.getElementById('file');
    const demoImg = document.getElementById('demoImg');
    const selectedText = document.getElementById('selected');

    fileInput.addEventListener('change', (event) => {
        const file = event.target.files[0]; // Get the selected file
        const fileUrl = URL.createObjectURL(file); // Create a URL for the selected file
        
        demoImg.src = fileUrl; // Update the src attribute of demoImg to show the selected file
        selectedText.textContent = 'File selected'; // Update the selected text
    });
});
