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

  return (
    <ContactContainer>
      <h2>Get In Touch!</h2>
      <form>
        <ContactInfo>
          <input placeholder='Name' type='text' name='name' />
          <input placeholder='Email address' type='email' name='email' />
        </ContactInfo>
        <ContactMessage>
          <textarea placeholder='Message' name='message' />
        </ContactMessage>
        <button type='submit'>Submit</button>
      </form>
    </ContactContainer>
  );
}

export default ContactForm;
