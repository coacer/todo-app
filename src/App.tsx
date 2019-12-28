import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import TodosIndex from "pages/todos";
import TodosNew from "pages/todos/new";
import Header from "components/layouts/Header";
import Footer from "components/layouts/Footer";

const App: React.FC = () => (
  <Router>
    <Header />
    <Route exact path="/" component={TodosIndex} />
    <Route exact path="/todos/new" component={TodosNew} />
    <Footer />
  </Router>
);

export default App;
