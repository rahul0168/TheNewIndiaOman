import axios from "axios";

const API_URL = "https://restcountries.com/v3.1/all";

export const fetchNationalities = async () => {
  try {
    const response = await axios.get(API_URL);
    const sortedData = response.data.sort((a, b) =>
      a.name.common.localeCompare(b.name.common)
    );
    return sortedData;
  } catch (error) {
    console.error("Error fetching nationalities:", error);
    return [];
  }
};
