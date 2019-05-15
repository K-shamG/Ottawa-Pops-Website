import React, { Component } from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import Header from './Header';
import Footer from './Footer';

class App extends Component {
  render() {
    return (
        <BrowserRouter>
        <React.Fragment>
          <Header />
          <div>
              <Route exact={true} path='/' render={() => (
                  <Header />
              )}/>
          </div>
          <Footer />
        </React.Fragment>
        </BrowserRouter>
    );
  }
}

export default App;