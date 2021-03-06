'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NullVirtualRepeatStrategy = undefined;

var _aureliaTemplatingResources = require('aurelia-templating-resources');



function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NullVirtualRepeatStrategy = exports.NullVirtualRepeatStrategy = function (_NullRepeatStrategy) {
  _inherits(NullVirtualRepeatStrategy, _NullRepeatStrategy);

  function NullVirtualRepeatStrategy() {
    

    return _possibleConstructorReturn(this, _NullRepeatStrategy.apply(this, arguments));
  }

  NullVirtualRepeatStrategy.prototype.instanceChanged = function instanceChanged(repeat) {
    _NullRepeatStrategy.prototype.instanceChanged.call(this, repeat);
    repeat._resetCalculation();
  };

  return NullVirtualRepeatStrategy;
}(_aureliaTemplatingResources.NullRepeatStrategy);