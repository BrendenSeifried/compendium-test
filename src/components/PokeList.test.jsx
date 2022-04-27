import { render, screen } from "@testing-library/react"
import PokeList from "./PokeList";
const grab = {
    
    pokemon: 'pikachu',
    url_image: 'fake.URL',
    hp: 10,
    ability_hidden: 'test',
    speed: 10,
    attack: 10,
    defense: 10
}
describe('Search', ()=> {
    it('Search function test', ()=> {
        render(<PokeList grab={grab}/>)
        

        
        
        const param = screen.getByText('pikachu');
        expect(param).toBeInTheDocument();
        screen.debug();
        
        // const preset = screen.getByPlaceHolderText('Search Pokemon');
        
        // userEvent.type(preset, 'pikachu');
      

        

    })
})