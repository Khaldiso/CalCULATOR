class FuelCalculator {
    constructor(fuelType, unit, amounts, workingDays) {
        this.fuelType = fuelType;
        this.unit = unit;
        this.amounts = amounts;
        this.workingDays = workingDays;
    }

    calculateConsumption() {
        let totalConsumption = 0;

        this.amounts.forEach(amount => {
            if (this.unit === 'L') {
                totalConsumption += amount; // Assuming 1L = 1L for simplicity
            } else if (this.unit === 'kg') {
                totalConsumption += amount / 0.832; // Example conversion for Diesel
            } else if (this.unit === 'tonne') {
                totalConsumption += amount * 1000; // Convert tonne to kg
            }
        });

        const daysInYear = this.workingDays === '5 days' ? 260 : 365;
        return totalConsumption * (daysInYear / 365); // Annual consumption
    }

    getResult() {
        const consumption = this.calculateConsumption();
        return `The total fuel consumption for ${this.fuelType} is ${consumption.toFixed(2)} ${this.unit} per year.`;
    }
}

export default FuelCalculator;