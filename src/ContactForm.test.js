import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

import ContactForm from './components/ContactForm';
import { act } from 'react-dom/test-utils';

describe('ContactForm', () => {
  test('renders Form component', () => {
    render(<ContactForm />);

    const nameInput = screen.getByRole('textbox',{ name: 'Name' });
    const emailInput = screen.getByRole('textbox',{ name: 'Email' });
    const submitBtn = screen.getByRole('button');

    expect(nameInput).toBeInTheDocument();
    expect(emailInput).toBeInTheDocument();

    fireEvent.change(nameInput, {
      target: { value: 'Tate' },
    });

    fireEvent.click(submitBtn);
    
    screen.debug();
  });
});
