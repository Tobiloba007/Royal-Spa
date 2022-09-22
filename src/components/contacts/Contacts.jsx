import React from 'react'
import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar'
import './contacts.css'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';


const Contacts = () => {

     const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_l6xwitf', 'template_1h2iu3w', form.current, 'GEeZJphkTorPZNpG7')
      .then((result) => {
          console.log('message text');
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div>
    <Navbar />
    <div className='c-con my-4 pt-5 px-4'>
    <Form  ref={form} onSubmit={sendEmail}>
    <Form.Label>Name:</Form.Label>
    <Form.Control type="text" placeholder="enter name" name="from_name" />
    <br />
    <Form.Label>Phone No:</Form.Label>
    <Form.Control type="number" placeholder= "+234" name="phone" />
    <br />
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Email address:</Form.Label>
        <Form.Control type="email" placeholder="name@example.com" name="from_email" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Message</Form.Label>
        <Form.Control as="textarea" name="message" rows={3} placeholder="I'll like to book a 'classic facial' session at 4pm Thank you.." />
      </Form.Group>
      <Button className='c-btn px-4' type='submit'>Book</Button>
    </Form>
      </div>
    <Footer />
    </div>
  )
}

export default Contacts
