import { Component } from "react";

import "./App.css";

import Contacts from "./components/Contacts";

class App extends Component {
  state = {
    contacts: [],
    name: "",
    number: "",
  };

  render() {
    return <Contacts />;
  }
}

export default App;
