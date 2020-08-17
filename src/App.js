import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import CustomNavbar from "./components/CustomNavbar";
import Footer from "./components/Footer";
import Blog from "./components/Blog";
import Skills from "./components/Skills";
import Aos from "aos";
import "aos/dist/aos.css";


class App extends Component {
  componentDidMount() {
    Aos.init({
      duration: 2000,
    });
  }

  render() {
    return (
      <Router basename={process.env.PUBLIC_URL}>
        <div className="App">
          <CustomNavbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/projects" component={Projects} />
            <Route path="/skills" component={Skills} />
            <Route path="/contact" component={Contact} />
            <Route path="/blog" component={Blog} />
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
