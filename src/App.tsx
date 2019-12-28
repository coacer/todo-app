import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from "react-redux";
import store from "store";

import TodosIndex from "pages/todos";
import TodosNew from "pages/todos/new";
import Header from "components/layouts/Header";
import Footer from "components/layouts/Footer";

const App: React.FC = () => (
  <Router>
    <Header />
    <Provider store={store}>
      <Route exact path="/" component={TodosIndex} />
      <Route exact path="/todos/new" component={TodosNew} />
    </Provider>
    <Footer />
  </Router>
);

export default App;
