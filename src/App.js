//module
import React, { Component, Suspense, lazy } from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
//components

import Container from './components/Container';
import AppBar from './components/AppBar/AppBar';
import { authOperations } from './redux/auth';
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';
import routes from './routes';
//styles
import './styles/base.scss';
import './App.scss';

const HomeView = lazy(() => import('./views/HomeView'));
const PhonebooksView = lazy(() => import('./views/PhonebooksView'));
const RegisterView = lazy(() => import('./views/RegisterView'));
const LoginView = lazy(() => import('./views/LoginView'));

class App extends Component {
  componentDidMount() {
    this.props.onGetCurrentUser();
  }
  render() {
    return (
      <Container>
        <AppBar />

        <Suspense fallback={<div className="loader"></div>}>
          <Switch>
            <Route exact path={routes.home} component={HomeView} />
            <PublicRoute
              path={routes.register}
              restricted
              component={RegisterView}
              redirectTo={routes.home}
            />
            <PublicRoute
              path={routes.login}
              restricted
              component={LoginView}
              redirectTo={routes.home}
            />
            <PrivateRoute
              path={routes.phonebooks}
              component={PhonebooksView}
              redirectTo={routes.login}
            />
          </Switch>
        </Suspense>
      </Container>
    );
  }
}

const mapDispatchToProps = {
  onGetCurrentUser: authOperations.getCurrentUser,
};

export default connect(null, mapDispatchToProps)(App);
