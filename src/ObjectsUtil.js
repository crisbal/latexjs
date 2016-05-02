import util from "util";
import lescape from "escape-latex";

String.prototype.format = function(){
  var args = Array.prototype.slice.call(arguments);
  args.unshift(this.valueOf());
  return util.format.apply(util, args);
};

var addStringProperty = function (name, func) {
    String.prototype.__defineGetter__(name, func);
};


var addArrayProperty = function (name, func) {
    String.prototype.__defineGetter__(name, func);
};


addStringProperty('escaped', function () {
    return lescape(this);
});