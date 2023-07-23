import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Alert from './components/Alert';

function App() {
  return (
    <Router>
      <Header />
      <Alert />
      <Routes>
        <Route path='/' element={ <Home /> } />
      </Routes>
    </Router>
  );
}

export default App;
