import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Header from './pages/Shared/Header/Header';
import Home from './pages/Home/Home/Home';

import Login from './pages/Shared/Login/Login';
import AuthProvider from './context/AuthProvider';
import ServiceDetail from './pages/Services/ServiceDetail/ServiceDetail';
import PrivateRoute from './pages/PrivateRoute/PrivateRoute';
import MyOrder from './pages/Order/MyOrder/MyOrder';
import ManageOrders from './pages/Order/ManageOrders/ManageOrders';
import Footer from './pages/Shared/Footer/Footer';
import NotFound from './pages/NotFound/NotFound';
import AboutUs from './pages/AboutUs/AboutUs';
import Gallery from './pages/Gallery/Gallery';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/aboutus">
            <AboutUs></AboutUs>
          </Route>
          <Route path="/gallery">
            <Gallery></Gallery>
          </Route>
          <PrivateRoute path="/servicedetail/:id">
            <ServiceDetail></ServiceDetail>
          </PrivateRoute>
          <Route path="/manageorders">
            <ManageOrders></ManageOrders>
          </Route>
          <Route path="/myorders">
            <MyOrder></MyOrder>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </AuthProvider>
  );
}

export default App;
