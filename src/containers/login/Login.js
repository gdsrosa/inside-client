import React, { Component } from 'react';
import { Button, Row, Form, Input } from 'antd';
import PropTypes from 'prop-types';
import './Login.css';

const FormItem = Form.Item;

class Login extends Component {
  static propTypes = {
    // react-router 4:
    // match: PropTypes.object.isRequired,
    // location: PropTypes.object.isRequired,
    // history: PropTypes.object.isRequired,

    // // views props:
    // currentView: PropTypes.string.isRequired,
    // enterLogin:  PropTypes.func.isRequired,
    // leaveLogin:  PropTypes.func.isRequired,

    // apollo props:
    // user: PropTypes.shape({
    //   username: PropTypes.string,
    // }),

    // // auth props:
    // userIsAuthenticated: PropTypes.bool.isRequired,
    // mutationLoading:     PropTypes.bool.isRequired,
    // error:               PropTypes.object,

    // apollo actions
    loginUser: PropTypes.func.isRequired,

    // redux actions
    // nUserLoggedIn: PropTypes.func.isRequired,
    // resetError:     PropTypes.func.isRequired
  };

  static getDefaultProps = {
    user: undefined,
  }

  state = {
    // viewEntersAnim: true,
    email: '',
    password: '',
  };

  handlesOnEmailChange = event => {
    event.preventDefault();
    // should add some validator before setState in real use cases
    this.setState({ email: event.target.value });
  }

  handlesOnPasswordChange = event => {
    event.preventDefault();
    // should add some validator before setState in real use cases
    this.setState({ password: event.target.value });
  }

  handlesOnLogin = async event => {
    event.preventDefault();
    const {
      loginUser,
      // history,
    } = this.props;

    const {
      email,
      password,
    } = this.state;

    const variables = {
      email,
      password,
    };

    try {
      const result = await loginUser({ variables });

      /* eslint no-console:
      ["error", { allow: ["warn", "error", "log"] }] */
      console.log('######################');
      console.log('AEE result', result);
      console.log('######################');
      // history.push({ pathname: '/protected' });
    } catch (error) {
      console.log('login went wrong..., error: ', error);
    }
  }

  render() {
    const {
      // viewEntersAnim,
      email,
      password,
    } = this.state;
    // const {
    //   mutationLoading,
    //   error
    // } = this.props;
    return (
      <div className="form">
        <div className="logo">
          <span>INSIDE</span>
        </div>
        <form>
          <FormItem>
            <Input
              size="large"
              placeholder="Email"
              value={email}
              onChange={this.handlesOnEmailChange} />
          </FormItem>
          <FormItem>
            <Input
              size="large"
              type="password"
              placeholder="Password"
              value={password}
              onChange={this.handlesOnPasswordChange} />
          </FormItem>
          <Row>
            <Button type="primary" size="large" onClick={this.handlesOnLogin}>
              Sign in
            </Button>
          </Row>
        </form>
      </div>
    );
  }
}

export default Login;
