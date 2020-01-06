import React, { Component, Fragment } from 'react'
import TopNavigation from '../components/TopNavigation/TopNavigation'
import PageTop from '../components/PageTop/PageTop'
import AllProjects from '../components/AllProjects/AllProjects'
import Footer from '../components/Footer/Footer'


class Projects extends Component {
    render() {
        return (
            <Fragment>
            <TopNavigation title="About CPO Experts" />
            <PageTop pagetitle="About Recent Projects"/>
            <AllProjects />
            <Footer />

                
            </Fragment>
        )
    }
}

export default Projects;
