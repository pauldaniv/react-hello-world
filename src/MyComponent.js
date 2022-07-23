import React from "react";

class MyComponent extends React.Component {
  render() {
    return <h1>Hello, change 1, {this.props.name}</h1>
  }
}

export default MyComponent;
