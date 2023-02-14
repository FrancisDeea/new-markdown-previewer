import './App.css';
import React from 'react';
import * as components from './components/export';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
        input: event.target.value
    })
  }

  render() {
    return (
      <div>
        <components.GetInput 
          handleChange={this.handleChange}
          value={this.state.input}
        />
        <components.Display 
          input={this.state.input}
        />
      </div>
    )
  }
}

export default App;
