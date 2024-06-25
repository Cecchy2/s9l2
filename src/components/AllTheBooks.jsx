import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import fantasy from "./data/fantasy.json";

class AllTheBooks extends Component {
  render() {
    return (
      <div className="d-flex flex-wrap">
        {fantasy.map((book, index) => (
          <Card key={index} style={{ width: "18rem", marginBottom: "1rem" }} className="ms-4">
            <Card.Img variant="top" src={book.img} />
            <Card.Body>
              <Card.Title>{book.title}</Card.Title>
              <Card.Text>{book.category}</Card.Text>
              <Card.Text>{book.price}&euro;</Card.Text>
            </Card.Body>
          </Card>
        ))}
      </div>
    );
  }
}

export default AllTheBooks;
