import React from "react";

class ToDo extends React.Component {
  state = {
    completed: this.props.task.completed,
  };

  ToggleCompleted = () => {
    this.setState((prevState) => ({
      completed: !prevState.completed,
    }));
    this.props.onToggleCompleted(this.props.task.id);
  };

  render() {
    return (
      <li
        className={
          "list-group-item d-flex justify-content-between align-items-center " +
          (this.state.completed ? "bg-success" : null)
        }
      >
        {this.props.task.name}
        <button
          className={
            "btn btn-sm ml-auto " +
            (this.state.completed ? "btn-success" : "btn-outline-success")
          }
          onClick={() => this.ToggleCompleted()}
        >
          &#x2713;
        </button>
      </li>
    );
  }
}

export default ToDo;
