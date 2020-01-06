import React, { Component, Fragment } from 'react';
import TopNavigation from '../components/TopNavigation/TopNavigation';
import PageTop from '../components/PageTop/PageTop';
import SignUp from '../components/SignUp/SignUp';
import Footer from '../components/Footer/Footer';


class SignUpPage extends Component {
    render() {
        return (
            <Fragment>
                <TopNavigation />
                {/* <PageTop  pagetitle="Sign in with your credentails"/> */}

                <SignUp />
                <Footer />
            </Fragment>
        )
    }
}

export default SignUpPage;
