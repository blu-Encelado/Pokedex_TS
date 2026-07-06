import readline from "readline";
import { getCommands } from "./commands/commandsRegistry";
import { State } from "./commands/state";

export function startREPL(state: State) {
    console.log("Welcome to the Pokedex!")

    state.readline.prompt();

    state.readline.on("line", (input) => {
        const n = cleanInput(input)
        if (n.length === 0) {
            state.readline.prompt();
        } else {
            parseCommand(n[0], state);
            state.readline.prompt();
        }
    });
}

async function parseCommand(input: string, state: State) {
    const cmd = getCommands()[input];
    if (!cmd) {
        console.log("Unknown command")
    } else {
        try {
            await cmd.callback(state);
        } catch (err) {
            console.log((err as Error).message);
        }
    } 
}
    

export function cleanInput(input: string): string[] {

    const arrayString: string[] = input.toLowerCase().trim().split(" ").filter((n) => n.length !== 0);
    
    return arrayString;
}

