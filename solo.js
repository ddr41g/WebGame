window.onload = function () {
    let btn = document.getElementById("jump");
    let count = 0;

    //     btn.onclick = function() {
    //     count += 1;
    //     //changing the y position
    //     y -= 25;
    //     //clearing the canvas
    //     context.clearRect(0, 0, 600, 400);

    //     //redrawing the circle   
    //     context.beginPath();
    //     context.arc(x, y, 50, 0, 2 * Math.PI);
    //     context.fillStyle="red";
    //     context.fill();

    //     //drawing the count value
    //     context.font = '25px Arial';
    //     context.fillStyle = 'white';
    //     context.fillText("Count: " + count, 20, 30);
    // }

    btn.onclick = function () {
        count += 1;
        y -= 25;
        // x+=25
        function draw() {
            context.clearRect(0, 0, 600, 400);

            context.beginPath();
            context.arc(x, y, 50, 0, 2 * Math.PI);
            context.fillStyle = "red";
            context.fill();

            context.font = '25px Arial';
            context.fillStyle = 'white';
            context.fillText("Count: " + count, 20, 30);
        }
        // function redraw() {
        //     context.clearRect(0, 0, 600, 400);
        //     y += 25;
            
        //     context.beginPath();
        //     context.arc(x, y, 50, 0, 2 * Math.PI);
        //     context.fillStyle = "red";
        //     context.fill();

        // }
        window.requestAnimationFrame(draw);
        // setTimeout(redraw,500);
    }

    var canvas = document.getElementById("canvas");
    var context = canvas.getContext("2d");
    var x = 300;
    var y = 350;

    context.arc(x, y, 50, 0, 2 * Math.PI);
    context.fillStyle = "red";
    context.fill();

    // context.font='25px Arial';
    // context.fillStyle='black';
    // context.fillText("FPS: "+ x,20,30);
    // window.requestAnimationFrame(drawfunction);
}