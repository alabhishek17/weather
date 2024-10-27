# Weather Dashboard

This project is a simple React application to fetch and display weather information for a list of cities. The application displays two tables:
1. **City List**: A single-column table showing a list of cities.
2. **Details**: A multi-column table showing weather details for each city.

## Features

- Fetches weather information using an API and displays it in the "Details" table.
- Highlights the currently selected city in the "City List" table.
- Allows users to delete entries in the "Details" table.
- Displays "No Data" if no weather information is available in the "Details" table.

## User Flow

1. The user clicks on the **Get Weather** button to fetch weather information for each city in the list.
2. The app retrieves weather data from the API and displays it in the "Details" table.
3. The **Delete** button in the "Details" table removes specific rows.
4. When all cities are fetched, the app resets, clearing the "Details" table.

## Tech Stack

- **React.js** for the user interface
- **CSS** for styling
- **Fetch API** to retrieve weather data

## Getting Started

Follow these instructions to run the application on your local machine.

### Prerequisites

- Node.js installed on your machine

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/alabhishek17/weather

### Navigate to the project directory
- cd weather

### Install the dependencies
- npm install

### API Details
- The app fetches weather data from an API for each city in the "City List":

- **URL**: https://python3-dot-parul-arena-2.appspot.com/test?cityname=<city-name>
- **Method**: GET
- **Parameters**: cityname - name of the city to fetch data for

- **Example**: https://python3-dot-parul-arena-2.appspot.com/test?cityname=London