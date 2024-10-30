# Statistics Calculator

This project implements a simple statistics calculator that computes various statistical measures such as mean, median, mode, range, variance, and standard deviation from a given list of numbers. The user can input a list of comma-separated numbers, and the application will display the calculated statistics.

## Table of Contents

1. [Features](#features)
2. [Technologies Used](#technologies-used)
3. [Getting Started](#getting-started)
4. [Functionality](#functionality)
5. [Functions Overview](#functions-overview)
6. [Usage](#usage)
7. [Contributing](#contributing)
8. [License](#license)

## Features

- **Mean Calculation**: Computes the average of the input numbers.
- **Median Calculation**: Finds the middle value when the numbers are sorted.
- **Mode Calculation**: Determines the most frequently occurring number(s) in the list.
- **Range Calculation**: Calculates the difference between the largest and smallest numbers.
- **Variance Calculation**: Measures how far the numbers in the list are spread out from the mean.
- **Standard Deviation Calculation**: Provides a measure of the amount of variation or dispersion in the list of numbers.

## Technologies Used

- **JavaScript**: For implementing the statistical calculations.
- **HTML**: To create the user interface.
- **CSS**: To style the application (if included).

## Getting Started

To run this project locally, follow these steps:

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   ```
2. **Open the `index.html` file** in your browser.

3. **Input a list of comma-separated numbers** into the designated input field.

## Functionality

When the user inputs a series of numbers, the application performs the following calculations:

1. **Mean**: Uses the formula \( \text{Mean} = \frac{\text{Sum of all values}}{\text{Total number of values}} \).
2. **Median**: 
   - Sorts the numbers.
   - If the count of numbers is odd, the median is the middle number.
   - If even, it averages the two middle numbers.
3. **Mode**: Counts the occurrences of each number and identifies the number(s) that appear most frequently.
4. **Range**: Finds the difference between the maximum and minimum values.
5. **Variance**: 
   - Calculates the average of the squared differences from the Mean.
   - Formula: \( \text{Variance} = \frac{\sum (x_i - \text{Mean})^2}{N} \).
6. **Standard Deviation**: Takes the square root of the variance to measure the spread of numbers.

## Functions Overview

### 1. `getMean(array)`

Calculates the mean (average) of the provided array.

### 2. `getMedian(array)`

Calculates the median of the array by sorting it and finding the middle value.

### 3. `getMode(array)`

Identifies the mode(s) of the array. Returns `null` if all values occur with the same frequency.

### 4. `getRange(array)`

Calculates the range by subtracting the minimum value from the maximum value in the array.

### 5. `getVariance(array)`

Calculates the variance by averaging the squared differences from the mean.

### 6. `getStandardDeviation(array)`

Calculates the standard deviation by taking the square root of the variance.

### 7. `calculate()`

Main function that collects user input, processes the numbers, and updates the displayed statistics.

## Usage

1. Open the application in a web browser.
2. Input numbers in the specified format (e.g., `1, 2, 3, 4, 5`).
3. Click the button to calculate the statistics.
4. View the results for mean, median, mode, range, variance, and standard deviation displayed on the page.

## Contributing

Contributions are welcome! If you have suggestions for improvements or additional features, feel free to fork the repository and submit a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.