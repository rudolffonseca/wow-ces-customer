import { Country } from "../../models/Country";
import { Ticket } from "../../models/Ticket";

type QueriesState = {
  countries: Country[] | null;
  tickets: Ticket[] | null;
};

type QueriesAction = {
  type: string;
  payload: {
    countries: Country[] | null;
    tickets: Ticket[] | null;
  };
};
