export function cleanInput(input: string): string[] {

    const arrayString: string[] = input.toLowerCase().trim().split(" ").filter((n) => n.length !== 0);
    
    return arrayString;
}