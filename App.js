import React, { Component } from 'react';
import { Button, Image, Text, View } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';

import Detail from './screens/Detail.js';
import { database } from './src/firebase.js';
import styles from './styles.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      podcasts: []
    };
  }
  componentDidMount() {
    database.ref('/podcasts').on('value', (snapshot) => {
      this.setState({
        podcasts: snapshot.val()
      });
    });
  }
  renderItem = (podcast, index) => (
    <View key={index} style={styles.itemContainer}>
      <View style={styles.itemImageContainer}>
        <Image style={styles.itemImage} source={{ uri: podcast.image }} />
      </View>
      <View style={styles.itemTextContainer}>
        <Text style={styles.itemText}>{podcast.title}</Text>
        <Text style={styles.itemUrl}>{podcast.url}</Text>
        <Button
          title="View Detail"
          onPress={() =>
            this.props.navigation.navigate('Detail', { podcast: podcast })
          }
        />
      </View>
    </View>
  );
  static navigationOptions = {
    title: '🚀 PodSpace',
    headerStyle: {
      backgroundColor: '#343A40'
    },
    headerTitleStyle: {
      fontSize: 32,
      color: '#fff'
    }
  };
  render() {
    const podcastList = this.state.podcasts.map(this.renderItem);
    return (
      <View style={styles.container}>
        <View style={[styles.box, styles.contentContainer]}>{podcastList}</View>
        <View style={[styles.box, styles.footerContainer]}>
          <Text style={styles.footer}>
            &copy; 2019 RN Workshop. All right reserved.
          </Text>
        </View>
      </View>
    );
  }
}

const AppNav = createStackNavigator({
  App: { screen: App },
  Detail: { screen: Detail }
});

export default createAppContainer(AppNav);
