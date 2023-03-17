import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import AboutMe from './AboutMe/AboutMe'
import './body.css'
import { Skills } from './Skills/Skills';
import ProgrammingExperience from './ProgrammingExperience/ProgrammingExperience';
import LanguageSkills from './LanguageSkills/LanguageSkills'
import LatestProjects from './Projects/LatestProjects/LatestProjects'
import OtherProjects from './Projects/OtherProjects/OtherProjects';
import Education from './Education/Education';
import Volunteering from './Volunteering/Volunteering';
import Dog from './Dog/Dog';
import Cookie from './Cookie/Cookie';

export default class Body extends React.Component {
    render() {
        return (
            <Container fluid={true}>
                <Row>
                    <Col lg={8} xl={8} xxl={8} className='col main'>
                        <Cookie />
                        <AboutMe />
                        <ProgrammingExperience />
                        <LatestProjects />
                        <OtherProjects />
                    </Col>
                    <Col lg={4} xl={4} xxl={4} className='col aside'>
                        <Skills />
                        <LanguageSkills />
                        <Education />
                        <Volunteering />
                        <Dog />
                    </Col>
                </Row>
            </Container>
        );
    }
}