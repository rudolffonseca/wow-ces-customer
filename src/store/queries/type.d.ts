import { Country } from "../../models/Country";

type QueriesState = {
  countries: Country[] | null;
};

type QueriesAction = {
  type: string;
  payload: {
    countries: Country[] | null;
  };
};
