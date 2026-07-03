import readline from "readline";

export function startREPL() {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
        prompt: "Pokedex > "
    });

    rl.prompt();

    rl.on("line", (input) => {
        const n = cleanInput(input)
        if (n.length === 0) {
            rl.prompt();
        } else {
            console.log(`Your command was: ${n[0]}`)
            rl.prompt();
        }
    });
}


export function cleanInput(input: string): string[] {

    const arrayString: string[] = input.toLowerCase().trim().split(" ").filter((n) => n.length !== 0);
    
    return arrayString;
}

