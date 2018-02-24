window.onload = function () {
    try {
        TagCanvas.Start('myCanvas', 'tags', {
            textColour: '#fff',
            outlineColour: null,
            bgOutlineThickness: 0,
            reverse: true,
            depth: 0.8,
            maxSpeed: 0.015,
            hideTags: true,
            wheelZoom: false,
            pinchZoom: false
        });
    } catch (e) {
        // something went wrong, hide the canvas container
        document.getElementById('myCanvasContainer').style.display = 'none';
    }
};