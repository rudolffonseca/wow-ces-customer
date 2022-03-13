import { Dispatch, FC, useEffect, useState } from "react";
import { Alert } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { NavigateFunction, useNavigate } from "react-router-dom";
import { setMessage } from "../../store/auth/actionCreators";

type Props = {
  isGood: boolean;
  headText: string;
  bodyText: string;
};

export const AlertBox: FC<Props> = ({ isGood, headText, bodyText }: Props) => {
  const [show, setShow] = useState<boolean>(true);
  const variantType: string = isGood ? "success" : "danger";
  const dispatch: Dispatch<any> = useDispatch();
  const navigate: NavigateFunction = useNavigate();

  const handleClose = () => {
    setShow(false);
    dispatch(setMessage(null));
  };

  useEffect(() => {
    if (isGood) {
      setTimeout(() => {
        dispatch(setMessage(null));
        navigate("/");
      }, 3000);
    }
  }, [dispatch, isGood, navigate]);

  if (show) {
    return (
      <div>
        <Alert variant={variantType} onClose={() => handleClose()} dismissible>
          <Alert.Heading>{headText}</Alert.Heading>
          <p>{bodyText}</p>
        </Alert>
      </div>
    );
  } else {
    return <></>;
  }
};
