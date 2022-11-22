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