import { FC, useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { TicketsList } from "../../components/TicketsList";
import { getCustomerId, hasToken } from "../../store/auth/selectors";
import loading from "../../images/loading.gif";
import "./style.css";
import { Button } from "react-bootstrap";

export const Dashboard: FC = () => {
  const navigate = useNavigate();
  const token: boolean = useSelector(hasToken);
  const userId: string = useSelector(getCustomerId);

  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
  });

  return !token ? (
    <>
      <img src={loading} alt="loading" className="loading" />
    </>
  ) : (
    //FIXME: vulnerability: you can put any other id and access someone else data
    <div>
      <TicketsList user_id={userId}></TicketsList>
      <Button
        onClick={() => navigate("/customer")}
        style={{ display: "block", margin: "0 auto" }}
      >
        New Enquire!
      </Button>
    </div>
  );
};
