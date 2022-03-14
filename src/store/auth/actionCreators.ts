import axios from "axios";
import * as actionTypes from "./actionTypes";
import { print } from "graphql";
import { Action, Dispatch } from "redux";
import { Customer } from "../../models/Customer";

const { URL } = require("../url");
const { LOGIN_DATA, NEW_CUSTOMER } = require("./gqlQuery");

export function login(data: AuthState) {
  const action: AuthAction = {
    type: actionTypes.LOGIN,
    payload: data,
  };
  return action;
}

export function logout() {
  const action: AuthAction = {
    type: actionTypes.LOGOUT,
    payload: {
      token: null,
      userId: null,
      email: null,
      message: "Logout successful!",
    },
  };
  return action;
}

export function setMessage(message: string | null) {
  const action: AuthAction = {
    type: actionTypes.SIGNUP,
    payload: {
      token: null,
      userId: null,
      email: null,
      message,
    },
  };
  return action;
}

// calls the graphql mutation to authenticate a user and return a token
export function authentication(email: string, password: string) {
  return async (dispatch: Dispatch<Action>) => {
    try {
      const response = await axios.post(URL + "auth/login", {
        email,
        password,
      });
      const data: AuthState = {
        token: response.data.token,
        userId: response.data.id,
        email,
        message: "Login successful!",
      };
      dispatch(login(data));
    } catch (error) {
      console.log((error as Error).message);
    }
  };
}

//TODO: change to express endpoint
export function registration(newCustomer: Customer) {
  return async (dispatch: Dispatch<Action>) => {
    try {
      const response = await axios.post(URL + "graphql", {
        query: print(NEW_CUSTOMER),
        variables: {
          name: newCustomer.name,
          email: newCustomer.email,
          countryId: newCustomer.country,
          password: newCustomer.password,
        },
      });
      const errorMessage = response.data.errors; //.errors[0].message;
      if (errorMessage) {
        dispatch(setMessage(errorMessage[0].message));
      } else {
        dispatch(setMessage("You're signed up!"));
      }
      // FIXME: the server is throwing the error but axios is not catching it
    } catch (error) {
      console.log((error as Error).message);
    }
  };
}
