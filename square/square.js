
var activate = function () {
    var object =  document.getElementById('OBJECT');
    var scene = document.getElementById('SCENE');
    var toggleScene = document.getElementsByClassName('toggle-perspective')[0];
    var togglePerserve = document.getElementsByClassName('toggle-perserve')[0];
    var posx;
    var posy;
    var x;
    var y;

    var mouseDown;

    window.addEventListener('mousedown', function () {
        mouseDown = true;
    });

    window.addEventListener('mouseup', function () {
        mouseDown = false;
        x = undefined;
        y = undefined;
    });

    window.addEventListener('mousemove', function (e) {
        if (mouseDown) {
            console.log(x, y, posx, e.clientX, posy, e.clientY);
            x = x !== undefined ? e.clientX - posx : 1;
            y = y !== undefined ? posy - e.clientY : 1;
            posx = e.clientX;
            posy = e.clientY;

            object.style.transform = "rotateY(" + x * 10 + "deg) rotateX(" + y * 10 + "deg)";
        }
    });
    toggleScene.addEventListener('click', function (e) {
        globals.Utils.toggleClass(scene, 'perspective');
    });

    togglePerserve.addEventListener('click', function (e) {
        globals.Utils.toggleClass(object, 'preserve');
    });
};



window.addEventListener('load',function () {
    console.log('here');
    activate();
});
