import React, { useState } from "react";
import { useEffect } from "react";
import { Table } from "react-bootstrap";

const ManageOrder = () => {
  const [manageOrder, setManageOrder] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/orders")
      .then((res) => res.json())
      .then((data) => setManageOrder(data));
  }, []);

  // delete use
  const handleDeleteOrder = (id) => {
    const proceed = window.confirm("Are you sure,you want to delete?");
    if (proceed) {
      const url = `http://localhost:5000/orders/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount) {
            alert("deleted successfully");
            const remainingUsers = manageOrder.filter(
              (service) => service._id !== id
            );
            setManageOrder(remainingUsers);
          }
        });
    }
  };
  return (
    <div className="container">
      <h1 className="text-primary text-center">
        Manage Order {manageOrder?.length}
      </h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Email</th>
            <th>Address</th>
            <th>phone</th>
            <th>Action</th>
          </tr>
        </thead>
        {manageOrder?.map((manage, index) => (
          <tbody>
            <tr>
              <td>{index}</td>
              <td>{manage?.product}</td>
              <td>{manage?.email}</td>
              <td>{manage?.address}</td>
              <td>{manage?.phone}</td>
              <button
                onClick={() => handleDeleteOrder(manage._id)}
                className="bg-danger p-2"
              >
                Delete
              </button>
            </tr>
          </tbody>
        ))}
      </Table>
    </div>
  );
};

export default ManageOrder;
