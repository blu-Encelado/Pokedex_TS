import readline from "readline";
import { getCommands } from "./commands/commandsRegistry";

export function startREPL() {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
        prompt: "Pokedex > "
    });
    console.log("Welcome to the Pokedex!")
    rl.prompt();

    rl.on("line", (input) => {
        const n = cleanInput(input)
        if (n.length === 0) {
            rl.prompt();
        } else {
            parseCommand(n[0]);
            rl.prompt();
        }
    });
}

function parseCommand(input: string): void {
    const cmd = getCommands()[input];
    if (!cmd) {
        console.log("Unknown command")
    } else {
        try {
            cmd.callback(getCommands());
        } catch (err) {
            console.log(err);
        }
    } 
}
    

export function cleanInput(input: string): string[] {

    const arrayString: string[] = input.toLowerCase().trim().split(" ").filter((n) => n.length !== 0);
    
    return arrayString;
}

