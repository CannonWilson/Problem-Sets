import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn 1-IntroToReact link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
