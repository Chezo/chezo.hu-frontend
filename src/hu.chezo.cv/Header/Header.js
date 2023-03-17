import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { TypeAnimation } from 'react-type-animation';
import './header.css'
import Contact from './Contact/Contact';
import profilePicAVIF from '../../static/images/profile.avif'
import profilePicWEBP from '../../static/images/profile.webp'

import { socials, sequences } from '../../static/constants'


export default class Header extends React.Component {

    render() {
        return (
            <Container fluid={true} className='header' >
                <Row >
                    <ProfilePic></ProfilePic>
                    <Text></Text>
                    <MsgMe></MsgMe>
                </Row>
            </Container>
        )
    }
}

function ProfilePic() {
    return (
        <Col className='profileCol '>
            <picture>
                <source srcSet={profilePicAVIF} type='image/avif' alt="Profile" />
                <source srcSet={profilePicWEBP} type='image/webp' alt="Profile" />
                <img style={{ width: 250, height: 250 }} className='profilePic center'></img>
            </picture>
        </Col>
    );
}


function MsgMe() {
    return (
        <Col className='buttonContainer'>

            <Contact />

        </Col>
    );
}

function Text() {
    return (
        <Col className='textCol' >
            <div className='verticalAlign'>
                <div className='textContainer'>
                    <Row><p className='myName'>Zsolt Nagy</p></Row>
                    <Row><Type></Type></Row>
                    <Row><Icons></Icons></Row>
                </div></div>
        </Col>
    );
}

function Icons() {
    return (
        <div className='iconContainer'>
            {socials.map((element, index) =>
                <a href={element.url} key={index}>
                    <img style={{ width: 40, height: 40 }} src={element.image} alt={element.name} className='icon' ></img></a>
            )}
        </div>
    );
}


function Type() {
    return (

        <TypeAnimation
            className='animatedText'
            sequence={sequences}
            wrapper="div"
            cursor={true}
            repeat={Infinity}
        ></TypeAnimation >
    )
}
