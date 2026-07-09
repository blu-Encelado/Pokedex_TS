import { commandCatch } from "./command_catch";
import { commandExit } from "./command_exit";
import { commandExplore } from "./command_explore";
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
        explore: {
            name: "explore",
            description: "Explore a single area, show the pokemon present",
            callback: commandExplore,
        },
        catch: {
            name: "catch",
            description: "Try catch a pokemon writing its name",
            callback: commandCatch,
        }
    }
};