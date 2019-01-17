import React, { Component } from "react";
import Banner from "../Banner/Banner";
import Modal from "../Modal/Modal";
import ContentModal from "../Modal/ModalContent";
import PropTypes from "prop-types";
import "./About.css";
class About extends Component {
  static propTypes = {
    about: PropTypes.array
  };
  static defaultProps = {
    about: []
  };
  state = {
    modalVisible: false
  };

  render() {
    console.log(this.props.about);
    const { about } = this.props;
    const { modalVisible } = this.state;
    return (
      <>
        <Banner src="./images/3.jpg" alt="about">
          {about.map((item, index) => {
            return (
              <div key={index}>
                <h1>{item.header}:</h1>
                <p>{item.subTitle}:</p>
                <ul className="about__list">
                  {item.details.map((res, index) => {
                    return (
                      <div key={index}>
                        <li>
                          {res.years}-I worked as {res.position} in{" "}
                          {res.company}
                          <button
                            onClick={() =>
                              this.setState({ modalVisible: true })
                            }
                          >
                            Read More
                          </button>
                        </li>
                        {modalVisible && (
                          <Modal
                            closeButton={true}
                            overlayclose={true}
                            onClose={() =>
                              this.setState({ modalVisible: false })
                            }
                          >
                            <ContentModal details={res.detailsJob} />
                          </Modal>
                        )}
                      </div>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </Banner>
      </>
    );
  }
}

export default About;
