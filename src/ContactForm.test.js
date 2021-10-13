import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import ContactForm from './components/ContactForm';

describe('ContactForm', () => {
  test('renders Form component', () => {
    render(<ContactForm />);

    const nameInput = screen.getByPlaceholderText('Name');
    const emailInput = screen.getByPlaceholderText('Email address');

    expect(nameInput).toBeInTheDocument();
    expect(emailInput).toBeInTheDocument();
  });
});
