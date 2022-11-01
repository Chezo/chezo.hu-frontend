import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { TypeAnimation } from 'react-type-animation';
import './header.css'
import Contact from './Contact/Contact';
import profilePic from '../../static/images/profile.avif'

import { socials } from '../../static/constants'


const sequences = [

    'I am a back-end developer',
    2000,
    'I am an experimential educator',
    2000,
    'I am a game developer',
    2000,
    'I am a designer',
    2000,
    'I am a hard worker',
    2000,
    'I am a dog owner',
    2000,
    'I am a content creator',
    2000,
]

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
            <img src={profilePic} alt="Profile" style={{ width: 250, height: 250 }} className='profilePic center' />
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
                <img key={index} style={{ width: 40, height: 40 }} src={element.image} alt={element.name} className='icon' onClick={() => handleClick(element.url)}></img>
            )}
        </div>
    );
}

function handleClick(url) {
    // 👇️ refers to the image element
    window.open(url, "_blank");
};


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
