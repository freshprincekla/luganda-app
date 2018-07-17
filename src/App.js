import React, { Component } from 'react';
import { BrowserRouter} from 'react-router-dom';
import { Provider } from 'react-redux';

import { store } from './store';
import { Header } from './components/header/header';
import { Logo } from './components/logo';
import { Textbox } from './components/textbox';
import { ButtonGrid } from './components/buttongrid';

class App extends Component {
  //Main application component
  constructor(){
    super();
    this.state = { english: false};
    this.handleLanguageChange = this.handleLanguageChange.bind(this);
  }
  handleLanguageChange(english){
    this.setState({ english })
  }
  render() {
    return (
      <Provider store={store}>
      <BrowserRouter>
        <div className="App">
          <Header handleLanguageChange={this.handleLanguageChange}/>
          <Logo />
          <Textbox />
          <ButtonGrid english={this.state.english} />
        </div>
      </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
