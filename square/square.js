
var activate = function () {
    var object =  document.getElementById('OBJECT');

    var posx;
    var posy;
    var x;
    var y;

    var mouseDown;

    var moveBackground = function (x, y) {
        console.log(document.body);
//            document.body.style.left = x;
//            document.body.style.top = y;
        document.body.style.transform = "left:" + x + "px";
    };

    window.addEventListener('mousedown', function () {
        moveBackground('500px', '500px');
        mouseDown = true;
    });

    window.addEventListener('mouseup', function () {
        mouseDown = false;
        x = undefined;
        y = undefined;
    });

    window.addEventListener('mousemove', function (e) {
//           console.log('object');
        if (mouseDown) {
//               console.log('this is e', e.clientX, e.clientY, object);
            console.log(x, y, posx, e.clientX, posy, e.clientY);
            x = x !== undefined ? e.clientX - posx : 1;
            y = y !== undefined ? posy - e.clientY : 1;
            posx = e.clientX;
            posy = e.clientY;

//               setTimeout(function () {
            object.style.transform = "rotateY(" + x * 10 + "deg) rotateX(" + y * 10 + "deg)";
//               }, 20);
        }
    });
};

window.addEventListener('load',function () {
    console.log('here');
    activate();
});