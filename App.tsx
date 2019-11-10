import React, { Component } from 'react';
import { Text, View } from 'react-native';
import Bananas from  './Bananas';
import Greetings from './Greetings';
import Blink from "./Blink";
import LotsOfStyles from "./Styled";

export default class HelloWorldApp extends Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Hello, world!</Text>
        <Bananas />
        <Greetings name='Thom' />
        <Greetings name='Bennie' />
        <Blink text={'I\'m a piece of flashing text'} />
        <LotsOfStyles />
      </View>
    );
  }
}