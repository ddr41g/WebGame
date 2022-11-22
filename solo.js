window.onload = function () {
    let btn = document.getElementById("jump");
    let count = 0;

    btn.onclick = function () {
        count += 1;
    }
}

window.onload = function () {
    var canvas = document.getElementById("canvas");
    var context = canvas.getContext("2d");

    context.beginPath();
    context.moveTo(0, 0);
    context.lineTo(600, 400);
    context.moveTo(600, 0);
    context.lineTo(0, 400);
    context.moveTo(150,250);
    context.rect(150,100,300,200);
    
    //context.beginPath();
    // context.arc(150,100,50,0.5*Math.PI,0,1);
    context.lineWidth=20;
    context.strokeStyle="yellow";
    context.stroke();
    context.fillStyle="blue";
    context.fill();

    context.beginPath();
    var x = 300;
    var y = 350;

    context.arc(x, y, 50, 0, 2 * Math.PI);
    context.fillStyle="#111111";
    context.fill();

    context.font="42px Arial";

    context.fillText("READY...",150,80);
};