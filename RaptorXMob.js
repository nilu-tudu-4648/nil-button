import { getUniqueId, getManufacturer } from "react-native-device-info";
import axios from "axios";

export async function getDeviceInfo() {
  try {
    // Retrieve device unique ID
    const uniqueId = await getUniqueId();

    // Retrieve manufacturer
    const manufacturer = await getManufacturer();

    // Make API call to fetch users
    const response = await axios.get("https://jsonplaceholder.typicode.com/users");

    // Extract users data from response
    const users = response.data;

    // Return device information and users data
    return { uniqueId, manufacturer, users };
  } catch (error) {
    // Handle errors
    console.error("Error retrieving device information:", error);
    throw error;
  }
}
