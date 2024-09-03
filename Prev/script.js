// Fullscreen button functionality
document.getElementById('fullscreen-pdf-button').addEventListener('click', function(event) {
    event.preventDefault();
    const pdfViewer = document.getElementById('pdf-viewer');
    if (pdfViewer.requestFullscreen) {
        pdfViewer.requestFullscreen();
    } else if (pdfViewer.mozRequestFullScreen) { // Firefox
        pdfViewer.mozRequestFullScreen();
    } else if (pdfViewer.webkitRequestFullscreen) { // Chrome, Safari and Opera
        pdfViewer.webkitRequestFullscreen();
    } else if (pdfViewer.msRequestFullscreen) { // IE/Edge
        pdfViewer.msRequestFullscreen();
    }
});
