import React from 'react';
import {Image} from 'react-native';

const Logo = () => (
  <Image
    source={require('../../../assets/images/logo.png')}
    style={{width: "100%", height: 200}}
  />
);

export default Logo;
