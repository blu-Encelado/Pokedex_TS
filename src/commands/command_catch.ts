import { State } from "./state";

export async function commandCatch(state: State, ...arg: string[]): Promise<void> {
    console.log(`Throwing a Pokeball at ${arg[0]}...`)
    const pokeCatch = await state.pokeAPI.fetchPokemon(arg[0])
    const success = getRandomSuccess(pokeCatch.base_experience);
    if(!success) {
        console.log(`${pokeCatch.name} escaped!`)
    } else {
        console.log(`${pokeCatch.name} was caught!`)
        state.pokedex[pokeCatch.name] = pokeCatch;
    }
}

function getRandomSuccess(max: number): boolean {
    return Math.floor(Math.random() * max) <= max/2;
}