import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import Footer from './Pages/Shared/Footer/Footer';
import AuthProvider from './Context/AuthProvider';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import ProductVerify from './Pages/ProductVerify/ProductVerify';
import Explore from './Pages/Explore/Explore';
import Notfounde from './Pages/Notfounde/Notfounde';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard';
import MyOrder from './Pages/MyOrder/MyOrder';
import Payment from './Pages/Dashboard/Payment/Payment';
import ContuctUs from './Pages/ContuctUs/ContuctUs';
import About from './Pages/About/About';
function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <PrivateRoute path="/dashBoard">
              <Dashboard></Dashboard>
            </PrivateRoute>
            <Route exact path="/home">
              <Home></Home>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
            <PrivateRoute path="/myOrder">
              <MyOrder></MyOrder>
            </PrivateRoute>
            <Route path="/explore">
              <Explore></Explore>
            </Route>
            <PrivateRoute exact path="/product/:verifyId">
              <ProductVerify></ProductVerify>
            </PrivateRoute>
            <PrivateRoute path="/payment">
              <Payment></Payment>
            </PrivateRoute>
            <Route path="/contactUs">
              <ContuctUs></ContuctUs>
            </Route>
            <Route path="/about">
              <About></About>
            </Route>
            <Route path="*">
              <Notfounde></Notfounde>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
