import React, { Component } from 'react';
import { Text, View } from 'react-native';
import Bananas from  './Bananas';
import Greetings from './Greetings';

export default class HelloWorldApp extends Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Hello, world!</Text>
        <Bananas />
        <Greetings name='Thom' />
        <Greetings name='Bennie' />
      </View>
    );
  }
}