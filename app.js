import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", { id: "heading1" }, "Hi from H1 element"),
    React.createElement("h2", { id: "heading2" }, "Hi from H2 element"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", { id: "heading3" }, "Hi from H1 element"),
    React.createElement("h2", { id: "heading4" }, "Hi from H2 element"),
  ]),
]);

root.render(parent);
