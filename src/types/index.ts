type Languages = {
    name: string // we only use the name for now
}

export type Country = {
    // Needs to match API property names
    flag: string;
    name: string;
    languages: Languages[]; // Array of objects
    population: number;
    region: string;
    nativeName?: string;
};