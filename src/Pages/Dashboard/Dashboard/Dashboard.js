import React, { useState } from "react";
import "./Dashboard.css";
import { useEffect } from "react";
import { Switch, Route, Link, useRouteMatch } from "react-router-dom";
import MyOrder from "../MyOrder/MyOrder";
import AddService from "../AddService/AddService";
import ManageOrder from "../ManageOrder/ManageOrder";
import AddReview from "./../AddReview/AddReview";
import MakeAdmin from "../MakeAdmin/MakeAdmin";
import useAuth from "./../../../hooks/useAuth";
import Pay from "../Pay/Pay";

const Dashboard = () => {
  const { user } = useAuth();
  const [isAdmin, setIsAdmin] = useState(false);
  useEffect(() => {
    fetch(`https://immense-mesa-85677.herokuapp.com/checkAdmin/${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        if (data[0]?.role === "admin") {
          setIsAdmin(true);
        } else {
          setIsAdmin(false);
        }
      });
  }, [user.email]);
  console.log(isAdmin);
  let { path, url } = useRouteMatch();
  return (
    <div className="dashboard-container my-5 ">
      <div className="row">
        <div className="col-md-4">
          <h5 className="text-center fw-bold fs-1">
            <i class="fas fa-tachometer-alt"></i> Dashboard
          </h5>
          <div className="dashboard text-center">
            {!isAdmin && (
              <Link>
                <Link to={`${url}/myOrder`}>
                  <li className="dashboard-menu mt-5">
                    <i class="fas fa-cart-arrow-down"></i> My order
                  </li>
                </Link>

                <Link to={`${url}/addReview`}>
                  <li className="dashboard-menu mt-5">
                    <i class="fas fa-star"></i> Add Review
                  </li>
                </Link>
                <Link to={`${url}/pay`}>
                  <li className="dashboard-menu mt-5">
                    <i class="fas fa-money-check-alt"></i> Pay
                  </li>
                </Link>
              </Link>
            )}

            {isAdmin && (
              <Link>
                <Link to={`${url}/makeAdmin`}>
                  <li className="dashboard-menu">
                    <i class="fas fa-puzzle-piece"></i> Make Admin
                  </li>
                </Link>
                <Link to={`${url}/manageOrder`}>
                  <li className="dashboard-menu">
                    <i class="fas fa-tasks"></i>Manage Order
                  </li>
                </Link>
                <Link to={`${url}/addService`}>
                  <li className="dashboard-menu">
                    <i class="fas fa-puzzle-piece"></i> Add Service
                  </li>
                </Link>
              </Link>
            )}
          </div>
        </div>
        <div className="col-md-7">
          <Switch>
            <Route exact path={`${path}/myOrder`}>
              <MyOrder></MyOrder>
            </Route>
            <Route exact path={`${path}/addReview`}>
              <AddReview></AddReview>
            </Route>
            <Route exact path={`${path}/pay`}>
              <Pay></Pay>
            </Route>
            <Route exact path={`${path}/makeAdmin`}>
              <MakeAdmin></MakeAdmin>
            </Route>
            <Route exact path={`${path}/manageOrder`}>
              <ManageOrder></ManageOrder>
            </Route>
            <Route exact path={`${path}/addService`}>
              <AddService></AddService>
            </Route>
          </Switch>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
