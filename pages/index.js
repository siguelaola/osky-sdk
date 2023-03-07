import React from "react";
import App from "./App";

class IndexPage extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      message: "",
    };
  }
  
  render() {
    return (
      <App />
    );
  }
}

export default IndexPage;
