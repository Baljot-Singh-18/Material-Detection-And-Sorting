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

// fileInput.addEventListener('change', (event) => {
//     const file = event.target.files[0];

//     if (file) {
//         const reader = new FileReader();

//     reader.onload = (event) => {
//         resultDiv.style.display = 'block';
//         resultDiv.style.backgroundImage = `url(${event.target.result})`;
//     };

//     reader.readAsDataURL(file);
//     }
// });



