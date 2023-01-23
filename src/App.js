import React from "react";
import "./App.css";
import { Route } from "wouter";
import ListOfGifs from "./components/ListOfGifs";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <Home />
      <section className="App-content">
        <Route path="/search/:keyword" component={ListOfGifs} />
      </section>
    </div>
  );
}

export default App;
