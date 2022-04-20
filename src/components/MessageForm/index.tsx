import { FC, useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Topic } from "../../models/Topics";
import { queryTopics } from "../../store/queries/actionCreators";
import { getTopics } from "../../store/queries/selectors";
import "./messageForm.css";

export const MessageForm: FC = () => {
  const dispatch = useDispatch();
  const [files, setFiles] = useState<Array<string | undefined>>([]);
  const topics: Topic[] = useSelector(getTopics);
  console.log("topics:", topics);

  useEffect(() => {
    dispatch(queryTopics());
  }, [dispatch]);

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

  const handleSubmit = (event: any): void => {
    event.preventDefault();
    const { topic, product, message } = event.target;
    console.log("SubmitEvent: ", topic.value, product.value, message.value);
  };

  return !topics ? (
    <div>Loading...</div>
  ) : (
    <div className="messageForm__container">
      <p style={{ textAlign: "center" }}>Ask your question!</p>
      <Form
        name="message_form"
        style={{ display: "flex", flexDirection: "column" }}
        onSubmit={handleSubmit}
      >
        <Form.Group className="mb-3">
          <Form.Label htmlFor="topic">Topic: </Form.Label>
          <Form.Select name="topic" className="border--rounded">
            {topics.map((topic) => (
              <option key={topic.id} value={topic.id}>
                {topic.title}
              </option>
            ))}
          </Form.Select>
          <br />
          <Form.Label htmlFor="product">Product: </Form.Label>
          <Form.Select name="product" className="border--rounded">
            <option>Product 1</option>
            <option>Product 2</option>
            <option>Product 3</option>
          </Form.Select>
          <br />
          <br />
          <Form.Label htmlFor="message">Your message: </Form.Label>
          <Form.Control
            as="textarea"
            name="message"
            className="border--rounded"
          />
          <br />
          <Form.Label>Upload your files: </Form.Label>
          <br />
          <Form.Control
            type="file"
            name="upload"
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
