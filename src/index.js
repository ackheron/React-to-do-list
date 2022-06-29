import React from "react";

// Ancienne méthode d'importation avant React 18
// import ReactDOM from "react-dom";

import { createRoot } from "react-dom/client"; // depuis React 18
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./components/App";

// Ancienne méthode de rendu avant React 18
// ReactDOM.render(<App />, document.getElementById("root"));

/*=============================================
=        React 18 introduit une nouvelle API root qui offre une meilleure ergonomie pour la gestion des racines. La nouvelle API racine active également le nouveau moteur de rendu simultané, qui vous permet d'activer les fonctionnalités simultanées.    voir https://reactjs.org/blog/2022/03/08/react-18-upgrade-guide.html#updates-to-client-rendering-apis     =
=============================================*/

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
