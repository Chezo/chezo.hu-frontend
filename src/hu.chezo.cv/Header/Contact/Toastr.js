import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Toast from 'react-bootstrap/Toast';

function Success() {
    const [showA, setShowA] = useState(true);


    const toggleShowA = () => setShowA(!showA);


    return (
        <Row>
            <Col md={6} className="mb-2">
                <Button onClick={toggleShowA} className="mb-2">
                    Toggle Toast <strong>with</strong> Animation
                </Button>
                <Toast show={showA} animation={true} autohide={true} onClose={toggleShowA} bg={dark}>
                    <Toast.Header>
                        <img
                            src="holder.js/20x20?text=%20"
                            className="rounded me-2"
                            alt=""
                        />
                        <strong className="me-auto">Success</strong>
                        <small>now</small>
                    </Toast.Header>
                    <Toast.Body>Woohoo, you're successfully sent a message to me! I'll reply to you soon! </Toast.Body>
                </Toast>
            </Col>
        </Row>
    );
}

export default Success;