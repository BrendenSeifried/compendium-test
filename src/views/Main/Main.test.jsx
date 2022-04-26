import { render, screen } from "@testing-library/react"
import Main from "./Main";



describe('Main', ()=> {
    it('Should pass 10 per page test', async () => {
        render(<Main />);
    
    //    const loadState = screen.getByText(/Loading, please wait./i);
    //     waitForElementToBeRemoved(loadState);
        screen.debug();
    await screen.findAllByAltText('Image of a pokemon');
    
       const number = await screen.findAllByRole('article')
    expect(number.length).toBe(10)
    })
})

//safe keeping for context in the future

    // it('Should pass 10 per page test', async () => {
    //     const wrapper = ({children}) => (
    //         <PokeProvider value={{ pokemon, setPokemon, selectedType, setSelectedType, search, setSearch, order, setOrder, types, setTypes}}>{children}</PokeProvider>
    //     )
    //     render(<Main />, {wrapper})
    //     // const loading = screen.getByText(/Loading, please wait./i)
    //     // expect(loading).toBeInTheDocument();

    //     const img = await screen.findByAltText('Image of a pokemon')
    //     expect(img).toBeInTheDocument();