import { render, screen } from '@testing-library/react';

import CoinPage from './pages/Coin.page';


test('Is component really loading?', () => {
  render(<CoinPage />);
  const linkElement = screen.getByText(/Loading.../i);
  expect(linkElement).toBeInTheDocument();
});
