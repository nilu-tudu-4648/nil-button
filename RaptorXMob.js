import { getUniqueId } from "react-native-device-info";
import axios from "axios";

export async function getDeviceInfo() {
  try {
    const uniqueId = await getUniqueId();
    return { uniqueId };
  } catch (error) {
    // Handle errors
    console.error("Error retrieving device information:", error);
    throw error;
  }
}
