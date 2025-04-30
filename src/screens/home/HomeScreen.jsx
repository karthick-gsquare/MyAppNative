import {View, Text} from 'react-native';
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
    </View>
  );
};

export default HomeScreen;
