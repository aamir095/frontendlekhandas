import gql from 'graphql-tag';
import ApolloClient from 'apollo-boost';

export const client = new ApolloClient({
    uri: 'http://192.168.1.66:8000/graphql/',
  });
  
export const POST_MUTATION = gql`
mutation postMutation($address: String!, $description: String!, $email: String!, $phoneNo:String!,$verboseName:String!) {
  createCredRequest(address:$address,description: $description, email: $email, phoneNo: $phoneNo, verboseName: $verboseName){
    credRequest{address
    description
    email
    phoneNo
    verboseName
    }
  }
}
`;

export const LOGIN_MUTATION = gql`
mutation loginMutation($username: String!, $password: String!) {
  tokenAuth(username:$username,password: $password){
    token
  }
}
`;

