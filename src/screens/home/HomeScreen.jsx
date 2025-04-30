import {View, Text, Button, Linking, Alert} from 'react-native';
import React from 'react';
import styles from '../../../StyleSheet';
import Logo from '../../components/common/logo/Logo';
import PhoneCard from '../../components/ui/cards/PhoneCard';

const HomeScreen = () => {
  return (
    <View style={styles.homeContainer}>
      <Logo />
      <Text style={styles.title}>Call History</Text>
      <View style={{marginTop: 24}}></View>
      <PhoneCard />
      <View style={{marginTop:10}}>
        <CallButton />
      </View>
    </View>
  );
};

export default HomeScreen;

const phoneNumber = '9962198009';

const CallButton = () => {
  const handleCall = async () => {
    console.log('calling.....');

    const url = `tel:${phoneNumber}`;
    const supported = await Linking.canOpenURL(url);
    console.log(supported);

    if (supported) {
      Linking.openURL(url);
    } else {
      Alert.alert('Error', 'Phone call not supported on this device');
    }
  };

  return (
    <View>
      <Button title="Call Now" onPress={handleCall} />
    </View>
  );
};
