import "./ProductsFrame.css";
import { FC } from "react";
import { ListGroup, ListGroupItem } from "react-bootstrap";

export const ProductsFrame: FC = () => {
  return (
    <div className="productsFrame__container">
      <div
        style={{
          position: "sticky",
          zIndex: 1,
          top: 0,
          backgroundColor: "gray",
        }}
      >
        adfsdfsdf
      </div>
      <ListGroup>
        <ListGroupItem>sfdafds</ListGroupItem>
        <ListGroupItem>sfdafds</ListGroupItem>
        <ListGroupItem>sfdafds</ListGroupItem>
        <ListGroupItem>sfdafds</ListGroupItem>
        <ListGroupItem>sfdafds</ListGroupItem>
        <ListGroupItem>sfdafds</ListGroupItem>
        <ListGroupItem>sfdafds</ListGroupItem>
        <ListGroupItem>sfdafds</ListGroupItem>
      </ListGroup>
    </div>
  );
};
