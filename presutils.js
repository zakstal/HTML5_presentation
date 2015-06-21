//(function () {
    globals = globals || {};

    var utils = globals.Utils = function () {};
    utils.toggleClass = function (obj, className) {
         if (obj.classList.contains(className)) {
             obj.classList.remove(className);
         } else {
             obj.classList.add(className);
         }
    }
//});