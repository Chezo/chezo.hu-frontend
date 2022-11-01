import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './footer.css'


export default class Footer extends React.Component {

    render() {
        return (
            <Container className='footer' fluid={true}>
                <Row>
                    <Col className='lastRow'><CopyRight /></Col>
                </Row>
            </Container>
        )
    }
}

function CopyRight() {

    if ((new Date().getFullYear()) === 2022) {
        return (<div>Zsolt Nagy 2022 ©</div>);
    } else {
        return (<div>Zsolt Nagy 2022-{new Date().getFullYear()} ©</div>);
    }

}