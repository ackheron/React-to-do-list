import React from "react";
import ToDoList from "./ToDoList";
import Footer from "./Footer";
import AddTask from "./AddTask";
import initialData from "../initialData";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// const App = () => {
//   return (
//     <section id="todo">
//       <Router>
//         <Switch>
//           <Route path="/add-task" component={AddTask} />

//           <Route path="/" component={ToDoList} />
//         </Switch>
//         <Footer />
//       </Router>
//     </section>
//   );
// };

export default class App extends React.Component {
  render() {
    return (
      <section id="todo">
        <Router>
          <Switch>
            <Route path="/add-task" component={AddTask} />

            <Route path="/" component={ToDoList} />
          </Switch>
          <Footer />
        </Router>
      </section>
    );
  }
}

// export default App;
