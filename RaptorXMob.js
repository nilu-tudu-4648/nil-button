import DeviceInfo from 'react-native-device-info';

export async function getDeviceInfo() {
  try {
    const uniqueId = await DeviceInfo.getUniqueId();
    const deviceName = await DeviceInfo.getDeviceName();
    const model = await DeviceInfo.getModel();
    const systemName = await DeviceInfo.getSystemName();
    const systemVersion = await DeviceInfo.getSystemVersion();
    const brand = await DeviceInfo.getBrand();
    const deviceId = await DeviceInfo.getDeviceId();
    const buildNumber = await DeviceInfo.getBuildNumber();

    return {
      uniqueId,
      deviceName,
      model,
      systemName,
      systemVersion,
      brand,
      deviceId,
      buildNumber
    };
  } catch (error) {
    console.error('Error retrieving device information:', error);
    throw error; // Rethrow the error for handling in the calling code
  }
}
