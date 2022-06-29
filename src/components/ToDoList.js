import React from "react";

const ToDoList = () => {
  return (
    <div>
      <h1 ss="m-3">Liste de tâches</h1>
      <ul ss="list-group m-3">
        <li ss="list-group-item d-flex justify-content-between align-items-center">
          Ranger la vaisselle
          <button ss="btn btn-sm ml-auto btn-outline-success">&#x2713;</button>
        </li>
        <li ss="list-group-item d-flex justify-content-between align-items-center">
          Répondre appel d'offres
          <button ss="btn btn-sm ml-auto btn-outline-success">&#x2713;</button>
        </li>
        <li ss="list-group-item d-flex justify-content-between align-items-center">
          Signer contrat
          <button ss="btn btn-sm ml-auto btn-outline-success">&#x2713;</button>
        </li>
        <li ss="list-group-item d-flex justify-content-between align-items-center">
          Ranger la salon
          <button ss="btn btn-sm ml-auto btn-outline-success">&#x2713;</button>
        </li>
      </ul>
    </div>
  );
};

export default ToDoList;
