import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import SingleBook from "./SingleBook";

const BookList = ({ books }) => {
  return (
    <Row className="g-2 mt-3">
      {books.map((book) => (
        <Col xs={12} md={4} xl={3} key={book.asin}>
          <SingleBook book={book} />
        </Col>
      ))}
    </Row>
  );
};

export default BookList;
