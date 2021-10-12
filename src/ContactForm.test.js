import { render, screen } from '@testing-library/react';
import ContactForm from './components/ContactForm';

describe('ContactForm', () => {
  test('renders Form component', () => {
    render(<ContactForm />);

    screen.debug();
  });
});
