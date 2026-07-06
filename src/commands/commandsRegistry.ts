import { commandExit } from "./command_exit";
import { commandMapForward, commandMapBack } from "./command_map";
import { commandHelp } from "./commands_help";
import { CLICommand } from "./state";


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
        map: {
            name: "map",
            description: "Get the next page of locations",
            callback: commandMapForward,
        },
        mapb: {
            name: "mapb",
            description: "Get the previous page of locations",
            callback: commandMapBack,
        },
    }
};