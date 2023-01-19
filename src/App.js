import Bottom from "./components/bottom";
import Head from "./components/head";
import Side from "./components/side";
import React, { Component } from "react";

class App extends Component {
  state = {
    company: [],
    individual: "",
  };

  componentDidMount() {
    fetch(`http://course-api.com/react-tabs-project`)
      .then((res) => res.json())
      .then((val) => {
        console.log(val);
        this.setState({ ...this.state, company: val });
      });

    console.log(this.state.company);
    console.log(this.state.individual);
  }

  Clicked = (cName) => {
    const data = this.state.company.filter((value) => value.company === cName);
    this.setState({ individual: data });
  };
  user = this.state.company.map((val) => {
    return val.company;
  });
  render() {
    return (
      <div className="App">
        <Head />
        <Side {...this.user} datahandler={this.Clicked} />
        <Bottom {...this.state.individual} />;
      </div>
    );
  }
}

export default App;
