import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './App.css';
import Header from './components/layouts/Header';
import Blog from './components/Blog';
import Photo from './components/Photo';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Route path="/blog" exact component={Blog} />
        <Route path="/photo" exact component={Photo} />
      </div>
    </Router>
  );
}

export default App;
