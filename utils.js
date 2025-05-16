export function validateInput(amount, fuelType, unit, workingDays) {
    const validFuelTypes = ['Diesel', 'Gasoline'];
    const validUnits = ['L', 'kg', 'tonne'];
    const validWorkingDays = [5, 7];

    if (typeof amount !== 'number' || amount <= 0) {
        throw new Error('Amount must be a positive number.');
    }
    if (!validFuelTypes.includes(fuelType)) {
        throw new Error('Invalid fuel type. Valid options are Diesel and Gasoline.');
    }
    if (!validUnits.includes(unit)) {
        throw new Error('Invalid unit. Valid options are L, kg, and tonne.');
    }
    if (!validWorkingDays.includes(workingDays)) {
        throw new Error('Invalid working days. Valid options are 5 or 7 days per week.');
    }
}

export function formatResult(consumption) {
    return `The total fuel consumption is: ${consumption.toFixed(2)} units.`;
}