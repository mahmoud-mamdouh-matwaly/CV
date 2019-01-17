import React from "react";

export const DataContext = React.createContext();

export class DataProvider extends React.Component {
  state = {
    home: [
      {
        header: "Hi, I’m Mahmoud Mamdouh. Nice to meet you.",
        subTitle:
          "I’m UI Developer, Junior Frontend Developer and I love what I do.",
        details:
          "Since beginning my journey as a UI Development nearly 2 years ago, I've done remote work for agencies, startups, and collaborated with talented people . I'm quietly confident, and perpetually improving my chops."
      }
    ],
    about: [
      {
        header: "About me",
        subTitle: "Everything started with passion to web technologies",
        details: [
          {
            years: "2018",
            company: "kinetics digital",
            position: "UI Developer",
            jobType: "Full Time",
            detailsJob: `
              "kinetics digital",
              "Convert PSDs to real clean code",
              "Built the UI for the database sign up application in HTML5",
              "Fixing bugs and customizing codes at big project using laravel"`
          },
          {
            years: "2017",
            company: "RiseUp",
            position: "UI Developer",
            jobType: "Part Time",
            detailsJob: `
              "RiseUp",
              "Convert PSDs to real clean code",
              "Built the UI for the database sign up application in HTML5",
              "Fixing bugs and customizing codes at big project using laravel ."`
          },
          {
            years: "2017",
            company: "FastKood",
            position: "UI Developer",
            jobType: "Full Time",
            detailsJob: `
              "fastKood",
              "Convert PSDs to real clean code",
              "Built the UI for the database sign up application in HTML5",
              "Fixing bugs and customizing codes at big project using laravel ."`
          },
          {
            years: "2016",
            company: "kiteAgency",
            position: "UI Developer",
            jobType: "Part Time",
            detailsJob: `
              "kiteAgency",
              "Convert PSDs to real clean code",
              "Built the UI for the database sign up application in HTML5",
              "Fixing bugs and customizing codes at big project using laravel ."`
          }
        ]
      }
    ]
  };
  render() {
    return (
      <DataContext.Provider value={{ ...this.state }}>
        {this.props.children}
      </DataContext.Provider>
    );
  }
}

export default DataProvider;
