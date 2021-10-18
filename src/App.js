import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import DetailsFirst from './components/DetailsFirst/DetailsFirst';
import NotFound from './components/NotFound/NotFound';
import Register from './components/Register/Register';
import Login from './components/Login/Login'
import AuthProvider from './Context/AuthProvider';
import SecureRoute from './components/SecureRoute/SecureRoute';
import Footer from './components/Footer/Footer';
import AboutPage from './components/AboutPage/AboutPage';
import DetailsSingleService from './components/DetailsSingleService/DetailsSingleService';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header />
          <Switch>

            <Route exact path="/">
              <Home />
            </Route>

            <Route path="/home">
              <Home />
            </Route>


            <Route path="/about">
              <AboutPage />
            </Route>

            <SecureRoute path="/details">
              <DetailsFirst />
            </SecureRoute>

            <Route path="/register">
              <Register />
            </Route>

            <Route path="/login">
              <Login />
            </Route>

            <Route path="/service-details/:service_id">
              <DetailsSingleService />
            </Route>

            <Route path="*">
              <NotFound />
            </Route>

          </Switch>
          <Footer />
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
