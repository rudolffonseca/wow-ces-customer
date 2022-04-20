import React, { FC, useState } from "react";
import { Button, Form } from "react-bootstrap";
import "./messageForm.css";

export const MessageForm: FC = () => {
  const [files, setFiles] = useState<Array<string | undefined>>([]);

  const handleUpload = (event: any): void => {
    event.preventDefault();
    const filesList: FileList = event.target.files;
    let filesNames: Array<string | undefined> = [];
    if (filesList) {
      for (let i = 0; i < filesList?.length; i++) {
        filesNames.push(filesList?.item(i)?.name);
      }
    }
    setFiles(filesNames);
  };

  return (
    <div className="messageForm__container">
      <p style={{ textAlign: "center" }}>Ask your question!</p>
      <Form style={{ display: "flex", flexDirection: "column" }}>
        <Form.Group className="mb-3">
          <Form.Label>Topic: </Form.Label>
          <Form.Select className="border--rounded">
            <option>Topic 1</option>
            <option>Topic 2</option>
            <option>Topic 3</option>
          </Form.Select>
          <br />
          <Form.Label>Product: </Form.Label>
          <Form.Select className="border--rounded">
            <option>Product 1</option>
            <option>Product 2</option>
            <option>Product 3</option>
          </Form.Select>
          <br />
          <br />
          <Form.Label>Your message: </Form.Label>
          <Form.Control as="textarea" className="border--rounded" />
          <br />
          <Form.Label>Upload your files: </Form.Label>
          <br />
          <Form.Control
            type="file"
            multiple
            className="border--rounded"
            onChange={handleUpload}
          ></Form.Control>
          <br />
          {files ? files.map((name, item) => <p key={item}>{name}</p>) : <></>}
        </Form.Group>
        <Button variant="primary" type="submit" className="border--rounded">
          Submit!
        </Button>
      </Form>
    </div>
  );
};
