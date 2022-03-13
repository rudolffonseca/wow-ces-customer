import { FC, useEffect } from "react";
import { Badge, Button, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Ticket } from "../../models/Ticket";
import { ticketByCustomer } from "../../store/queries/actionCreators";
import { getTickets } from "../../store/queries/selectors";
import "./style.css";

interface Props {
  user_id: string;
}

export const TicketsList: FC<Props> = ({ user_id }: Props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(ticketByCustomer(user_id));
  }, [dispatch, user_id]);

  const tickets: Ticket[] = useSelector(getTickets);

  const handleStatus = (status: string) => {
    switch (status) {
      case "on queue":
        return "secondary";
      case "open":
        return "primary";
      default:
        return "light";
    }
  };

  return !tickets ? (
    <></>
  ) : (
    <div className="ticketsList__container">
      <Table striped hover>
        <thead>
          <tr>
            <th>#id</th>
            <th>Topic</th>
            <th style={{ textAlign: "center" }}>Status</th>
          </tr>
        </thead>
        <tbody>
          {tickets.map((ticket) => (
            <tr key={ticket.id}>
              <td>{ticket.id}</td>
              <td>{ticket.topic}</td>
              <td style={{ textAlign: "center" }}>
                <Badge pill bg={handleStatus(ticket.status)}>
                  {ticket.status}
                </Badge>
              </td>
              <td>
                <Button onClick={() => navigate(`/ticket/${ticket.id}`)}>
                  Go!
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};
