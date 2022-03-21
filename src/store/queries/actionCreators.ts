import { Action, Dispatch } from "redux";
import { print } from "graphql";
import axios from "axios";
import { Country } from "../../models/Country";
import * as actionTypes from "./actionTypes";
import { QueriesAction } from "./type";
import { Ticket } from "../../models/Ticket";
import { Message } from "../../models/Message";
import {
  ADD_MESSAGE,
  COUNTRY_QUERY,
  MESSAGES_BY_TICKET,
  TICKET_BY_CUSTOMER,
} from "./gqlQueries";
const { URL } = require("../url");

export const setCountries = (countries: Country[]) => {
  const action: QueriesAction = {
    type: actionTypes.COUNTRIES,
    payload: {
      countries,
      tickets: null,
      messages: null,
    },
  };
  return action;
};

export const setTicketList = (tickets: Ticket[]) => {
  const action: QueriesAction = {
    type: actionTypes.TICKETS,
    payload: {
      countries: null,
      tickets,
      messages: null,
    },
  };
  return action;
};

export const setMessages = (messages: Message[]) => {
  const action: QueriesAction = {
    type: actionTypes.MESSAGES,
    payload: {
      countries: null,
      tickets: null,
      messages,
    },
  };
  return action;
};

// query for the list of countries on the signup page
export const queryCountries = () => async (dispatch: Dispatch<Action>) => {
  try {
    // const response = await axios.get(URL + "countries");
    // const countries = response.data;
    const response = await axios.post(URL + "graphql", {
      query: print(COUNTRY_QUERY),
    });
    const countries: Country[] = response.data.data.countries;
    dispatch(setCountries(countries));
  } catch (error) {
    console.log((error as Error).message);
    return null;
  }
};

export const ticketByCustomer =
  (id: string) => async (dispatch: Dispatch<Action>) => {
    try {
      const response = await axios.post(URL + "graphql", {
        query: print(TICKET_BY_CUSTOMER),
        variables: {
          custId: id,
        },
      });
      const ticketsList = response.data.data.ticketsByCustomer.map(
        (ticket: {
          id: string;
          Topic: { title: string };
          Status: { title: string };
        }) => ({
          id: ticket.id,
          topic: ticket.Topic.title,
          status: ticket.Status.title,
        })
      );
      dispatch(setTicketList(ticketsList));
    } catch (error) {
      console.log((error as Error).message);
    }
  };

export const messagesByTicket = (ticket_id: string) => {
  return async (dispatch: Dispatch<Action>) => {
    try {
      const response = await axios.post(URL + "graphql", {
        query: print(MESSAGES_BY_TICKET),
        variables: {
          ticketId: ticket_id,
        },
      });
      const messages = response.data.data.messagesByTicket;
      dispatch(setMessages(messages));
    } catch (error) {
      console.log((error as Error).message);
    }
  };
};

export const addNewMessage =
  (message: Message, ticket_id: string) => async (dispatch: Dispatch<any>) => {
    try {
      const response = await axios.post(URL + "graphql", {
        query: print(ADD_MESSAGE),
        variables: {
          message: message.message,
          authorCust: message.authorCustomer,
          ticketId: ticket_id,
          read: message.read,
        },
      });
      dispatch(messagesByTicket(ticket_id));
    } catch (error) {
      console.log((error as Error).message);
    }
  };
