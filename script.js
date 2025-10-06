body {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin: 0;
    font-family: Arial, sans-serif;
    background-color: #f0f2f5;
    color: #333;
}

.container {
    text-align: center;
    background-color: white;
    padding: 30px;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

h1 {
    margin-top: 0;
    color: #1a73e8;
}

.video-container {
    position: relative;
    margin: 20px auto;
    width: 720px;
    height: 560px;
    border: 2px solid #ddd;
    border-radius: 8px;
    overflow: hidden;
}

video {
    position: absolute;
    top: 0;
    left: 0;
}

canvas {
    position: absolute;
    top: 0;
    left: 0;
}

.action-buttons button {
    padding: 12px 25px;
    font-size: 16px;
    margin: 10px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    background-color: #1a73e8;
    color: white;
    transition: background-color 0.3s;
}

.action-buttons button:hover {
    background-color: #155ab6;
}

#status {
    margin-top: 20px;
    font-size: 18px;
    font-weight: bold;
    color: #555;
}
