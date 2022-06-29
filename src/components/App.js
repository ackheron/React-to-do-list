import React from "react";
import ToDoList from "./ToDoList";
import Footer from "./Footer";
import AddTask from "./AddTask";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// class App extends React.Component {
//   render() {
//     return (
//       <section id="todo">
//         <h1 className="m-3">Liste de tâches</h1>
//         <ToDoList />
//         <Footer />
//       </section>
//     );
//   }
// }

const App = () => {
  return (
    <section id="todo">
      <BrowserRouter>
        <Routes>
          <Route path="/add-task" element={<AddTask />} />
          <Route path="/" element={<ToDoList />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </section>
  );
};

export default App;
