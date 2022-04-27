import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Main from './Main';

describe('Main', () => {
  it('Should pass 10 per page test', async () => {
    render(<Main />);

    // const loadState = screen.getByText(/Loading, please wait./i);
    // waitForElementToBeRemoved(loadState);
    screen.debug();
    await screen.findAllByAltText('Image of a pokemon');

    const number = await screen.findAllByRole('article');
    expect(number.length).toBe(10);

    const preset = screen.getByPlaceholderText('Search Pokemon');
    userEvent.type(preset, 'pikachu');

    const button = screen.getByRole('button');
    userEvent.click(button);

    const pika = await screen.findByText('pikachu');
    expect(pika).toBeInTheDocument();
  });
});

