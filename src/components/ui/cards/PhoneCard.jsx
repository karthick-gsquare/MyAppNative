import {View, Text,Linking,Alert} from 'react-native';
import React from 'react';
import styles from '../../../../StyleSheet';
import MyButton from '../buttons/MyButton';

const phoneNumber = '9150078249';
const PhoneCard = () => {
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
    <View style={styles.phoneCardContainer}>
      <View style={styles.flex}>
        <Text style={styles.fontBase}>Mobile Number:</Text>
        <Text style={{fontSize: 16, fontWeight: 900}}>91+ 9176148008 </Text>
      </View>
      <View style={{marginTop: 16}}>
        <MyButton title={'Call Now'} onPress={handleCall}/>
      </View>
    </View>
  );
};

export default PhoneCard;
