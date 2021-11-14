import React from "react";
import "./Service.css";
import { Link } from "react-router-dom";

const Service = ({ drones }) => {
  const { title, img, price, descrip, _id } = drones;
  return (
    <div className="row col-sm-12 col-md-6 col-lg-4 mx-auto">
      <div className="card mb-4">
        <div className="div">
          <img src={img} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p>{descrip.slice(0, 70)}</p>
            <p className="price">Price: ${price}</p>
            <Link to={`/booking/${_id}`}>
              <button type="button" className=" button btn-buy">
                Order Now
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>

    //     <Col>
    //     <Card className="shadow">
    //     <Card.Img variant="top" src={img} />
    //     <Card.Body>
    //       <Card.Title>{name}</Card.Title>
    //       <Card.Text>
    //         {description}
    //       </Card.Text>
    //       <h5>${price}</h5>
    //       <Link to={`/booking/${_id}`}>
    //       <Button variant="primary" size="lg">
    //   Book now
    // </Button>
    //       </Link>
    //     </Card.Body>
    //   </Card>
    // </Col>
  );
};

export default Service;
