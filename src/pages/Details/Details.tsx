import { FC } from "react";
import { useParams } from "react-router-dom";

export const Details: FC = () => {
  const ticketId = useParams().id;

  return (
    <div>
      <p>DETAILS PAGE FOR TICKET #{ticketId}</p>
    </div>
  );
};
