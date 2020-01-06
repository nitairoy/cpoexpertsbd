import React, { Component, Fragment } from 'react';
import TopNavigation from '../components/TopNavigation/TopNavigation';
import PageTop from '../components/PageTop/PageTop';
import SignIn from '../components/SignIn/SignIn';
import Footer from '../components/Footer/Footer';


class SignInPage extends Component {
    render() {
        return (
            <Fragment>
                <TopNavigation />
                {/* <PageTop  pagetitle="Sign in with your credentails"/> */}

                <SignIn />
                <Footer />
            </Fragment>
        )
    }
}

export default SignInPage;
