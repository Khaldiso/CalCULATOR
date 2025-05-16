# Fuel Consumption Calculator

This project is a fuel consumption calculator designed for factories. It allows users to calculate fuel consumption based on various parameters such as fuel type, unit of measurement, amounts, and working days.

## Features

- Supports multiple fuel types: Diesel and Gasoline.
- Allows input in different units: Liters (L), Kilograms (kg), and Tonnes (tonne).
- Configurable working days: 5 days per week or 7 days per week.
- Calculates total fuel consumption and displays the results.

## Project Structure

```
fuel-consumption-calculator
├── src
│   ├── index.js          # Entry point of the application
│   ├── calculator.js     # Contains the FuelCalculator class
│   ├── constants.js      # Defines constants for fuel types, units, and working days
│   ├── utils.js          # Utility functions for input validation and result formatting
│   └── types
│       └── index.js      # Type definitions for inputs and outputs
├── package.json          # NPM configuration file
└── README.md             # Project documentation
```

## Installation

To install the project dependencies, run:

```
npm install
```

## Usage

To run the application, use the following command:

```
node src/index.js
```

## Example

1. Choose a fuel type (Diesel or Gasoline).
2. Enter the amount in the desired unit (L, kg, tonne).
3. Select the number of working days (5 or 7 days per week).
4. The application will calculate and display the total fuel consumption.

## Contributing

Feel free to submit issues or pull requests for improvements or bug fixes. 

## License

This project is licensed under the MIT License.