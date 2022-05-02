import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { PokeProvider } from '../../context/PokeContext';
import Main from './Main';

describe('Main', () => {
  it('Should pass 10 per page test', async () => {
    render(
      <PokeProvider>
        <Main />
      </PokeProvider>
    );

    {
      timeout: 2000;
    }
    screen.getByText(/loading/i);
    screen.debug();

    await waitFor(async () => {
      await screen.findAllByAltText('Image of a pokemon');

      const number = await screen.findAllByRole('article');
      expect(number.length).toBe(10);

      const preset = await screen.findByPlaceholderText('Search Pokemon');
      userEvent.type(preset, 'pikachu');

      const button = screen.getByRole('button');
      userEvent.click(button);

      const pika = await screen.findByText('pikachu');
      expect(pika).toBeInTheDocument();
    });
  });
});
