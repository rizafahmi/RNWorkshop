import React from 'react';
import { Button, View, Image, Text } from 'react-native';

import styles from './styles.js';

export default class Detail extends React.Component {
  static navigationOptions = {
    title: `🚀 PodSpace`,
    headerStyle: {
      backgroundColor: '#343A40'
    },
    headerTitleStyle: {
      fontSize: 32,
      color: '#fff'
    }
  };
  render() {
    const { image } = this.props.navigation.getParam('podcast');
    return (
      <View style={styles.container}>
        <Image source={{ uri: image }} style={styles.image} />
        <View style={styles.buttonContainer}>
          <Button title="Back" onPress={() => this.props.navigation.pop()} />
        </View>
      </View>
    );
  }
}
