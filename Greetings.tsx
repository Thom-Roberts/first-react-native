import React, { Component } from 'react';
import { Text, View } from 'react-native';

interface GreetingProps {
   name: string;
};

export default class Greeting extends React.Component<GreetingProps> {
   render() {
      const { name } = this.props;
      return (
         <View style={{alignItems: "center"}}>
            <Text>Hello {name}</Text>
         </View>
      );
   }
}