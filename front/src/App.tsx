import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from "react-redux";
import Container from '@material-ui/core/Container';

import store from "store";
import TodosIndex from "pages/todos";
import TodosNew from "pages/todos/new";
import Header from "components/layouts/Header";
import styled from 'styled-components';

const App: React.FC = () => (
  <Router>
    <Header />
    <Container maxWidth="md">
      <Wrapper>
        <Provider store={store}>
          <Route exact path="/" component={TodosIndex} />
          <Route exact path="/todos/new" component={TodosNew} />
        </Provider>
      </Wrapper>
    </Container>
  </Router>
);

const Wrapper = styled.div`
  padding-top: 50px;
`;

export default App;
