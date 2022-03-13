import { Action, Dispatch } from "redux";
import { print } from "graphql";
import gql from "graphql-tag";
import axios from "axios";
import { Country } from "../../models/Country";
import * as actionTypes from "./actionTypes";
import { QueriesAction } from "./type";
const { URL } = require("../url");

export const setCountries = (countries: Country[]) => {
  const action: QueriesAction = {
    type: actionTypes.COUNTRIES,
    payload: {
      countries,
    },
  };
  return action;
};

export const queryCountries = () => async (dispatch: Dispatch<Action>) => {
  try {
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
