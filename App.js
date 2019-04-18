import React, { Component } from 'react';
import { Button, Image, StyleSheet, Text, View } from 'react-native';

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.instructions}>Hello, React Native!</Text>
        <Image style={styles.image} source={require('./img/hacktiv8.png')} />
        <Button title="Learn More" color="mediumaquamarine" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5
  },
  image: {
    width: '50%',
    height: '25%'
  }
});
