// const video = document.getElementById('camera');
// const cameraBtn = document.getElementById('camera-btn');
// let stream;

// function startCamera() {
//     navigator.mediaDevices.getUserMedia({ video: true })
//         .then(mediaStream => {
//             stream = mediaStream;
//             video.srcObject = stream;
//             video.classList.remove('hidden');
//             cameraBtn.textContent = 'Stop Camera';
//         })
//         .catch(err => {
//             console.error('Error accessing the camera: ', err);
//         });
// }

// function stopCamera() {
//     video.classList.add('hidden');
//     video.srcObject = null;
//     cameraBtn.textContent = 'Start Camera';
//     if (stream) {
//         stream.getTracks().forEach(track => track.stop());
//     }
// }

// cameraBtn.addEventListener('click', () => {
//     if (cameraBtn.textContent === 'Start Camera') {
//         startCamera();
//     } else {
//         stopCamera();
//     }
// });


// Example JavaScript functionality

// Ensure DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    // Add event listeners or other functionality here

    document.getElementById('startFaceDetection').addEventListener('click', function() {
        const iframe = document.getElementById('faceDetectionIframe');
        const button = this;
        if (iframe.style.display === 'none' || iframe.style.display === '') {
            iframe.style.display = 'block';
            button.textContent = 'Stop Face Detection';
        } else {
            iframe.style.display = 'none';
            button.textContent = 'Start Face Detection';
        }
    });

    document.getElementById('startLandmarkDetection').addEventListener('click', function() {
        const iframe = document.getElementById('landmarkDetectionIframe');
        const button = this;
        if (iframe.style.display === 'none' || iframe.style.display === '') {
            iframe.style.display = 'block';
            button.textContent = 'Stop Landmark Detection';
        } else {
            iframe.style.display = 'none';
            button.textContent = 'Start Landmark Detection';
        }
    });
});
