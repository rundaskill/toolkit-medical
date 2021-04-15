export class CalculateMedication {

    calculate(dosi: number, frecuencia: number, duracion: number, star: string, end: string, isSpanish?: boolean, isPlural?: boolean): number;
    GetTypeTime(start: string, end: string): number;
    GetDivision(dividento: number, frecuencia: number): number;
    GetMultiplication(resuldivision: number, durations: number): number;
    GetTotal(resultMultiplication: number, dosis: number): number;
    SpanishToEnglish(spna: string, isPlural?: boolean): string|undefined;
}
