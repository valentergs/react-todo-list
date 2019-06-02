import React, { Component } from "react";
import PropTypes from "prop-types";

export class TodoItem extends Component {
  getStyle = () => {
    return {
      textDecoration: this.props.todosProps.completed ? "line-through" : "none",
      background: "#f4f4f4",
      padding: "10px",
      borderBottom: "1px #ccc dotted",
      margin: "0px"
    };
  };

  //   apareceLixo = () {
  //       return {
  //           display: button ? 'none' : 'block'
  //       }
  //   }

  render() {
    const { id, title } = this.props.todosProps;
    return (
      <div>
        <p style={this.getStyle()}>
          <input
            type="checkbox"
            onChange={this.props.toggleCompleted.bind(this, id)}
          />
          {title}
          <button onClick={this.props.delTodo.bind(this, id)} style={btnStyle}>
            <i className="far fa-trash-alt" />
          </button>
        </p>
      </div>
    );
  }
}

const btnStyle = {
  //   background: "#ff0000",
  //   color: "#fff",
  //   border: "none",
  //   padding: "5px 10px",
  //   borderRadius: "50%",
  //   cursor: "pointer",
  float: "right"
};

TodoItem.propTypes = {
  todosProps: PropTypes.object.isRequired,
  toggleCompleted: PropTypes.func.isRequired,
  delTodo: PropTypes.func.isRequired
};

export default TodoItem;
