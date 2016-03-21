import React from 'react';

class Root extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: ''
    };
  }

  render() {
    return (
      <div>
        <h1>Hello World!!</h1>

        <p>
          Please input your name here:
          <input onChange={this.handleChange} value={this.state.name}/>
        </p>

        <p>Hello, {this.state.name}
        </p>
      </div>
    );
  }

  handleChange(e) {
    var newName = e.target.value();

    this.setState({name: newName});
  }
}

export default Root;
