import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Pages/Home/Home/Home";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Explore from "./Pages/Explore/Explore";
import Navigation from "./Pages/Shared/Navigation/Navigation";
import Footer from "./Pages/Shared/Footer/Footer";
import Login from "./Pages/Login/Login/Login";
import AuthProvider from "./contexts/AuthProvider/AuthProvider";
import Register from "./Pages/Login/Register/Register";
import Booking from "./Pages/Home/Booking/Booking";
import PrivateRoute from "./Pages/Login/PrivateRoute/PrivateRoute";
import Dashboard from "./Pages/Dashboard/Dashboard/Dashboard";
import About from "./Pages/About/About";
import NotFound from "./Pages/NotFound/NotFound";

function App() {
  return (
    <div>
      <AuthProvider>
        <BrowserRouter>
          <Navigation></Navigation>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route exact path="/home">
              <Home></Home>
            </Route>
            <Route exact path="/explore">
              <Explore></Explore>
            </Route>
            <Route exact path="/about">
              <About></About>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <PrivateRoute path="/booking/:bookingId">
              <Booking></Booking>
            </PrivateRoute>
            <Route path="/register">
              <Register></Register>
            </Route>
            <PrivateRoute path="/dashboard">
              <Dashboard></Dashboard>
            </PrivateRoute>
            <Route exact path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
