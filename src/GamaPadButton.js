import React, { Component } from "react";
import PropTypes from "prop-types";
import { Button } from "antd";

export default class GamaPadButton extends Component {
  state = {
    isEnd: true
  };
  componentDidMount() {
    this.instanceNode = this.button._reactInternalFiber.child.stateNode;
  }
  render() {
    const { children, style } = this.props;
    return (
      <Button
        ref={button => (this.button = button)}
        onMouseLeave={this.onMouseLeave}
        onTouchCancel={this._onEnd}
        onTouchEnd={this._onEnd}
        onTouchMove={this.onMove}
        onTouchLeave={e => console.log("leave")}
        onTouchStart={this._onStart}
        onContextMenu={e => e.preventDefault()}
        onMouseDown={this.onMouseDown}
        onMouseUp={this.onMouseUp}
        style={{ cursor: "pointer", ...style }}
        shape="circle"
      >
        {children}
      </Button>
    );
  }
  _onStart = e => {
    this.setState({ isEnd: false });
    this.props.onStart && this.props.onStart(e);
  };
  _onEnd = e => {
    if (this.state.isEnd) {
      return;
    }
    this.setState({ isEnd: true });
    this.props.onEnd && this.props.onEnd(e);
  };
  onMove = e => {
    const { clientX, clientY } = e.touches[0];
    if (this.checkTouchLeave(clientX, clientY)) {
      this._onEnd(e);
    }
  };
  checkTouchLeave = (pointX, pointY) => {
    const {
      top,
      bottom,
      left,
      right
    } = this.instanceNode.getBoundingClientRect();
    if (pointX < left || pointX > right) {
      return true;
    }
    if (pointY < top || pointY > bottom) {
      return true;
    }
    return false;
  };
  onMouseLeave = e => {
    if (!this.state.isEnd) {
      this.onMouseUp(e);
    }
  };
  onMouseDown = e => {
    if ("ontouchstart" in window) {
      return false;
    }
    this.setState({ isEnd: false });
    this.props.onStart && this.props.onStart(e);
  };
  onMouseUp = e => {
    if ("ontouchstart" in window) {
      return false;
    }
    this.setState({ isEnd: true });
    this.props.onEnd && this.props.onEnd(e);
  };
}
GamaPadButton.propTypes = {
  onStart: PropTypes.func.isRequired,
  onEnd: PropTypes.func.isRequired,
  style: PropTypes.object
};
