import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { One } from "./pages/One";
import { OneResult } from "./pages/OneResult";
import { TwoResult } from "./pages/TwoResult";
import { Top } from "./pages/Top";
import { Two } from "./pages/Two";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Contact } from "./pages/Contact";
import { About } from "./pages/About";
import { NoMatch } from "./pages/NoMatch";

export const App: React.FC = () => {
  return (
    <div className="top-container">
      <Router>
        <Header />
        <div className="container">
          <Switch>
            <Route exact path="/" component={Top} />
            <Route exact path="/one" component={One} />
            <Route exact path="/two" component={Two} />
            <Route exact path="/one-result" component={OneResult} />
            <Route exact path="/two-result" component={TwoResult} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/about" component={About} />
            <Route component={NoMatch} />
          </Switch>
        </div>
        <Footer />
      </Router>
    </div>
  );
};
