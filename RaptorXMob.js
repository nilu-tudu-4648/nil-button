import { getUniqueId } from "react-native-device-info";
import axios from "axios";

export async function getDeviceInfo() {
  try {
    // Retrieve device unique ID
    
    // Make API call to fetch users
    const response = await axios.get("https://jsonplaceholder.typicode.com/users");
    
    const uniqueId = await getUniqueId();
    // Extract users data from response
    const users = response.data;

    // Return device information and users data
    return { uniqueId, users };
  } catch (error) {
    // Handle errors
    console.error("Error retrieving device information:", error);
    throw error;
  }
}
