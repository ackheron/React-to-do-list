import React from "react";

class AddTask extends React.Component {
  render() {
    return (
      <section>
        <h1 ss="m-3">Nouvelle tâche</h1>
        <div ss="card mx-3">
          <form ss="card-body" onSubmit={(e) => this.handleSubmit(e)}>
            <div ss="form-group">
              <label form="taskName">Nom de la tâche</label>
              <input
                type="text"
                ss="form-control"
                name="taskName"
                id="taskName"
                required
                ref={(input) => (this.newTask = input)}
              />
            </div>
            <button type="submit" ss="btn btn-primary">
              Créer
            </button>
          </form>
        </div>
      </section>
    );
  }
}

export default AddTask;
