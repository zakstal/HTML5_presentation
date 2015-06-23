function draw() {
    var canvas = document.getElementById('canvas');
    if (canvas.getContext) {
        var ctx = canvas.getContext('2d');

        var path=new Path2D();
        path.moveTo(75,50);
        path.lineTo(150,150);
        path.lineTo(200,110);
        path.lineTo(250,200);
        path.lineTo(210,450);
        ctx.lineWidth = 6;
        ctx.strokeStyle = "red";
        ctx.stroke(path);

        var path=new Path2D();
        path.lineTo(180,450);
        path.lineTo(200,350);
        path.lineTo(310,150);
        ctx.lineWidth = 6;
        ctx.strokeStyle = "blue";
        ctx.stroke(path);

    //    ctx.fillStyle(blue);
    //    ctx.fillRect(25,25,100,100);
    //    ctx.clearRect(45,45,60,60);
    //    ctx.strokeRect(50,50,50,50);
    }
}


draw();