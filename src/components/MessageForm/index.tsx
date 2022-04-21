import axios from "axios";
import { FC, useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Product from "../../models/Product";
import { Topic } from "../../models/Topics";
import {
  addNewTicket,
  queryProducts,
  queryTopics,
} from "../../store/queries/actionCreators";
import { getProducts, getTopics } from "../../store/queries/selectors";
import { URL } from "../../store/url";
import "./messageForm.css";

export const MessageForm: FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [files, setFiles] = useState<Array<string | undefined>>([]);
  const topics: Topic[] = useSelector(getTopics);
  const products: Product[] = useSelector(getProducts);

  useEffect(() => {
    dispatch(queryTopics());
    dispatch(queryProducts());
  }, [dispatch]);

  //return an array of files name to files variable
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
    dispatch(addNewTicket(product.value, topic.value, message.value));
    navigate("/dashboard");
  };

  return !topics || !products ? (
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
          <Form.Select name="topic" className="border--rounded" required>
            <option value="" disabled>
              Choose a topic...
            </option>
            {topics.map((topic) => (
              <option key={topic.id} value={topic.id}>
                {topic.title}
              </option>
            ))}
          </Form.Select>
          <br />
          <Form.Label htmlFor="product">Product: </Form.Label>
          <Form.Select name="product" className="border--rounded">
            <option value="" disabled>
              Choose a product...
            </option>
            {products.map((product) => (
              <option key={product.id} value={product.id}>
                {product.name}
              </option>
            ))}
          </Form.Select>
          <br />
          <br />
          <Form.Label htmlFor="message">Your message: </Form.Label>
          <Form.Control
            as="textarea"
            name="message"
            className="border--rounded"
            placeholder="Write your message here..."
            required
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
