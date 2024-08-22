import { initializeFaceLandmarkModel } from './faceLandmark.js';

let model;

async function setupModel() {
    model = await initializeFaceLandmarkModel();
}

function detectFaceLandmarks(videoElement) {
    if (!model) {
        console.error("Model not initialized");
        return;
    }

    model.detect(videoElement).then(landmarks => {
        // Process landmarks
        console.log(landmarks);
    });
}

setupModel();
