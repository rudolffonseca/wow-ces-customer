import { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { MessagesList } from "../../components/MessagesList/MessagesList";
import { Message } from "../../models/Message";
import { messagesByTicket } from "../../store/queries/actionCreators";
import { getMessages } from "../../store/queries/selectors";

export const Details: FC = () => {
  const ticketId: string = useParams().id || "";
  const dispatch = useDispatch();
  const messages: Message[] = useSelector(getMessages);

  useEffect(() => {
    dispatch(messagesByTicket(ticketId));
  }, [dispatch, ticketId]);

  return !messages ? (
    <></>
  ) : (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <MessagesList messages={messages} />
    </div>
  );
};
