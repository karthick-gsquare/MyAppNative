import { Linking, Button, PermissionsAndroid, Platform } from 'react-native';
import React from 'react';

const requestPermissions = async () => {
  if (Platform.OS === 'android') {
    try {
      const granted = await PermissionsAndroid.requestMultiple([
        PermissionsAndroid.PERMISSIONS.CALL_PHONE,
        PermissionsAndroid.PERMISSIONS.RECORD_AUDIO,
        PermissionsAndroid.PERMISSIONS.READ_PHONE_STATE,
        PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
        PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
      ]);
      return Object.values(granted).every(status => status === PermissionsAndroid.RESULTS.GRANTED);
    } catch (err) {
      console.warn(err);
      return false;
    }
  }
  return true;
};

const makeCall = async () => {
  const granted = await requestPermissions();
  console.log(granted);
  
  if (!granted) {
    console.log('Permissions not granted');
    return;
  }

  const phoneNumber = 'tel:9962198009';
  Linking.openURL(phoneNumber);
};

export default function PhoneCall() {
  return (
    <Button title="Call and Record" onPress={makeCall} />
  );
}
