(function () {
  var object = document.getElementById('transform-object');
  var trans = document.getElementsByClassName('trans');

    var currentClassName = '';

    var switchClass = function (className) {
        if (currentClassName) {
            object.classList.remove(currentClassName);
        }
        object.classList.add(className);
        currentClassName = className;
        console.log('object TRANS', object.classList.contains(className));
    };

    var switchView = function switchView(e) {
        className = e.target.attributes.transform.value;
        switchClass(className);
    };
    console.log('trans', trans);

    for (var i = 0; i < trans.length; i++) {
        tran = trans[i];
        console.log('here TRANS');
        tran.addEventListener('click', switchView);
    }
}());