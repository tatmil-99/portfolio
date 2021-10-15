import { render, screen, } from '@testing-library/react';
import '@testing-library/jest-dom';

import ContactForm from './components/ContactForm';

describe('ContactForm', () => {
  test('renders Form component', () => {
    render(<ContactForm />);

    const nameInput = screen.getByRole('textbox',{ name: 'Name' });
    const emailInput = screen.getByRole('textbox',{ name: 'Email' });
    const submitBtn = screen.getByRole('button');

    expect(nameInput).toBeInTheDocument();
    expect(emailInput).toBeInTheDocument();
    expect(submitBtn).toBeInTheDocument();

    screen.debug();
  });
});
