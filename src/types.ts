export interface Chord {
  name: string;
  image: string;
  romanNumeral: string;
}

export interface PatternData {
  name: string;
  description?: string;
  shapes: Chord[];
}

export interface Pattern extends PatternData {
  id: string;
  imageModules: Record<string, { default: string }>;
}
