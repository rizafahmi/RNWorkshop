import React, { Component } from 'react';
import { Button, Image, StyleSheet, Text, View } from 'react-native';

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <View style={[styles.box, styles.headerContainer]}>
          <Text style={styles.headerText}>HEADER</Text>
        </View>
        <View style={[styles.box, styles.contentContainer]}>
          <Text style={styles.content}>Content here...</Text>
        </View>
        <View style={[styles.box, styles.footerContainer]}>
          <Text style={styles.footer}>
            &copy; 2019 RN Workshop. All right reserved.
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column'
  },
  box: {
    flex: 1
  },
  headerContainer: {
    backgroundColor: '#343A40',
    flex: 1,
    alignItems: 'center'
  },
  headerText: {
    fontSize: 32,
    color: '#fff'
  },
  contentContainer: {
    backgroundColor: '#F7F8F9',
    flex: 10,
    marginTop: 22,
    marginLeft: 22
  },
  footerContainer: {
    backgroundColor: '#6D757D',
    flex: 0.5,
    justifyContent: 'center',
    alignItems: 'center'
  },
  footer: {
    color: '#F7F8F9'
  }
});
