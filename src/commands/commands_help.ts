import { getCommands } from "./commandsRegistry"

export function commandHelp() {
    console.log("Usage: ")
    console.log("       ")
    for (const cmd in getCommands()) {
        console.log(`${cmd}: ${getCommands()[cmd].description}`)
    }
};