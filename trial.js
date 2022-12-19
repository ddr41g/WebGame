window.onload = function () {
    var canvas = document.getElementById("canvas");
    var context = canvas.getContext("2d");
    var xf = 600, yf = 400;
    var xm = 300, ym = 200;
    context.moveTo(xi, yi);
    context.lineTo(xf, yf);
    context.moveTo(xf, yi);
    context.lineTo(xi, yf);

    for (let i = 0; i < 3; i++) {
        context.rect(xm - xf / 4, ym - yf / 4, xf / 2, yf / 2);
        context.arc(xf / 4, yf / 4, 50, 0.5 * Math.PI, 0, 1);
        context.arc(3 * xf / 4, yf / 4, 50, 1 * Math.PI, 0.5 * Math.PI, 1);
        context.arc(3 * xf / 4, 3 * yf / 4, 50, 1.5 * Math.PI, 1 * Math.PI, 1);
        context.arc(xf / 4, 3 * yf / 4, 50, 0, 1.5 * Math.PI, 1);
        context.stroke();

        xf = 3 * xf / 4;
        yf = 3 * yf / 4;

    }


};

// from main

window.onload = function () {
    let btn = document.getElementById("jump");
    let count = 0;

    var canvas = document.getElementById("canvas");
    var context = canvas.getContext("2d");

    context.beginPath();
    context.moveTo(0, 0);
    context.lineTo(600, 400);
    context.moveTo(600, 0);
    context.lineTo(0, 400);
    context.moveTo(150,250);
    context.rect(150,100,300,200);

    btn.onclick = function() {
        count += 1;
        //changing the y position
        y -= 25;
        //clearing the canvas
        context.clearRect(0, 0, 600, 400);
         
        //redrawing the circle   
        context.beginPath();
        context.arc(x, y, 50, 0, 2 * Math.PI);
        context.fillStyle="red";
        context.fill();
    
        //drawing the count value
        context.font = '25px Arial';
        context.fillStyle = 'white';
        context.fillText("Count: " + count, 20, 30);
    }
}

// window.onload = function () {
//     var canvas = document.getElementById("canvas");
//     var context = canvas.getContext("2d");

//     context.beginPath();
//     context.moveTo(0, 0);
//     context.lineTo(600, 400);
//     context.moveTo(600, 0);
//     context.lineTo(0, 400);
//     context.moveTo(150,250);
//     context.rect(150,100,300,200);
    
//     //context.beginPath();
//     // context.arc(150,100,50,0.5*Math.PI,0,1);
//     context.lineWidth=20;
//     context.strokeStyle="yellow";
//     context.stroke();
//     context.fillStyle="blue";
//     context.fill();

//     context.beginPath();
//     var x = 300;
//     var y = 350;

//     context.arc(x, y, 50, 0, 2 * Math.PI);
//     context.fillStyle="#111111";
//     context.fill();

//     context.font="42px Arial";

//     context.fillText("READY...",150,80);
//     context.strokeStyle="green";
//     context.fillStroke("READY...",150,80);

//     var img=new Image();
//     img.src='spidey.jpg';
//     context.drawImage(img,150,100,300,200);
// };