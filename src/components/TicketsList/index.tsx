import { FC } from "react";
import { ListGroup, ListGroupItem } from "react-bootstrap";
import "./style.css";

export const TicketsList: FC = () => {
  return (
    <div className="ticketsList__container">
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
