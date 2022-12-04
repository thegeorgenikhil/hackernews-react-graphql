import { gql } from "@apollo/client";


export const GET_LINKS = gql`
  query GetLinks {
    links {
      title
      address
      id
      user {
        id
        name
      }
    }
  }
`;