import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/layout/Header";
import Todos from "./components/Todos";
import AddTodo from "./components/AddTodo";
import About from "./components/pages/About";

import uuid from "uuid";

export class App extends Component {
  state = {
    todoObj: [
      {
        id: 1,
        title: "Learn React",
        completed: false
      },
      {
        id: 2,
        title: "Create some App",
        completed: false
      },
      {
        id: 3,
        title: "Deploy the new app",
        completed: false
      },
      {
        id: 4,
        title: "Go sleep",
        completed: false
      }
    ]
  };

  toggleCompleted = id => {
    this.setState({
      todoObj: this.state.todoObj.map(x => {
        if (x.id === id) {
          x.completed = !x.completed;
        }
        return x;
      })
    });
  };

  delTodo = id => {
    this.setState({
      todoObj: [...this.state.todoObj.filter(z => z.id !== id)]
    });
  };

  addTodo = title => {
    const newTodo = {
      id: uuid.v4(),
      title,
      completed: false
    };
    this.setState({
      todoObj: [...this.state.todoObj, newTodo]
    });
  };

  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Route
            exact
            path="/"
            render={props => (
              <React.Fragment>
                <AddTodo addTodo={this.addTodo} />
                <Todos
                  todosProps={this.state.todoObj}
                  toggleCompleted={this.toggleCompleted}
                  delTodo={this.delTodo}
                />
              </React.Fragment>
            )}
          />
          <Route path={"/about"} component={About} />
        </div>
      </Router>
    );
  }
}

export default App;
