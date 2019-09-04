import React, { Component } from 'react';
import { Row, Form, Col, Button, Alert } from 'react-bootstrap';
import { connect } from 'react-redux';
import { login } from '../../redux/reducer';
import { withRouter } from 'react-router-dom'

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.onSubmit = this.onSubmit.bind(this);
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.isLoginSuccess && nextProps.isLoginSuccess !== this.props.login.success) {
      this.props.history.push('/employeelist');
    }
  }
  onSubmit(e) {
    e.preventDefault();
    let { email, password } = this.state;
    this.props.login(email, password);
    this.setState({
      email: '',
      password: ''
    });
  }
  render() {
    let { email, password } = this.state;
    let { isLoginPending, loginError } = this.props;
    return (
      <div >
        {loginError &&
          <Alert variant="danger" className="alert">
            {loginError && <div>{loginError.message}</div>}
          </Alert>
        }
        <div>
          <Form>
            <Form.Group as={Row} controlId="formHorizontalEmail">
              <Form.Label column sm={3} className="Label">
                Username
           </Form.Label>
              <Col sm={10}>
                <input className="form-control" placeholder="Username" type="email" name="email" onChange={e => this.setState({ email: e.target.value })} value={email} />
              </Col>
            </Form.Group>
            <Form.Group as={Row} controlId="formHorizontalEmail">
              <Form.Label column sm={3} className="Label">
                Password
            </Form.Label>
              <Col sm={10}>
                <input className="form-control" placeholder="Password" type="password" name="password" onChange={e => this.setState({ password: e.target.value })} value={password} />
              </Col>
            </Form.Group>
            <Button type="submit" onClick={this.onSubmit}>
              Login
              </Button>
            <div className="Label">
              {isLoginPending && <div>Please wait...</div>}
            </div>
          </Form>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    isLoginPending: state.isLoginPending,
    isLoginSuccess: state.isLoginSuccess,
    loginError: state.loginError,
    data: state.data
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    login: (email, password) => dispatch(login(email, password))
  };
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LoginForm));
