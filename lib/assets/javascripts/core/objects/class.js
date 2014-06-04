angular.module('core').factory('Class', [
  function () {
    'use strict';

    var Class = function () {};

    Class.extend = function (prototypeMembers, staticMembers) {
      var Class, classPrototype, Super = this, superPrototype = this.prototype;

      if (prototypeMembers && prototypeMembers.hasOwnProperty('constructor')) {
        Class = prototypeMembers.constructor;
      } else {
        Class = function () {
          return Super.apply(this, arguments);
        };
      }

      classPrototype = Object.create(superPrototype, {
        __super__: { value: superPrototype }
      });

      return _.extend(Class, Super, staticMembers, {
        prototype: _.extend(classPrototype, prototypeMembers, {
          constructor: Class
        })
      });
    };

    return Class;
  }
]);
