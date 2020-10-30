import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/Header';
import LandingPage from './pages/LandingPage';
import Footer from './components/Footer';
import Login from './pages/Login';
import Profile from './pages/Profile';
import Todos from './pages/Todos';
import { useAuth } from './useAuth';

const App = () => {
  useAuth();
  return (
    <Router>
      <Header />
      <Route path='/' component={LandingPage} exact />
      <Route path='/login' component={Login} />
      <Route path='/profile' component={Profile} />
      <Route path='/todos' component={Todos} exact />
      <Route path='/todos/:pageNumber' component={Todos} />
      <Footer />
    </Router>
  );
};

export default App;
