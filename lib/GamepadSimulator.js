"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _antd = require("antd");

var _GamaPadButton = require("./GamaPadButton");

var _GamaPadButton2 = _interopRequireDefault(_GamaPadButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var GamepadSimulator = function (_Component) {
  _inherits(GamepadSimulator, _Component);

  function GamepadSimulator() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, GamepadSimulator);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = GamepadSimulator.__proto__ || Object.getPrototypeOf(GamepadSimulator)).call.apply(_ref, [this].concat(args))), _this), _this.timer = null, _this.state = {
      count: 0
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(GamepadSimulator, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          enableUp = _props.enableUp,
          disableUp = _props.disableUp,
          enableDown = _props.enableDown,
          disableDown = _props.disableDown,
          enableLeft = _props.enableLeft,
          disableLeft = _props.disableLeft,
          enableRight = _props.enableRight,
          disableRight = _props.disableRight,
          enableGo = _props.enableGo,
          disableGo = _props.disableGo,
          enableBack = _props.enableBack,
          disableBack = _props.disableBack,
          style = _props.style;

      return _react2.default.createElement(
        "div",
        {
          style: _extends({
            display: "flex",
            justifyContent: "space-between",
            fontSize: 40
          }, style)
        },
        _react2.default.createElement(
          "div",
          {
            style: {
              width: 100,
              height: 100,
              display: "flex",
              flexDirection: "column"
            }
          },
          _react2.default.createElement(
            "div",
            {
              style: {
                flex: 1,
                display: "flex",
                justifyContent: "center"
              }
            },
            _react2.default.createElement(
              _GamaPadButton2.default,
              { onStart: enableUp, onEnd: disableUp },
              _react2.default.createElement(_antd.Icon, { type: "arrow-up" })
            )
          ),
          _react2.default.createElement(
            "div",
            {
              style: {
                flex: 1,
                display: "flex",
                justifyContent: "space-between"
              }
            },
            _react2.default.createElement(
              _GamaPadButton2.default,
              { onStart: enableLeft, onEnd: disableLeft },
              _react2.default.createElement(_antd.Icon, { type: "arrow-left" })
            ),
            _react2.default.createElement(
              _GamaPadButton2.default,
              { onStart: enableRight, onEnd: disableRight },
              _react2.default.createElement(_antd.Icon, { type: "arrow-right" })
            )
          ),
          _react2.default.createElement(
            "div",
            {
              style: {
                flex: 1,
                display: "flex",
                justifyContent: "center"
              }
            },
            _react2.default.createElement(
              _GamaPadButton2.default,
              { onStart: enableDown, onEnd: disableDown },
              _react2.default.createElement(_antd.Icon, { type: "arrow-down" })
            )
          )
        ),
        _react2.default.createElement(
          "div",
          {
            style: {
              width: 100,
              height: 100,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center"
            }
          },
          _react2.default.createElement(
            _GamaPadButton2.default,
            { onStart: enableGo, onEnd: disableGo },
            _react2.default.createElement(_antd.Icon, { type: "up" })
          ),
          _react2.default.createElement(
            _GamaPadButton2.default,
            { onStart: enableBack, onEnd: disableBack },
            _react2.default.createElement(_antd.Icon, { type: "down" })
          )
        )
      );
    }
  }]);

  return GamepadSimulator;
}(_react.Component);

exports.default = GamepadSimulator;


GamepadSimulator.propTypre = {
  enableUp: _propTypes2.default.func,
  disableUp: _propTypes2.default.func,
  enableDown: _propTypes2.default.func,
  disableDown: _propTypes2.default.func,
  enableLeft: _propTypes2.default.func,
  disableLeft: _propTypes2.default.func,
  enableRight: _propTypes2.default.func,
  disableRight: _propTypes2.default.func,
  enableGo: _propTypes2.default.func,
  disableGo: _propTypes2.default.func,
  enableBack: _propTypes2.default.func,
  disableBack: _propTypes2.default.func,
  style: _propTypes2.default.object
};