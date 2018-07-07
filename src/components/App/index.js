import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import LandingPage from '../Landing';
import SignUpPage from '../SignUp';
import SignInPage from '../SignIn';
import PasswordForgetPage from '../PasswordForget';
import HomePage from '../Home';
import AccountPage from '../Account';
import withAuthentication from '../Session/withAuthentication';
import './index.css';

const App = () =>
  <Router>
    <div className="app">
      <Route exact path={'/'} component={() => <LandingPage />} />
      <Route exact path={'/signup'} component={() => <SignUpPage />} />
      <Route exact path={'/signin'} component={() => <SignInPage />} />
      <Route exact path={'/pw-forget'} component={() => <PasswordForgetPage />} />
      <Route exact path={'/home'} component={() => <HomePage />} />
      <Route exact path={'/account'} component={() => <AccountPage />} />
    </div>
  </Router>

export default withAuthentication(App);
 