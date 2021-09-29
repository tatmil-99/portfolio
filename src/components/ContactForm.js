import { style } from '@mui/system';
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
`;

const ContactInfo = styled(FlexExtended)``;

const ContactMessage = styled(FlexExtended)``;


const ContactForm = () => {
  return (
    <ContactContainer>
      <h2>Get In Touch!</h2>
      <ContactInfo>
      </ContactInfo>
      <ContactMessage>
      </ContactMessage>
    </ContactContainer>
  );
}

export default ContactForm;
