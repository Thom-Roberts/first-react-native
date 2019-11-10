import React, { Component } from 'react';
import { View, Text } from 'react-native';

interface BlinkProps {
   text: String;
};

interface BlinkState {
   isShowingText: boolean;
};

export default class Blink extends Component<BlinkProps, BlinkState> {
   constructor(props: any) {
      super(props);

      this.state = {
         isShowingText: true,
      };
   }

   componentDidMount() {
      setInterval(() => {
         this.setState((previousState: BlinkState) => ({
            isShowingText: !previousState.isShowingText,            
         }))
      }, 1000);
   }


   render() {
      return (
         <Text>
            {
            this.state.isShowingText &&
               this.props.text
            }
         </Text>
      );
   }
}