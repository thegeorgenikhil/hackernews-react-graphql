import { gql } from "@apollo/client";

export const LOGIN_USER = gql`
  mutation LoginUser($input: Login!) {
    login(input: $input)
  }
`;

export const POST_LINK = gql`
  mutation CreateLink($input: NewLink!) {
    createLink(input: $input) {
      id
    }
  }
`;

export const SIGNUP_USER = gql`
  mutation CreateUser($input: NewUser!) {
    createUser(input: $input)
  }
`;
