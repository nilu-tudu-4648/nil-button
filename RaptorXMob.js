import DeviceInfo from 'react-native-device-info';

export async function getDeviceInfo() {
  try {
    const uniqueId = await DeviceInfo.getUniqueId();
    const manufacturer = await DeviceInfo.getManufacturer();
    const carrier = await DeviceInfo.getCarrier();
    const brand = DeviceInfo.getBrand();
    const model = DeviceInfo.getModel();
    const emulator = DeviceInfo.isEmulator();
    const deviceId = DeviceInfo.getDeviceId();
    const systemName = DeviceInfo.getSystemName();
    const systemVersion = DeviceInfo.getSystemVersion();
    const buildId = await DeviceInfo.getBuildId();
    const ipAddress = await DeviceInfo.getIpAddress();
    const instanceId = await DeviceInfo.getInstanceId();
    const deviceName = await DeviceInfo.getDeviceName();
    const userAgent = await DeviceInfo.getUserAgent();
    const apiLevel = await DeviceInfo.getApiLevel();
    const bootloader = await DeviceInfo.getBootloader();
    const baseOs = await DeviceInfo.getBaseOs();
    const fingerprint = await DeviceInfo.getFingerprint();
    const tags = await DeviceInfo.getTags();
    const type = await DeviceInfo.getType();
    // build info
    const buildNumber = DeviceInfo.getBuildNumber();
    const bundleId = DeviceInfo.getBundleId();
    const appName = DeviceInfo.getApplicationName();
    const version = DeviceInfo.getVersion();
    const readableVersion = DeviceInfo.getReadableVersion();

    return {
      deviceInfo: {
        uniqueId,
        manufacturer,
        carrier, // Added carrier information
        brand,
        model,
        emulator,
        deviceId,
        systemName,
        systemVersion,
        buildId,
        ipAddress,
        instanceId,
        deviceName,
        userAgent,
        apiLevel,
        bootloader,
        baseOs,
        fingerprint,
        tags,
        type,
      },
      buildInfo: {
        bundleId,
        buildNumber,
        appName,
        version,
        readableVersion,
      }
    };
  } catch (error) {
    console.error('Error retrieving device information:', error);
    throw error; 
  }
}
