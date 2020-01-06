import React, { Component, Fragment } from 'react';
import {Route, Switch,} from "react-router-dom";
import HomePage from '../pages/HomePage';
import AboutPage from '../pages/AboutPage';
import ContactPage from '../pages/ContactPage';
import ServicePage from '../pages/ServicePage';
import Projects from '../pages/Projects';
import SpecializationPage from '../pages/SpecializationPage';
import Pricing from '../components/Pricing/Pricing';
import AllPricing from '../pages/AllPricing';
import SignInPage from '../pages/SignInPage';
import SignUpPage from '../pages/SignUpPage';

 class AppRoute extends Component {
    render() {
        return (
            <Fragment>
                <Switch>
                    <Route exact path="/" component={HomePage}/>
                    <Route exact path="/pricing" component={AllPricing}/>
                    <Route exact path="/aboutus" component={AboutPage}/>
                    <Route exact path="/contact" component={ContactPage}/>
                    <Route exact path="/services" component={ServicePage}/>
                    <Route exact path="/projects" component={Projects}/>
                    <Route exact path="/specialization" component={SpecializationPage}/>
                    <Route exact path="/signin" component={SignInPage}/>
                    <Route exact path="/signup" component={SignUpPage}/>

                </Switch>
            </Fragment>
        )
    }
}
export default AppRoute;
