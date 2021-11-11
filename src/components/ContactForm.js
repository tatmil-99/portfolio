import React from 'react';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';
// import{ init } from 'emailjs-com';
import 'react-toastify/dist/ReactToastify.min.css';
// init("REACT_APP_USER_ID");

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

    p {
      margin: 0 0 22px;
    }

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

    @media (min-width: 768px) {
      font-size: 1.2em;
      margin-top: 55px;
    }
  }

  @media (min-width: 540px) {
    padding: 0 50px 0;
    width: 82%;
  }
  @media (min-width: 768px) {
    width: 85%;
    padding: 0 150px 0;
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

    @media (min-width: 768px) {
      padding: 20px 12.5px;
    }
  }
`;

const MyToastContainer = styled(ToastContainer)`
  padding: 16px 32px;
  margin: 0 16px;
`;


const ContactForm = () => {
  const {
    register, 
    handleSubmit, 
    reset,
    formState: { errors }
  } = useForm();

  const toastifySuccess = () => {
    toast('Form sent!', {
      position: 'bottom-right',
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,  
      draggable: false,
      toastId: 'notifyToast'
    });
  }

  const onSubmit = async (data, e) => {
    const { from_name, from_email, message } = data;

    try {
      const templateParams = {
        from_name, 
        from_email,
        message
      }

      await emailjs.send(
        REACT_APP_SERVICE_ID,
        REACT_APP_TEMPLATE_ID,
        templateParams,
        REACT_APP_USER_ID
      );
      reset();
      toastifySuccess();
    } catch(e) {
      console.log(e);
    }
  }

  return (
    <ContactContainer>
      <h2>Get In Touch!</h2>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <ContactInfo>
          <input 
            placeholder='Name' 
            type='text' 
            name='from_name' 
            aria-label='Name'
            {...register('from_name', {
              required: { value: true, message: 'Please enter your name' },
              maxLength: { 
                value: 30, 
                message: 'Please Use 30 characters or less' }
            })}
          />
          {errors.from_name && <p>{errors.from_name.message}</p>}

          <input 
            placeholder='Email address' 
            type='email' 
            name='from_email' 
            aria-label='Email'
            {...register('from_email', {
              required: true,
              pattern: 
                /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
            })}
          />
          {errors.from_email && <p>Please enter a valid email</p>}
        </ContactInfo>
        <ContactMessage>
          <textarea 
            placeholder='Message' 
            name='message' 
            aria-label='Message'
            {...register('message', {
              required: { value: true, message: 'Please enter a message' }
            })}
          />
          {errors.message && <p>{errors.message.message}</p>}
        </ContactMessage>
        <button type='submit'>Submit</button>
      </form>
      <MyToastContainer />
    </ContactContainer>
  );
}

export default ContactForm;
