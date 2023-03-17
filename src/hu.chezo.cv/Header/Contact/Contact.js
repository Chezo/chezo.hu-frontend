import './contact.css'
import React, { useState, useCallback } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { serverIp } from '../../../static/constants'
import axios from 'axios';
import ReactRecaptcha3 from 'react-google-recaptcha3';
import Toastr from './Toastr';

export default class Contact extends React.Component {
    render() {
        return (
            <div><ContactForm /></div>
        );
    }
}

function ContactForm() {
    const [show, setShow] = useState(false);
    const [token, setToken] = useState('');
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleSubmit = useCallback(async () => {
        try {
            // Get the token from the ReCaptcha widget
            const recaptchaToken = await ReactRecaptcha3.getToken();
            console.log("ReCaptcha token:", recaptchaToken);

            // Send a request to verify the token with the ReCaptcha server
            const verifyResponse = await axios.post(`${serverIp}verify-recaptcha`, {
                token: recaptchaToken,
            });
            console.log("Verify response:", verifyResponse);

            // Check if the token is valid
            if (verifyResponse.data) {
                // Make the request to send the email
                const formName = document.querySelector('#name').value;
                const formMail = document.querySelector('#email').value;
                const formMessage = document.querySelector('#message').value;
                const param = {
                    name: formName,
                    email: formMail,
                    message: formMessage,
                };

                const emailResponse = await axios.post(`${serverIp}email`, param);
                console.log("Email response:", emailResponse);
                if (emailResponse.status == 200) {
                    Toastr.call();
                }
                handleClose();
            } else {
                // Token is invalid, show an error message
                const msg = document.querySelector('#msgToFill');
                msg.style.visibility = 'visible';
                console.log(verifyResponse.data)
                // msg.innerHTML("Some error happened:");
            }
        } catch (error) {
            console.error(error);
        }
    }, [handleClose]);


    return (
        <>
            <button className='mailToMe button' onClick={handleShow}>
                Contact me
            </button>

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                size="lg"
                centered
            >
                <Modal.Header closeButton closeVariant='white'>
                    <Modal.Title className="ms-auto">Contact with me</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className='contactForm'>
                            <div className='flexContainer'>
                                <Form.Control className='name' type="text" id='name' placeholder="How can I call you" />
                                <Form.Control className='email' type="email" id='email' placeholder="Enter email" />
                            </div>

                            <div className='shareText'>
                                We'll never share your email with anyone else.
                            </div>
                            <Form.Control className='textArea' id='message' as="textarea" rows={3} />
                        </Form.Group>
                        <div id='msgToFill' style={{ textAlign: 'center', visibility: 'hidden' }}>
                            |&gt;&gt; Please fill the input boxes first &lt;&lt;|
                        </div>
                        <Button onClick={handleSubmit} variant="primary" className='center modalSubmit'>
                            Send
                        </Button>

                    </Form>
                </Modal.Body>
            </Modal>
        </>
    );
}