import { render, screen, waitFor } from '@testing-library/react';
import App from './App';

test('render table with machine data', async () => {
  render(<App />);
  await waitFor(async () => {
    const rows = screen.getAllByText('6/26/2021, 12:00:00 PM');
    expect(rows).toHaveLength(4);
  });
});

test('shows alert', async () => {
  render(<App />);
  await waitFor(async () => {
    expect(await screen.findAllByText('Alert')).toHaveLength(1);
  });
});
