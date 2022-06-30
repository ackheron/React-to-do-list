import React from "react";
import ToDoList from "./ToDoList";
import Footer from "./Footer";
import AddTask from "./AddTask";
import initialData from "../initialData";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <section id="todo">
      <BrowserRouter>
        <Routes>
          <Route path="/add-task" element={<AddTask />} />
          {/* Méthode pour passer des props à un élément depuis React-router 6
          voir: https://ui.dev/react-router-pass-props-to-components */}
          <Route path="/*" element={<ToDoList tasks={initialData} />} />
          {/* Ancienne méthode avant React-router 6 */}
          {/* <Route
            path="*"
            render={(props) => <ToDoList {...props} tasks={initialData} />}
          /> */}
        </Routes>
        <Footer />
      </BrowserRouter>
    </section>
  );
};
export default App;
