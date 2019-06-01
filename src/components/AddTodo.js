import React, { Component } from "react";

export class AddTodo extends Component {
  state = {
    title: ""
  };

  onSubmit = e => {
    e.preventDefault();
    this.props.addTodo(this.state.title);
    this.setState({ title: "" });
  };

  // [e.target.value] is linked to <input name: title> or any othe field in the state the have "name" as reference.
  onChange = e => this.setState({ title: [e.target.value] });

  render() {
    return (
      <form onSubmit={this.onSubmit} style={{ display: "flex" }}>
        <input
          style={{ flex: "10" }}
          type="text"
          name="title"
          placeholder="Add to do..."
          value={this.state.title}
          onChange={this.onChange}
        />
        <input
          type="submit"
          value="Submit"
          className="btn"
          style={{ flex: "1" }}
        />
      </form>
    );
  }
}

export default AddTodo;
