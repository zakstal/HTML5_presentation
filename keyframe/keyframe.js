(function () {
    var jumper = document.getElementById('jumper');
    var toggleMovit = document.getElementById('toggleMovit');
    var toggleJump = document.getElementById('toggleJump');
    var both = document.getElementById('both');

    toggleJump.addEventListener('click', function (e) {
        globals.Utils.toggleClass(jumper, 'jump');
    });

    toggleMovit.addEventListener('click', function (e) {
        globals.Utils.toggleClass(jumper, 'moveit');
    });

    both.addEventListener('click', function (e) {
        globals.Utils.toggleClass(jumper, 'both');
    });
}());