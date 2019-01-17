import React, { Component } from "react";
import "./Banner.css";
class Banner extends Component {
  render() {
    const { alt, src, children } = this.props;
    return (
      <div className="banner">
        <img alt={alt} src={src} />
        <div className="banner__title">{children}</div>
      </div>
    );
  }
}

export default Banner;
