import React, { Component } from 'react';
import { SafeAreaView, Text } from 'react-native';
import AppStyles from '../../AppStyles';

export default class SecondScreen extends Component {
  render() {
    return (
      <SafeAreaView style={AppStyles.styleSet.flex1}>
        <Text>Second</Text>
      </SafeAreaView>
    );
  }
}