import { connect } from 'react-redux';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

import * as authActions from '../../redux/modules/auth';
import Login from './Login';


/* -----------------------------------------
  GraphQL - Apollo client
 ------------------------------------------ */

const logUser = gql`
 mutation LoginEmail($email: String!, $password: String!) {
  LoginEmail(email: $email, password: $password) {
     token,
     error
   }
 }
`;

// 2- add mutation "logUser":
const LoginWithMutation = graphql(
  logUser,
  {
    name: 'logUserMutation',
    props: ({ /* ownProps, */ logUserMutation }) => ({
      loginUser(user) {
        /* eslint no-console:
        ["error", { allow: ["warn", "error", "log"] }] */
        console.log('######################');
        console.log('USER', user);
        // console.log('loginUser', loginUser);
        console.log('######################');
        // ownProps.setMutationLoading();

        return logUserMutation(user)
          .then(
            ({
              data: {
                LoginEmail,
              },
            }) => {
              /* eslint no-console:
              ["error", { allow: ["warn", "error", "log"] }] */
              console.log('######################');
              console.log('LoginEmail', LoginEmail);
              console.log('######################');
              // ownProps.onUserLoggedIn(loginUser.token, loginUser.user);
              // ownProps.onUserLoggedIn(loginUser.token, loginUser.error);
              // ownProps.unsetMutationLoading();
              return Promise.resolve(LoginEmail);
            }
          )
          .catch(error => {
            console.log('######################');
            console.log(error);
            console.log('######################');
            // ownProps.onUserLogError(error);
            // ownProps.unsetMutationLoading();
            return Promise.reject();
          }
          );
      },
    }),
  }
)(Login);


/* -----------------------------------------
  Redux
 ------------------------------------------*/
const mapStateToProps = state => {
  const user = { user: state };
  // const user = { user: state.auth.user };
  return user;
};

export default connect(mapStateToProps, authActions)(LoginWithMutation);
