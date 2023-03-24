/* eslint-disable react-native/no-inline-styles */
import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';

type Props = {
  name: string;
  icon: number;
  color: string;
  onPress: () => void;
};

const Option = ({name, icon, color, onPress}: Props) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
      }}>
      <View
        style={{
          backgroundColor: '#fff',
          paddingVertical: 5,
          paddingHorizontal: 10,
          borderRadius: 5,
          marginRight: 5,
        }}>
        <Text style={{color: '#000', fontSize: 14}}>{name}</Text>
      </View>
      <View
        style={{
          width: 65,
          height: 65,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <TouchableOpacity
          style={{
            padding: 10,
            backgroundColor: color,
            borderRadius: 500,
          }}
          onPress={onPress}>
          <Image
            source={icon}
            style={{height: 25, width: 25, tintColor: '#fff'}}
            resizeMode="stretch"
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Option;
