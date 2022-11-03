import './contact.css'
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { serverIp } from '../../../static/constants'
import axios from 'axios';


export default class Contact extends React.Component {

    render() {
        return (
            <div><ContactForm /></div>
        );
    }
}



function ContactForm() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const validateEmail = (email) => {
        return email.match(
            /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{1,}))$/
        );
    };
    const checkInputs = event => {
        const sendButton = document.querySelector('.modalSubmit');
        const formName = document.querySelector('#name').value;
        const formMail = document.querySelector('#email').value;
        const msg = document.querySelector('#msgToFill');
        const formMessage = document.querySelector('#message').value;
        if (formName.length > 5 && formMessage.length > 20 && validateEmail(formMail)) { sendButton.disabled = false; msg.innerHTML = ''; }
        else { sendButton.disabled = true; msg.innerHTML = '|&gt;&gt; Please fill the input boxes first &lt;&lt;|'; }

    };

    const handleSubmit = event => {
        event.preventDefault();
        const formName = document.querySelector('#name').value;
        const formMail = document.querySelector('#email').value;
        const formMessage = document.querySelector('#message').value;
        const param = {
            name: formName,
            email: formMail,
            message: formMessage
        }

        axios.post(serverIp + 'email', param).then()
        handleClose();
    };


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
                                <Form.Control onKeyUp={checkInputs} className='name' type="text" id='name' placeholder="How can I call you" />
                                <Form.Control onKeyUp={checkInputs} className='email' type="email" id='email' placeholder="Enter email" />
                            </div>

                            <div className='shareText'>
                                We'll never share your email with anyone else.
                            </div>
                            <Form.Control onKeyUp={checkInputs} className='textArea' id='message' as="textarea" rows={3} />
                        </Form.Group>
                        <div id='msgToFill' style={{ textAlign: 'center' }}>
                            |&gt;&gt; Please fill the input boxes first &lt;&lt;|
                        </div>
                        <Button disabled onClick={handleSubmit} variant="primary" type="submit" className='center modalSubmit'>
                            Send
                        </Button>

                    </Form>
                </Modal.Body>
            </Modal>
        </>
    );
}