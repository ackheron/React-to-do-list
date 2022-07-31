import React from "react";
import ToDoList from "./ToDoList";
import Footer from "./Footer";
import AddTask from "./AddTask";
import initialData from "../initialData";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default class App extends React.Component {
  state = {
    tasks: initialData,
  };

  onToggleCompleted = (taskId) => {
    let taskToUpdate = this.state.tasks.find((task) => task.id === taskId);
    taskToUpdate.completed = !taskToUpdate.completed;

    this.setState((prevState) =>
      prevState.tasks.map((task) => {
        return task.id === taskId ? taskToUpdate : task;
      })
    );
  };
  render() {
    return (
      <section id="todo">
        <Router>
          <Switch>
            <Route path="/add-task" component={AddTask} />
            <Route
              path="/:filter?"
              render={(props) => (
                <ToDoList
                  {...props}
                  tasks={this.state.tasks}
                  onToggleCompleted={this.onToggleCompleted}
                />
              )}
            />
          </Switch>
          <Footer />
        </Router>
      </section>
    );
  }
}
