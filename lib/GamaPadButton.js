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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var GamaPadButton = function (_Component) {
  _inherits(GamaPadButton, _Component);

  function GamaPadButton() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, GamaPadButton);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = GamaPadButton.__proto__ || Object.getPrototypeOf(GamaPadButton)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      isEnd: true
    }, _this.onMove = function (e) {
      var _e$touches$ = e.touches[0],
          clientX = _e$touches$.clientX,
          clientY = _e$touches$.clientY;

      if (_this.checkTouchLeave(clientX, clientY)) {
        // console.log(Object.keys(e).filter(key => typeof e[key] === "function"));
        console.log(e.identifier);
      }
    }, _this.checkTouchLeave = function (pointX, pointY) {
      var _this$instanceNode$ge = _this.instanceNode.getBoundingClientRect(),
          top = _this$instanceNode$ge.top,
          bottom = _this$instanceNode$ge.bottom,
          left = _this$instanceNode$ge.left,
          right = _this$instanceNode$ge.right;

      if (pointX < left || pointX > right) {
        return true;
      }
      if (pointY < top || pointY > bottom) {
        return true;
      }
      return false;
    }, _this.onMouseLeave = function (e) {
      if (!_this.state.isEnd) {
        _this.onMouseUp(e);
      }
    }, _this.onMouseDown = function (e) {
      if ("ontouchstart" in window) {
        return false;
      }
      _this.setState({ isEnd: false });
      _this.props.onStart && _this.props.onStart(e);
    }, _this.onMouseUp = function (e) {
      if ("ontouchstart" in window) {
        return false;
      }
      _this.setState({ isEnd: true });
      _this.props.onEnd && _this.props.onEnd(e);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(GamaPadButton, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.instanceNode = this.button._reactInternalFiber.child.stateNode;
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          children = _props.children,
          onStart = _props.onStart,
          onEnd = _props.onEnd,
          style = _props.style;

      return _react2.default.createElement(
        _antd.Button,
        {
          ref: function ref(button) {
            return _this2.button = button;
          },
          onMouseLeave: this.onMouseLeave,
          onTouchCancel: onEnd,
          onTouchEnd: onEnd,
          onTouchMove: this.onMove,
          onTouchLeave: function onTouchLeave(e) {
            return console.log("leave");
          },
          onTouchStart: onStart,
          onContextMenu: function onContextMenu(e) {
            return e.preventDefault();
          },
          onMouseDown: this.onMouseDown,
          onMouseUp: this.onMouseUp,
          style: _extends({ cursor: "pointer" }, style),
          shape: "circle"
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