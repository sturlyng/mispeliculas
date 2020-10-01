import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import HomePage from '../paginas/HomePage';
import PeliculaDetalle from '../paginas/PeliculaDetalle';
import Header from './Header';
import Footer from './Footer';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Header />
          <Route exact path="/" component={HomePage} />
          <Route path="/detalles/:peliculaid" component={PeliculaDetalle} />
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
