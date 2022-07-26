import React from "react";

class ToDo extends React.Component {
  state = {
    completed: this.props.task.completed,
  };

  toggleCompleted = () => {
    this.setState((prevState) => ({
      completed: !prevState.completed,
    }));
  };
  render() {
    return (
      <li
        className={
          "list-group-item d-flex justify-content-between align-items-center " +
          (this.state.completed ? "bg-succes" : null)
        }
      >
        {this.props.task.name}
        <button
          className={
            "btn btn-sm ml-auto " +
            (this.state.completed ? "btn-success" : "btn-ouline-success")
          }
          onClick={() => this.toggleCompleted()}
        >
          &#x2713;
        </button>
      </li>
    );
  }
}

export default ToDo;
