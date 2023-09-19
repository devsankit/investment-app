import { render, screen } from '@testing-library/react';
import App from './App';
import '@testing-library/jest-dom'

test('Plan your future !', () => {
  render(<App />);
  const [linkTag] = screen.getAllByTestId("App")
  expect(linkTag).toBeInTheDocument();
});
