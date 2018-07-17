import React, { Component } from 'react';
import { BrowserRouter} from 'react-router-dom';
import { Provider } from 'react-redux';

import { store } from './store';
import { Header } from './components/common/header';
import { Logo } from './components/logo';
import { Textbox } from './components/textbox';

class App extends Component {
  //Main application component
  render() {
    return (
      <Provider store={store}>
      <BrowserRouter>
        <div className="App">
          <Header />
          <Logo />
          <Textbox />
        </div>
      </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
