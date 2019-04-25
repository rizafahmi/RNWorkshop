import React from 'react';
import { View, Text, ActivityIndicator } from 'react-native';

import styles from './styles.js';
import { auth } from '../src/firebase.js';

class Loading extends React.Component {
  componentDidMount() {
    // Login
    auth.onAuthStateChanged((user) => {
      this.props.navigation.navigate(user ? 'App' : 'Login');
    });
  }
  render() {
    return (
      <View style={styles.formContainer}>
        <Text style={styles.headerText}>🚀 Podspace</Text>
        <ActivityIndicator size="large" />
      </View>
    );
  }
}

export default Loading;
