(function () {
    var background = document.getElementById('background');
    var buttons = document.getElementsByClassName('button');
    var button;
    var className;
    var currentClassName = 'transitions';

    background.classList.add(currentClassName);

    var switchClass = function (className) {
        if (currentClassName) {
            background.classList.remove(currentClassName);
        }
        background.classList.add(className);
        currentClassName = className;
        console.log('background', background.classList.contains(className));
    };

    var switchView = function switchView(e) {
        className = e.target.attributes.className.value;
        switchClass(className);
    };
    console.log('buttons', buttons);

    for (var i = 0; i < buttons.length; i++) {
        button = buttons[i];
        console.log('here');
        button.addEventListener('click', switchView);
    }

}());