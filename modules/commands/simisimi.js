const axios = require('axios');

// Define the API endpoint
const apiUrl = 'https://apis-markdevs69v2.onrender.com/api/sim/get/hi';

// Function to fetch data from the API
async function fetchData() {
  try {
    // Send a GET request to the API
    const response = await axios.get(apiUrl);

    // Log the response data
    console.log('API Response:', response.data);
  } catch (error) {
    // Handle errors
    console.error('Error fetching data:', error.message);
  }
}

// Call the function to fetch data
fetchData();
