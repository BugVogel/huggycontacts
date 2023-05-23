import React from 'react';
import {View, Text} from 'react-native';
import {createIconSetFromIcoMoon} from 'react-native-vector-icons';
import selection from '../../../assets/config/selection.json';

const Icon = props => {
  const Icon = createIconSetFromIcoMoon(selection);

  return (
    <Icon size={props.size || 15} color={props.color || 'black'}>
      {props.name}
    </Icon>
  );
};
export default Icon;
