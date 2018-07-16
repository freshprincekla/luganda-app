import React, { Component } from 'react';
import { BrowserRouter} from 'react-router-dom';
import { Header } from './components/common/header';
import { Logo } from './components/logo';
import { Textbox } from './components/textbox';

class App extends Component {
  //Main application component
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Header />
          <Logo />
          <Textbox />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
