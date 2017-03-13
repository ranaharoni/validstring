'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _BaseValidation2 = require('../BaseValidation');

var _BaseValidation3 = _interopRequireDefault(_BaseValidation2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RegExPattern = function (_BaseValidation) {
  _inherits(RegExPattern, _BaseValidation);

  function RegExPattern() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, RegExPattern);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = RegExPattern.__proto__ || Object.getPrototypeOf(RegExPattern)).call.apply(_ref, [this].concat(args))), _this), _this.errorMessage = '%s is not valid.', _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(RegExPattern, [{
    key: 'evaluate',
    value: function evaluate(text, options) {
      if (!(options.pattern instanceof RegExp)) {
        throw new Error('Unexpected "' + _typeof(options.pattern) + '" input, options.pattern is required, and cannot be any other than a RegExp instance.');
      }
      return options.pattern.test(text);
    }
  }]);

  return RegExPattern;
}(_BaseValidation3.default);

exports.default = RegExPattern;