// import { style } from '@mui/system';
import React from 'react';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';

const FlexExtended = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  
`;

const ContactContainer = styled(FlexExtended)`
  margin-bottom: 80px;
  width: 100%;

  h2 {
      margin: 0 0 29px;
      font-size: 32px;
      font-weight: 550;
    }

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;

    button {
      background-color: rgb(103, 54, 221);
      font-size: .70em;
      font-weight: 500;
      color: rgb(255, 255, 255);
      text-transform: uppercase;
      text-decoration: none;
      border: none;
      text-align: center;
      border-radius: 2px;
      padding: 16px 32px;
      cursor: pointer;
      margin: 0 16px;
      letter-spacing: .1em;
    }
  }
`;

const ContactInfo = styled(FlexExtended)`
  width: 100%;

  input {
    width: 83%;
    margin: 0 17px 17px;
    padding: 12.5px;
    background-color: rgb(47, 48, 59);
    color: rgb(107, 122, 144);
    outline: none;
    border-radius: 2px;
    font-size: .85em;
    letter-spacing: .05em;
    border: 1.5px solid rgb(107, 122, 144);

    ::placeholder {
      color: rgb(107, 122, 144);
    }
  }
`;

const ContactMessage = styled(FlexExtended)`
  width: 100%;

  textarea {
    width: 83%;
    margin: 0 17px 17px;
    padding: 12.5px;
    background-color: rgb(47, 48, 59);
    color: rgb(107, 122, 144);
    outline: none;
    border-radius: 2px;
    font-size: .85em;
    letter-spacing: .05em;
    border: 1.5px solid rgb(107, 122, 144);
    height: 95px;
    resize: none;
    font-family: inherit;

    ::placeholder {
      color: rgb(107, 122, 144);
    }
  }
`;


const ContactForm = () => {
  const {
    register, 
    handleSubmit, 
    reset,
    formState: { errors }
  } = useForm();

  const onSubmit = (data) => {
    const { name, email, message } = data;

    console.log('Name: ', name);
    console.log('Email: ', email);
    console.log('Message: ', message);
  }

  return (
    <ContactContainer>
      <h2>Get In Touch!</h2>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <ContactInfo>
          <input 
            placeholder='Name' 
            type='text' 
            name='name' 
            {...register('name', {
              required: { value: true, message: 'Please enter your name' },
              maxLength: { 
                value: 30, 
                message: 'Please Use 30 characters or less' }
            })}
          />
          {errors.name && <p>{errors.name.message}</p>}

          <input 
            placeholder='Email address' 
            type='email' 
            name='email' 
            {...register('email', {
              required: true,
              pattern: 
                /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
            })}
          />
          {errors.email && <p>Please enter a valid email</p>}
        </ContactInfo>
        <ContactMessage>
          <textarea 
            placeholder='Message' 
            name='message' 
            {...register('message', {
              required: { value: true, message: 'Please enter a message' }
            })}
          />
          {errors.message && <p>{errors.message.message}</p>}
        </ContactMessage>
        <button type='submit'>Submit</button>
      </form>
    </ContactContainer>
  );
}

export default ContactForm;
