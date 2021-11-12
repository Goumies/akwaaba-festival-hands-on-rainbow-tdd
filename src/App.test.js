import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Rainbow maker header', () => {
  render(<App />);
  const headerElement = screen.getByText(/Rainbow maker/i);
  expect(headerElement).toBeInTheDocument();
});
