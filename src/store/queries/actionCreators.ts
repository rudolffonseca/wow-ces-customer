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
  ADD_TICKET,
  COUNTRY_QUERY,
  MESSAGES_BY_TICKET,
  PRODUCTS_QUERY,
  TICKET_BY_CUSTOMER,
  TOPIC_QUERY,
} from "./gqlQueries";
import { Topic } from "../../models/Topics";
import Product from "../../models/Product";
const { URL } = require("../url");

export const setCountries = (countries: Country[]) => {
  const action: QueriesAction = {
    type: actionTypes.COUNTRIES,
    payload: {
      countries,
      topics: null,
      products: null,
      tickets: null,
      messages: null,
    },
  };
  return action;
};

export const setTopics = (topics: Topic[]) => {
  const action: QueriesAction = {
    type: actionTypes.TOPICS,
    payload: {
      countries: null,
      topics,
      products: null,
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
      topics: null,
      products: null,
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
      topics: null,
      products: null,
      tickets: null,
      messages,
    },
  };
  return action;
};

export const setProducts = (products: Product[]) => {
  const action: QueriesAction = {
    type: actionTypes.PRODUCTS,
    payload: {
      countries: null,
      topics: null,
      products,
      tickets: null,
      messages: null,
    },
  };
  return action;
};

// query for the list of countries on the signup page
export const queryCountries = () => async (dispatch: Dispatch<Action>) => {
  try {
    const response = await axios.get(URL + "countries");
    const countries = response.data;
    dispatch(setCountries(countries));
  } catch (error) {
    console.log((error as Error).message);
    return null;
  }
};

export const queryTopics =
  () => async (dispatch: Dispatch<Action>, getState: any) => {
    const token: string = getState().authStore.token;
    try {
      const response = await axios.post(
        URL + "graphql",
        {
          query: print(TOPIC_QUERY),
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const topics: Topic[] = response.data.data.getTopics.map(
        (topic: {
          id: string;
          title: string;
          createdAt: number;
          updatedAt: number;
        }) => topic
      );
      dispatch(setTopics(topics));
    } catch (error) {
      console.log((error as Error).message);
    }
  };

export const queryProducts =
  () => async (dispatch: Dispatch<Action>, getState: any) => {
    const token: string = getState().authStore.token;

    try {
      const response = await axios.post(
        URL + "graphql",
        {
          query: print(PRODUCTS_QUERY),
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const products: Product[] = response.data.data.getProducts.map(
        (product: Product) => product
      );
      dispatch(setProducts(products));
    } catch (error) {
      console.log((error as Error).message);
    }
  };

export const ticketByCustomer =
  (id: string) => async (dispatch: Dispatch<Action>, getState: any) => {
    const token: string = getState().authStore.token;
    try {
      const response = await axios.post(
        URL + "graphql",
        {
          query: print(TICKET_BY_CUSTOMER),
          variables: {
            custId: id,
          },
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
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
  return async (dispatch: Dispatch<Action>, getState: any) => {
    const token: string = getState().authStore.token;
    try {
      const response = await axios.post(
        URL + "graphql",
        {
          query: print(MESSAGES_BY_TICKET),
          variables: {
            ticketId: ticket_id,
          },
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const messages = response.data.data.messagesByTicket;
      dispatch(setMessages(messages));
    } catch (error) {
      console.log((error as Error).message);
    }
  };
};

export const addNewMessage =
  (message: Message, ticket_id: string) =>
  async (dispatch: Dispatch<any>, getState: any) => {
    const token: string = getState().authStore.token;
    try {
      const response = await axios.post(
        URL + "graphql",
        {
          query: print(ADD_MESSAGE),
          variables: {
            message: message.message,
            authorCust: message.authorCustomer,
            ticketId: ticket_id,
            read: message.read,
          },
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      dispatch(messagesByTicket(ticket_id));
    } catch (error) {
      console.log((error as Error).message);
    }
  };

export const addNewTicket =
  (product_id: string, topic_id: string, message: string) =>
  async (dispatch: Dispatch<any>, getState: any) => {
    const customer_id: string = getState().authStore.userId;
    const token: string = getState().authStore.token;
    try {
      const response = await axios.post(
        URL + "graphql",
        {
          query: print(ADD_TICKET),
          variables: {
            customerId: customer_id,
            productId: product_id,
            topicId: topic_id,
            message,
          },
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      dispatch(ticketByCustomer(customer_id));
      console.log("response: ", response);
    } catch (error) {
      console.log((error as Error).message);
    }
  };
