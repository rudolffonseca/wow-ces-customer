import { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { MessagesList } from "../../components/MessagesList/MessagesList";
import { NewMessage } from "../../components/NewMessage";
import { Message } from "../../models/Message";
import {
  addNewMessage,
  messagesByTicket,
} from "../../store/queries/actionCreators";
import { getMessages } from "../../store/queries/selectors";
import loading from "../../images/loading.gif";
import "./style.css";

export const Details: FC = () => {
  const ticketId: string = useParams().id || "";
  const dispatch = useDispatch();
  const messages: Message[] = useSelector(getMessages);

  useEffect(() => {
    dispatch(messagesByTicket(ticketId));
  }, [dispatch, ticketId]);

  const addMessage = (message: string): void => {
    const newMessage = {
      id: null,
      message: message,
      authorCustomer: true,
      read: true,
      createdAt: Date.now(),
    };
    dispatch(addNewMessage(newMessage, ticketId));
  };

  return !messages ? (
    <>
      <img src={loading} alt="loading" className="loading" />
    </>
  ) : (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <MessagesList messages={messages} />
      <NewMessage addNewMessage={addMessage} />
    </div>
  );
};
