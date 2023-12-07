document.addEventListener("DOMContentLoaded", function() {
    const canvas = document.getElementById("drawingCanvas");
    const context = canvas.getContext("2d");

    let isDrawing = false;
    let currentTool = "pencil";

    function startDrawing(e) {
        isDrawing = true;
        draw(e);
    }

    function stopDrawing() {
        isDrawing = false;
        context.beginPath();
    }

    function draw(e) {
        if (!isDrawing) return;

        context.lineWidth = 5;
        context.lineCap = "round";

        if (currentTool === "pencil") {
            context.strokeStyle = "#000"; // Pencil color
        } else if (currentTool === "eraser") {
            context.strokeStyle = "#fff"; // Eraser color
        }

        context.lineTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);
        context.stroke();
        context.beginPath();
        context.moveTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);
    }

    function switchTool(tool) {
        currentTool = tool;
    }

    function clearCanvas() {
        context.clearRect(0, 0, canvas.width, canvas.height);
    }

    canvas.addEventListener("mousedown", startDrawing);
    canvas.addEventListener("mouseup", stopDrawing);
    canvas.addEventListener("mousemove", draw);

    document.getElementById("pencilTool").addEventListener("click", function() {
        switchTool("pencil");
    });

    document.getElementById("eraserTool").addEventListener("click", function() {
        switchTool("eraser");
    });

    document.getElementById("clearCanvas").addEventListener("click", clearCanvas);
});
