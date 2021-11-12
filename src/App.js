import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import Footer from './Pages/Shared/Footer/Footer';
import AuthProvider from './Context/AuthProvider';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import AddProduct from './Pages/AddPrduct/AddProduct';
import ProductVerify from './Pages/ProductVerify/ProductVerify';
import Explore from './Pages/Explore/Explore';
import Notfounde from './Pages/Notfounde/Notfounde';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import ManageOrder from './Pages/ManageOrder/ManageOrder';
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard';
import MyOrder from './Pages/MyOrder/MyOrder';
function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route exact path="/home">
              <Home></Home>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <PrivateRoute path="/myOrder">
              <MyOrder></MyOrder>
            </PrivateRoute>
            <Route path="/register">
              <Register></Register>
            </Route>
            <PrivateRoute path="/addProduct">
              <AddProduct></AddProduct>
            </PrivateRoute>
            <Route path="/explore">
              <Explore></Explore>
            </Route>
            <PrivateRoute exact path="/manageOrder">
              <ManageOrder></ManageOrder>
            </PrivateRoute>
            <PrivateRoute exact path="/product/:verifyId">
              <ProductVerify></ProductVerify>
            </PrivateRoute>
            <Route path="/dashBoard">
              <Dashboard></Dashboard>
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
