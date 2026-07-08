import { State } from "./state"

export async function commandExplore(state: State, ...args: string[]): Promise<void> {
    const location = await state.pokeAPI.fetchLocation(args[0]);
    console.log(`Exploring ${args}`)
    
    for (const enc of location.pokemon_encounters) {
        console.log(`- ${enc.pokemon.name}`)
    }
}