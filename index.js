export interface FuelConsumptionInput {
    fuelType: 'Diesel' | 'Gasoline';
    unit: 'L' | 'kg' | 'tonne';
    amounts: number[];
    workingDays: '5 days per week' | '7 days per week';
}

export interface FuelConsumptionResult {
    totalConsumption: number;
    unit: 'L' | 'kg' | 'tonne';
    workingDays: '5 days per week' | '7 days per week';
}