import React, { Component } from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

class Modal extends Component {
  static propTypes = {
    closeButton: PropTypes.bool,
    overlayClose: PropTypes.bool,
    onClose: PropTypes.func
  };
  static defaultProps = {
    closeButton: true,
    overlayClose: true,
    onClose: () => null
  };
  closeModal = () => {
    this.props.onClose();
  };
  render() {
    const { closeButton, overlayClose } = this.props;
    console.log(this.props);
    return ReactDOM.createPortal(
      <div className="about__modal">
        <div className="about__modal__content ">
          {this.props.children}

          {closeButton && (
            <button onClick={this.closeModal}>
              <i>*</i>
            </button>
          )}
        </div>

        <div
          className="about__modal__overlay"
          onClick={overlayClose ? this.closeModal : () => null}
        />
      </div>,
      window.modals
    );
  }
}

export default Modal;
