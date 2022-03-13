import { FC, useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { TicketsList } from "../../components/TicketsList";
import { getCustomerId, hasToken } from "../../store/auth/selectors";

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
    <></>
  ) : (
    //FIXME: vulnerability: you can put any other id and access someone else data
    <div>
      <TicketsList user_id={userId}></TicketsList>
    </div>
  );
};
