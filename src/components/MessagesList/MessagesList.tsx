import { FC } from "react";
import { Message } from "../../models/Message";
import "./style.css";

type Props = {
  messages: Message[];
};

export const MessagesList: FC<Props> = ({ messages }: Props) => {
  const handleAuthor = (author: boolean): string => {
    switch (author) {
      case true:
        return "message-blue";
      case false:
        return "message-orange";
    }
  };

  const toDate = (seconds: number) => {
    const time = new Date(seconds);
    return time.toISOString();
  };
  return (
    <div className="messages__container">
      {messages.map((message) => (
        <div className={handleAuthor(message.authorCustomer)} key={message.id}>
          <p className="message-content">{message.message}</p>
          <br />
          <div className="message-timestamp-right">
            {toDate(message.createdAt)}
          </div>
        </div>
      ))}
    </div>
  );
};
