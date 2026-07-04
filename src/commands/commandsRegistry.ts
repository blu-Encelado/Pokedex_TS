import { commandExit } from "./command_exit";
import { commandHelp } from "./commands_help";
import { CLICommand } from "./command";


export function getCommands(): Record<string, CLICommand> {
    return {
        exit: {
            name: "exit",
            description: "Exit the Pokedex",
            callback: commandExit,
        },
        help: {
            name: "help",
            description: "Print a list of cammands",
            callback: commandHelp,
        },
    }
};