import React, { Component } from "react";
import "./App.css";
import {
  // BrowserRouter as Router,
  Route,
  HashRouter,
  Switch,
} from "react-router-dom";
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
      <div className="App">
        <CustomNavbar />
        <HashRouter basename="/davidshammas">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/projects" component={Projects} />
            <Route path="/skills" component={Skills} />
            <Route path="/contact" component={Contact} />
            <Route path="/blog" component={Blog} />
          </Switch>
          <Footer />
        </HashRouter>
      </div>
    );
  }
}

export default App;
