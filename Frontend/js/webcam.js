// Initialize webcam and link to face landmark detection
const videoElement = document.getElementById('webcam');

navigator.mediaDevices.getUserMedia({ video: true })
    .then(stream => {
        videoElement.srcObject = stream;
    })
    .catch(err => {
        console.error("Error accessing webcam", err);
    });
