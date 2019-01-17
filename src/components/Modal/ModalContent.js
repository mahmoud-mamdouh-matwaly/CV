import React, { Component } from "react";

class ContentModal extends Component {
  render() {
    return <div className="modal__box">{this.props.details}</div>;
  }
}

export default ContentModal;
