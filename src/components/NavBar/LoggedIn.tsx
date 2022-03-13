import { FC } from "react";
import { Button, Nav } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "redux";
import { logout } from "../../store/auth/actionCreators";
import { getEmail } from "../../store/auth/selectors";

export const LoggedIn: FC = () => {
  const dispatch: Dispatch<any> = useDispatch();
  // const [email, setEmail] = useState<string | null>(null);
  const email: string = useSelector(getEmail);

  return (
    <div style={{ display: "flex", justifyContent: "end" }}>
      <Nav.Item style={{ padding: ".5rem 1rem", color: "white" }}>
        {email}
      </Nav.Item>
      <Button
        style={{ background: "white", color: "gray" }}
        onClick={() => dispatch(logout())}
      >
        Logout
      </Button>
    </div>
  );
};
