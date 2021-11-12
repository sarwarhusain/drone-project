import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Headar from './Pages/Shared/Headar/Headar';
import Home from './Pages/Home/Home/Home';
import Footer from './Pages/Shared/Footer/Footer';
import AuthProvider from './Context/AuthProvider';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import AddProduct from './Pages/AddPrduct/AddProduct';
import ProductVerify from './Pages/ProductVerify/ProductVerify';
import MyOrder from './Pages/MyOrder/MyOrder';
import Explore from './Pages/Explore/Explore';
function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Headar></Headar>
          <Switch>
            <Route exact path="/home">
              <Home></Home>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
            <Route path="/addProduct">
              <AddProduct></AddProduct>
            </Route>
            <Route path="/myOrder">
              <MyOrder></MyOrder>
            </Route>
            <Route path="/explore">
              <Explore></Explore>
            </Route>
            <Route exact path="/product/:verifyId">
              <ProductVerify></ProductVerify>
            </Route>
            <Route exact path="/">
              <Home></Home>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
