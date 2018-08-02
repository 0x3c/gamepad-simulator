import React, { Component } from "react";
import PropTypes from "prop-types";
import { Icon } from "antd";
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
      enableGo,
      disableGo,
      enableBack,
      disableBack,
      style
    } = this.props;
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          fontSize: 40,
          ...style
        }}
      >
        <div
          style={{
            width: 100,
            height: 100,
            display: "flex",
            flexDirection: "column"
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
              <Icon type="arrow-up" />
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
              <Icon type="arrow-left" />
            </GamaPadButton>

            <GamaPadButton onStart={enableRight} onEnd={disableRight}>
              <Icon type="arrow-right" />
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
              <Icon type="arrow-down" />
            </GamaPadButton>
          </div>
        </div>
        <div
          style={{
            width: 100,
            height: 100,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center"
          }}
        >
          <GamaPadButton onStart={enableGo} onEnd={disableGo}>
            <Icon type="up" />
          </GamaPadButton>
          <GamaPadButton onStart={enableBack} onEnd={disableBack}>
            <Icon type="down" />
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
  enableGo: PropTypes.func,
  disableGo: PropTypes.func,
  enableBack: PropTypes.func,
  disableBack: PropTypes.func,
  style: PropTypes.object
};
