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
    context.moveTo(0, 0);
    context.lineTo(600, 400);
    context.moveTo(600, 0);
    context.lineTo(0, 400);
    context.moveTo(150,250);
    context.rect(150,100,300,200);
    context.arc(150,100,50,0.5*Math.PI,0,1);
    context.arc(450,100,50,1*Math.PI,0.5*Math.PI,1);
    context.arc(450,300,50,1.5*Math.PI,1*Math.PI,1);
    context.arc(150,300,50,0,1.5*Math.PI,1);
    

    context.stroke();
};