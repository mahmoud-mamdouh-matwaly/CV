import React, { Component } from "react";
import Banner from "../Banner/Banner";
class Skills extends Component {
  render() {
    return (
      <>
        <Banner src="./images/3.jpg" alt="Skills">
          <h1>Skills</h1>
          <p>
            Main area of My expertise is UI Development (User Interface of the
            web) and working hard and learnig hard to Front End Development
            (client side of the web)
          </p>
          <p>
            I tend to code things from scratch, and enjoy bringing ideas to life
            in the browser.
          </p>
          <p>
            Languages I speak: HTML,CSS,JS,CSS flexbox layout,CSS Grid Layout
          </p>
          <p>Template engine: Pug</p>
          <p>preprocessor: sass, less, postcss</p>
          <p>Modular Frameworks: OOCSS,BEM,SMACSS</p>
          <p>
            Framework: Bootstrap, reactjs, react Native, angluer, laravel,
            jQuery
          </p>
          <p>Tools: Npm, WebPack, gulp, git, Terminal, babel</p>
        </Banner>
      </>
    );
  }
}

export default Skills;
