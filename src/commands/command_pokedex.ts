import { State } from "./state";

export async function commandPokedex(state: State) {
    if (Object.keys(state.pokedex).length === 0) {
        console.log("You have no pokemon in your Pokedex")
        return;
    }
    console.log("Your Pokedex:")
    for (const pokemon in state.pokedex) {
        console.log(`- ${state.pokedex[pokemon].name}`)
    }
}