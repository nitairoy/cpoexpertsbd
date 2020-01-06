import React, { Component, Fragment } from 'react';
import '../../asset/css/custom.css';
import '../../asset/css/bootstrap.min.css';
import logo from '../../asset/image/CPOExperts-logo.svg';
// import {Container, Row, Col, Form, Button} from 'react-bootstrap';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import Recaptcha from 'react-recaptcha';


class SignIn extends Component {
  constructor(props){
    super(props)
      this.handleRecaptcha = this.handleRecaptcha.bind(this);
      this.recaptchaLoaded = this.recaptchaLoaded.bind(this);
      this.verifyCallback = this.verifyCallback.bind(this);
    this.state = {
      isVerified: false
    }
  }

  recaptchaLoaded(){
    console.log("captch has been loaded successfully")
  }

  handleRecaptcha(){
    if(this.state.isVerified){
      alert('You have successfully sing up')
    }else{
      alert('Please Tick the Recaptcha')
    }
  }

verifyCallback(response){
  if(response){
    this.setState({
      isVerified: true
    })
  }
}

  render() {
    return (
      <Fragment>
        <Form className="signInForm">
        <h2 className="text-center pt-5"> <span>Login to your account</span></h2>
        <FormGroup className="pt-5">
          <Label>Email</Label>
          <Input type="email"  />
        </FormGroup>
        <FormGroup>
          <Label>Password</Label>
          <Input type="password"  />
        </FormGroup>
        <FormGroup check>
        <Label check>
          <Input type="checkbox" />{' '}
          Remember Me
            </Label>
          </FormGroup> <br/>
        <Button onClick={this.handleRecaptcha} className="btn-lg btn-info btn-block">Log In</Button> <br />
        
        <Recaptcha
                sitekey="6LfL4sMUAAAAAAIAmy_XoauXrT15bVnT5OZtDGmV"
                render="explicit"
                onloadCallback={this.recaptchaLoaded}
                verifyCallback={this.verifyCallback}
        />
        
        </Form>
        <div className="text-center pt-2">
          <a href="/signup">Create Account</a>
          <span className="p-2">|</span>
          <a href="/sign-up">Forgot Password</a>
        </div>
      </Fragment>
    )
  }
}

export default SignIn;
