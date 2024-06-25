import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import fantasy from "./data/fantasy.json";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

class AllTheBooks extends Component {
  render() {
    return (
      <Container>
        <Row>
          {fantasy.map((book, index) => (
            <Col>
              <Card key={index} style={{ width: "18rem", marginBottom: "1rem" }}>
                <Card.Img variant="top" src={book.img} />
                <Card.Body>
                  <Card.Title>{book.title}</Card.Title>
                  <Card.Text>{book.category}</Card.Text>
                  <Card.Text>{book.price}&euro;</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    );
  }
}

export default AllTheBooks;
