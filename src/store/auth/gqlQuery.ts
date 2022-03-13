import gql from "graphql-tag";

export const LOGIN_DATA = gql`
  mutation Login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      customer {
        id
      }
    }
  }
`;

export const NEW_CUSTOMER = gql`
  mutation Mutation(
    $name: String!
    $email: String!
    $countryId: ID!
    $password: String!
  ) {
    signup(
      name: $name
      email: $email
      country_id: $countryId
      password: $password
    ) {
      name
      email
      country_id
      password
    }
  }
`;
