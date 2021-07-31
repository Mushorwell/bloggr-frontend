import React from 'react';
import './App.css';
import Header from "./Components/Header/Header";
import Body from "./Components/Body/MainLayout/Body";
import Footer from "./Components/Footer/Footer";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
      <Router>
          <div className="App">
              <Header />
              <Body />
              <Footer />
          </div>
      </Router>
  );
}

export default App;
