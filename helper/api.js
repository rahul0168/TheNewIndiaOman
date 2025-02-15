import axios from "axios";

const API_URL = "https://restcountries.com/v3.1/all";
// Helper function to fetch nationality data
export const fetchNationalities = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error("Error fetching nationalities:", error);
    return [];
  }
};
