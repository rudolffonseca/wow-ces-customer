import { FC, useState } from "react";
import { Button, Form } from "react-bootstrap";
import "./style.css";

type Props = {
  addNewMessage: (message: string) => void;
};

export const NewMessage: FC<Props> = ({ addNewMessage }: Props) => {
  const [message, setMessage] = useState<string>("");

  return (
    <div className="new_message__container">
      <Form style={{ display: "flex", flexDirection: "column" }}>
        <Form.Group className="mb-3">
          <Form.Label style={{ textAlign: "left" }}>Message: </Form.Label>
          <Form.Control
            as="textarea"
            style={{ height: "200px", resize: "none" }}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </Form.Group>
        <Button
          onClick={() => {
            if (message) addNewMessage(message);
            setMessage("");
          }}
        >
          Send!
        </Button>
      </Form>
    </div>
  );
};
