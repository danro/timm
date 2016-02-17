// Generated by CoffeeScript 1.10.0
(function() {
  var _, addDefaults, addFirst, addLast, merge, removeAt, replaceAt, set, setIn;

  _ = require('lodash');

  addLast = function(array, val) {
    return array.concat([val]);
  };

  addFirst = function(array, val) {
    return [val].concat(array);
  };

  removeAt = function(array, idx) {
    return array.slice(0, idx).concat(array.slice(idx + 1));
  };

  replaceAt = function(array, idx, newVal) {
    return array.slice(0, idx).concat([newVal]).concat(array.slice(idx + 1));
  };

  merge = function(obj1, obj2) {
    var fSomethingNew, i, key, keys2, len;
    if (obj2 == null) {
      return obj1;
    }
    keys2 = Object.keys(obj2);
    if (!keys2.length) {
      return obj1;
    }
    fSomethingNew = false;
    for (i = 0, len = keys2.length; i < len; i++) {
      key = keys2[i];
      if (obj1[key] !== obj2[key]) {
        fSomethingNew = true;
        break;
      }
    }
    if (!fSomethingNew) {
      return obj1;
    }
    return _.extend(_.clone(obj1), obj2);
  };

  addDefaults = function(obj, defaults) {
    if ((defaults == null) || !Object.keys(defaults).length) {
      return obj;
    }
    return _.defaults(_.clone(obj), defaults);
  };

  set = function(obj1, key, val) {
    var obj3;
    if (obj1[key] === val) {
      return obj1;
    }
    return _.extend({}, obj1, (
      obj3 = {},
      obj3["" + key] = val,
      obj3
    ));
  };

  setIn = function(obj, path, val, idx) {
    var key, newValue;
    if (idx == null) {
      idx = 0;
    }
    key = path[idx];
    if (idx === path.length - 1) {
      newValue = val;
    } else {
      newValue = _solImmutableTimm.setIn(obj[key], path, val, idx + 1);
    }
    return timm.set(obj, key, newValue);
  };

  module.exports = {
    addLast: addLast,
    addFirst: addFirst,
    removeAt: removeAt,
    replaceAt: replaceAt,
    merge: merge,
    addDefaults: addDefaults,
    set: set,
    setIn: setIn
  };

}).call(this);
