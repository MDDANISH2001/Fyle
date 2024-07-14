import React, { useState } from 'react';
import { IoClose } from "react-icons/io5";
import axios from "axios";
import InputField from './InputField';
// import './ContactForm.css';

function ContactForm({ onClose }) {
  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    lastName: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("https://getform.io/f/ajjemdra", formData, {
        headers: {'Accept': 'application/json'}
      });
      if (response.status === 200) {
        alert('Form submitted successfully!');
        onClose();
      } else {
        alert('Failed to submit the form.');
      }
    } catch (error) {
      console.error(error);
      alert('Failed to submit the form.');
    }
  };

  return (
    <div className="contact-form-overlay">
      <div className="contact-form-container">
        <button className="close-btn" onClick={onClose}><IoClose /></button>
        <h3 >Talk to Us</h3>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
          <InputField name='email' placeholder={"Work Email"} value={formData.email} onChange={handleChange} required={true}/>
          </div>
          <div className='nameClass'>
          <div className="form-group nameClass">
          <InputField name='firstName' placeholder={"First Name"} value={formData.firstName} onChange={handleChange} required={true}/>
          </div>
          <div className="form-group nameClass">
          <InputField name='lastName' placeholder={"Last Name"} value={formData.lastName} onChange={handleChange} required={true}/>
          </div>
          </div>
          <div className="form-group">
            <label>
              <input type="checkbox" required  className='checkBox'/> I agree to the terms and conditions
            </label>
          </div>
          <button type="submit" className="submitButton">Contact Us</button>
        </form>
      </div>
    </div>
  );
}

export default ContactForm;
