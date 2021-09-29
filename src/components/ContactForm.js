// import { style } from '@mui/system';
import React from 'react';
import styled from 'styled-components';

const FlexExtended = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ContactContainer = styled(FlexExtended)`
  margin-bottom: 80px;

  h2 {
      margin: 0 0 29px;
      font-size: 32px;
      font-weight: 550;
    }

  form {

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
      margin: 16px 16px;
      letter-spacing: .1em;
    }
  }
`;

const ContactInfo = styled(FlexExtended)``;

const ContactMessage = styled(FlexExtended)``;


const ContactForm = () => {
  return (
    <ContactContainer>
      <h2>Get In Touch!</h2>
      <form>
        <ContactInfo>
          <input placeholder='Name' type='text' name='name' />
          <input placeholder='Email address' type='email' name='email' />
        </ContactInfo>
        <ContactMessage>
        </ContactMessage>
        <button type='submit'>Submit</button>
      </form>
    </ContactContainer>
  );
}

export default ContactForm;
