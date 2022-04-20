import { Country } from "../../models/Country";
import { Message } from "../../models/Message";
import { Ticket } from "../../models/Ticket";
import { Topic } from "../../models/Topics";

type QueriesState = {
  countries: Country[] | null;
  topics: Topic[] | null;
  tickets: Ticket[] | null;
  messages: Message[] | null;
};

type QueriesAction = {
  type: string;
  payload: {
    countries: Country[] | null;
    topics: Topic[] | null;
    tickets: Ticket[] | null;
    messages: Message[] | null;
  };
};
