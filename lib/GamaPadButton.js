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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Button = function (_React$PureComponent) {
  _inherits(Button, _React$PureComponent);

  function Button() {
    _classCallCheck(this, Button);

    return _possibleConstructorReturn(this, (Button.__proto__ || Object.getPrototypeOf(Button)).apply(this, arguments));
  }

  _createClass(Button, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          children = _props.children,
          style = _props.style,
          params = _objectWithoutProperties(_props, ["children", "style"]);

      return _react2.default.createElement(
        "div",
        _extends({
          style: _extends({
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            minWidth: 20,
            minHeight: 20
          }, style)
        }, params),
        children
      );
    }
  }]);

  return Button;
}(_react2.default.PureComponent);

var GamaPadButton = function (_Component) {
  _inherits(GamaPadButton, _Component);

  function GamaPadButton() {
    var _ref;

    var _temp, _this2, _ret;

    _classCallCheck(this, GamaPadButton);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this2 = _possibleConstructorReturn(this, (_ref = GamaPadButton.__proto__ || Object.getPrototypeOf(GamaPadButton)).call.apply(_ref, [this].concat(args))), _this2), _this2.state = {
      isEnd: true
    }, _this2._onStart = function (e) {
      _this2.setState({ isEnd: false });
      _this2.props.onStart && _this2.props.onStart(e);
    }, _this2._onEnd = function (e) {
      if (_this2.state.isEnd) {
        return;
      }
      _this2.setState({ isEnd: true });
      _this2.props.onEnd && _this2.props.onEnd(e);
    }, _this2.onMove = function (e) {
      var _e$touches$ = e.touches[0],
          clientX = _e$touches$.clientX,
          clientY = _e$touches$.clientY;

      if (_this2.checkTouchLeave(clientX, clientY)) {
        _this2._onEnd(e);
      }
    }, _this2.checkTouchLeave = function (pointX, pointY) {
      var _this2$instanceNode$g = _this2.instanceNode.getBoundingClientRect(),
          top = _this2$instanceNode$g.top,
          bottom = _this2$instanceNode$g.bottom,
          left = _this2$instanceNode$g.left,
          right = _this2$instanceNode$g.right;

      if (pointX < left || pointX > right) {
        return true;
      }
      if (pointY < top || pointY > bottom) {
        return true;
      }
      return false;
    }, _this2.onMouseLeave = function (e) {
      if (!_this2.state.isEnd) {
        _this2.onMouseUp(e);
      }
    }, _this2.onMouseDown = function (e) {
      if ("ontouchstart" in window) {
        return false;
      }
      _this2.setState({ isEnd: false });
      _this2.props.onStart && _this2.props.onStart(e);
    }, _this2.onMouseUp = function (e) {
      if ("ontouchstart" in window) {
        return false;
      }
      _this2.setState({ isEnd: true });
      _this2.props.onEnd && _this2.props.onEnd(e);
    }, _temp), _possibleConstructorReturn(_this2, _ret);
  }

  _createClass(GamaPadButton, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.instanceNode = this.button && this.button._reactInternalFiber.child.stateNode;
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var _props2 = this.props,
          children = _props2.children,
          style = _props2.style;

      return _react2.default.createElement(
        Button,
        {
          ref: function ref(button) {
            return _this3.button = button;
          },
          onMouseLeave: this.onMouseLeave,
          onTouchCancel: this._onEnd,
          onTouchEnd: this._onEnd,
          onTouchMove: this.onMove,
          onTouchLeave: function onTouchLeave(e) {
            return console.log("leave");
          },
          onTouchStart: this._onStart,
          onContextMenu: function onContextMenu(e) {
            return e.preventDefault();
          },
          onMouseDown: this.onMouseDown,
          onMouseUp: this.onMouseUp,
          style: _extends({ cursor: "pointer" }, style)
        },
        children
      );
    }
  }]);

  return GamaPadButton;
}(_react.Component);

exports.default = GamaPadButton;

GamaPadButton.propTypes = {
  onStart: _propTypes2.default.func.isRequired,
  onEnd: _propTypes2.default.func.isRequired,
  style: _propTypes2.default.object
};