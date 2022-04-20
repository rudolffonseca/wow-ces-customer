import gql from "graphql-tag";

export const TOPIC_QUERY = gql`
  query {
    getTopics {
      id
      title
      createdAt
      updatedAt
    }
  }
`;

export const COUNTRY_QUERY = gql`
  query Countries {
    countries {
      id
      code
      name
      region
    }
  }
`;

export const TICKET_BY_CUSTOMER = gql`
  query ($custId: ID) {
    ticketsByCustomer(cust_id: $custId) {
      id
      Topic {
        title
      }
      Status {
        title
      }
      Messages {
        id
        message
        read
      }
    }
  }
`;

export const MESSAGES_BY_TICKET = gql`
  query ($ticketId: ID) {
    messagesByTicket(ticket_id: $ticketId) {
      message
      id
      read
      authorCustomer
      createdAt
    }
  }
`;

export const ADD_MESSAGE = gql`
  mutation (
    $message: String!
    $authorCust: Boolean
    $ticketId: ID
    $read: Boolean
  ) {
    addMessage(
      message: $message
      authorCust: $authorCust
      ticket_id: $ticketId
      read: $read
    ) {
      id
      message
      read
      authorCustomer
      createdAt
    }
  }
`;
