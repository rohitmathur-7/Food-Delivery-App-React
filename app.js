import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/components/Header";
import Body from "./src/components/Body";

const root = ReactDOM.createRoot(document.getElementById("root"));

const Header = () => {
  return (
    <div className="header">
      <div className="logo"></div>
    </div>
  );
};

const App = () => {
  return (
    <div>
      <Header />
      <Body />
    </div>
  );
};

root.render(<App />);
