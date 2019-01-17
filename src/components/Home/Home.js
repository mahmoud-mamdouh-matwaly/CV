import React, { Component } from "react";
import Banner from "../Banner/Banner";
import PropTypes from "prop-types";

class Home extends Component {
  static propTypes = {
    home: PropTypes.array
  };
  static defaultProps = {
    home: []
  };
  render() {
    const { home } = this.props;
    return (
      <>
        <Banner src="./images/1.jpg" alt="Home">
          {home.map((item, index) => {
            return (
              <div key={index}>
                <h1>{item.header}</h1>
                <p>{item.subTitle}</p>
                <p>{item.details}</p>
              </div>
            );
          })}
        </Banner>
      </>
    );
  }
}

export default Home;
