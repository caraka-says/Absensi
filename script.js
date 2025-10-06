const video = document.getElementById('video');
const statusDiv = document.getElementById('status');
const clockInBtn = document.getElementById('clockInBtn');
Promise.all([
    faceapi.nets.tinyFaceDetector.loadFromUri('/models'),
    faceapi.nets.faceLandmark68Net.loadFromUri('/models'),
    faceapi.nets.faceRecognitionNet.loadFromUri('/models')
]).then(startWebcam);

async function startWebcam() {
    try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: {} });
        video.srcObject = stream;
        statusDiv.textContent = "Status: Kamera Aktif. Silakan posisikan wajah.";
    } catch (err) {
        console.error("Error accessing webcam: ", err);
        statusDiv.textContent = "Error: Tidak dapat mengakses kamera.";
    }
}

video.addEventListener('play', () => {
    const canvas = faceapi.createCanvasFromMedia(video);
    document.querySelector('.video-container').append(canvas);
    const displaySize = { width: video.width, height: video.height };
    faceapi.matchDimensions(canvas, displaySize);

    setInterval(async () => {
        const detections = await faceapi.detectAllFaces(video, new faceapi.TinyFaceDetectorOptions()).withFaceLandmarks().withFaceDescriptors();
        const resizedDetections = faceapi.resizeResults(detections, displaySize);
        canvas.getContext('2d').clearRect(0, 0, canvas.width, canvas.height);
        faceapi.draw.drawDetections(canvas, resizedDetections);
        
        if (detections.length > 0) {
            statusDiv.textContent = "Status: Wajah Terdeteksi!";
        } else {
            statusDiv.textContent = "Status: Tidak ada wajah terdeteksi.";
        }

    }, 100);
});

clockInBtn.addEventListener('click', () => {
    alert("Tombol Absen Masuk Diklik! Logika verifikasi akan dijalankan di sini.");
});
