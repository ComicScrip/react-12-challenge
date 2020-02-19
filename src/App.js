import React, { Component } from 'react';
import TabSelector from './TabSelector';
import './App.css';

const Home = () => <p>This is the Home component!</p>;
const About = () => <p>This challenge is about tabs!</p>;
const Contact = () => <p>Feel free to contact us!</p>;
const Error = () => <p>Something went <strong>wrong</strong>!</p>;

const subpages = {
  home: <Home/>,
  about: <About/>,
  contact: <Contact/>,
  error: <Error/>
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeId: 'home'
    };
  }

  getTabContent() {
    return subpages[this.state.activeId]
  }

  handleChangeTab = (event) => {
    const buttonId = event.target.id;
    this.setState({ activeId: buttonId });
  }

  render() {
    const {activeId} = this.state;
    return (
      <div className="App">
        <TabSelector activeId={activeId} handleChangeTab={this.handleChangeTab} />
        <div className="App-content">
          {
            this.getTabContent()
          }
        </div>
      </div>
    );
  }
}

export default App;
