import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import CommentArea from "./CommentArea";
import { useState } from "react";

const SingleBook = ({ book }) => {
  const [selected, setSelected] = useState(false);

  const handleClick = () => {
    setSelected(!selected);
  };

  return (
    <>
      <Card className={selected ? "selected-card" : ""}>
        <Card.Img variant="top" src={book.img} className="card-img" onClick={handleClick} />
        <Card.Body className="card-body">
          <Card.Title className="card-title">{book.title}</Card.Title>
          <Card.Text className="card-category">Category: {book.category}</Card.Text>
          <Card.Text className="card-price">{book.price}$</Card.Text>
          <Button variant="primary" className="card-button">
            Buy It
          </Button>
        </Card.Body>
      </Card>
      {selected && <CommentArea asin={book.asin} />}
    </>
  );
};

export default SingleBook;
