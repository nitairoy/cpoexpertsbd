import React, { Component, Fragment } from 'react';
import '../../asset/css/custom.css';
import '../../asset/css/bootstrap.min.css';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import Recaptcha from 'react-recaptcha';


class SignUp extends Component {

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
      // console.log('captcha has loaded')
    }

  handleRecaptcha(){
    if(this.state.isVerified){
      alert('You have successfully subscribed')
    }else{
      alert('Please tick the Recaptcha')
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
        <h2 className="text-center"> <span>Create your account</span></h2>
        <FormGroup className="pt-3">
          <Label>First Name</Label>
          <Input type="text"  />
        </FormGroup>
        <FormGroup >
          <Label>Last Name</Label>
          <Input type="text"  />
        </FormGroup>
        <FormGroup >
          <Label>Email</Label>
          <Input type="email" placeholder="your@domain.com" />
        </FormGroup>
        <FormGroup>
          <Label>Password</Label>
          <Input type="password"  />
        </FormGroup>
        <FormGroup>
          <Label>Confirm Password</Label>
          <Input type="password"  />
        </FormGroup>

        <Button onClick={this.handleRecaptcha} className="btn-lg btn-info btn-block">Sign Up</Button> <br/>

            <Recaptcha
                sitekey="6LfL4sMUAAAAAAIAmy_XoauXrT15bVnT5OZtDGmV"
                render="explicit"
                onloadCallback={this.recaptchaLoaded}
                verifyCallback={this.verifyCallback}
            />

        </Form>
        <div className="text-center pt-2">
        <p>Already have an account. <a href="/signin">Sign In Now</a></p>
        </div>
      </Fragment>
    )
  }
}
export default SignUp;
