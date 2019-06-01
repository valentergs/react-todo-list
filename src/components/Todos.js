import React, { Component } from "react";
import TodoItem from "./TodoItem";
import PropTypes from "prop-types";

export class Todos extends Component {
  render() {
    return this.props.todosProps.map(y => (
      <TodoItem
        key={y.id}
        todosProps={y}
        toggleCompleted={this.props.toggleCompleted}
        delTodo={this.props.delTodo}
      />
    ));
  }
}

Todos.propTypes = {
  todosProps: PropTypes.array.isRequired
};

export default Todos;
