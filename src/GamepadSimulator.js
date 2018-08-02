import React, { Component } from "react";
import PropTypes from "prop-types";
import GamaPadButton from "./GamaPadButton";

export default class GamepadSimulator extends Component {
  timer = null;
  state = {
    count: 0
  };
  render() {
    const {
      enableUp,
      disableUp,
      enableDown,
      disableDown,
      enableLeft,
      disableLeft,
      enableRight,
      disableRight,
      enableForward,
      disableForward,
      enableBackward,
      disableBackward,
      style,
      blockStyle
    } = this.props;
    const {
      upNode,
      downNode,
      leftNode,
      rightNode,
      forwardNode,
      backwardNode
    } = this.props;
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          fontSize: 20,
          ...style
        }}
      >
        <div
          style={{
            width: 100,
            height: 100,
            display: "flex",
            flexDirection: "column",
            ...blockStyle
          }}
        >
          <div
            style={{
              flex: 1,
              display: "flex",
              justifyContent: "center"
            }}
          >
            <GamaPadButton onStart={enableUp} onEnd={disableUp}>
              {upNode}
            </GamaPadButton>
          </div>
          <div
            style={{
              flex: 1,
              display: "flex",
              justifyContent: "space-between"
            }}
          >
            <GamaPadButton onStart={enableLeft} onEnd={disableLeft}>
              {leftNode}
            </GamaPadButton>

            <GamaPadButton onStart={enableRight} onEnd={disableRight}>
              {rightNode}
            </GamaPadButton>
          </div>
          <div
            style={{
              flex: 1,
              display: "flex",
              justifyContent: "center"
            }}
          >
            <GamaPadButton onStart={enableDown} onEnd={disableDown}>
              {downNode}
            </GamaPadButton>
          </div>
        </div>
        <div
          style={{
            width: 100,
            height: 100,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            ...blockStyle
          }}
        >
          <GamaPadButton onStart={enableForward} onEnd={disableForward}>
            {forwardNode}
          </GamaPadButton>
          <GamaPadButton onStart={enableBackward} onEnd={disableBackward}>
            {backwardNode}
          </GamaPadButton>
        </div>
      </div>
    );
  }
}

GamepadSimulator.propTypre = {
  enableUp: PropTypes.func,
  disableUp: PropTypes.func,
  enableDown: PropTypes.func,
  disableDown: PropTypes.func,
  enableLeft: PropTypes.func,
  disableLeft: PropTypes.func,
  enableRight: PropTypes.func,
  disableRight: PropTypes.func,
  enableForward: PropTypes.func,
  disableForward: PropTypes.func,
  enableBackward: PropTypes.func,
  disableBackward: PropTypes.func,
  style: PropTypes.object,
  blockStyle: PropTypes.object,

  upNode: PropTypes.node,
  downNode: PropTypes.node,
  leftNode: PropTypes.node,
  rightNode: PropTypes.node,
  forwardNode: PropTypes.node,
  backwardNode: PropTypes.node
};
