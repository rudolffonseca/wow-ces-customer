import { Country } from "../../models/Country";
import { Message } from "../../models/Message";
import { Ticket } from "../../models/Ticket";

type QueriesState = {
  countries: Country[] | null;
  tickets: Ticket[] | null;
  messages: Message[] | null;
};

type QueriesAction = {
  type: string;
  payload: {
    countries: Country[] | null;
    tickets: Ticket[] | null;
    messages: Message[] | null;
  };
};
