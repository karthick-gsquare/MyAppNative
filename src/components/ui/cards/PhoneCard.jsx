import {View, Text, Button} from 'react-native';
import React from 'react';
import styles from '../../../../StyleSheet';
import MyButton from '../buttons/MyButton';

const PhoneCard = () => {
  return (
    <View style={styles.phoneCardContainer}>
      <View style={styles.flex}>
        <Text style={styles.fontBase}>Mobile Number:</Text>
        <Text style={{fontSize: 16, fontWeight: 900}}>91+ 9176148008 </Text>
      </View>
      <View style={{marginTop: 16}}>
        <MyButton title={'Call Now'} />
      </View>
    </View>
  );
};

export default PhoneCard;
