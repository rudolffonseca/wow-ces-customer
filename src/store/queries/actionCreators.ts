import { Action, Dispatch } from "redux";
import { print } from "graphql";
import gql from "graphql-tag";
import axios from "axios";
import { Country } from "../../models/Country";
import * as actionTypes from "./actionTypes";
import { QueriesAction } from "./type";
import { Ticket } from "../../models/Ticket";
const { URL } = require("../url");

export const setCountries = (countries: Country[]) => {
  const action: QueriesAction = {
    type: actionTypes.COUNTRIES,
    payload: {
      countries,
      tickets: null,
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
    },
  };
  return action;
};

export const queryCountries = () => async (dispatch: Dispatch<Action>) => {
  try {
    // const response = await axios.get(URL + "countries");
    // const countries = response.data;

    const COUNTRY_QUERY = gql`
      query Countries {
        countries {
          id
          code
          name
          region
        }
      }
    `;
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
      const TICKET_BY_CUSTOMER = gql`
        query ($custId: ID) {
          ticketsByCustomer(cust_id: $custId) {
            id
            Topic {
              title
            }
            Status {
              title
            }
          }
        }
      `;

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
