import React, { Component } from 'react';
import { Button, Image, Text, View, FlatList } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';

import Detail from './screens/Detail.js';
import { database } from './src/firebase.js';
import styles from './styles.js';

class App extends Component {
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
  constructor(props) {
    super(props);
    this.state = {
      podcasts: null
    };
  }
  componentDidMount() {
    database.ref('/podcasts').on('value', (snapshot) => {
      this.setState({
        podcasts: snapshot.val()
      });
    });
  }
  renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <View style={styles.itemImageContainer}>
        <Image style={styles.itemImage} source={{ uri: item.image }} />
      </View>
      <View style={styles.itemTextContainer}>
        <Text style={styles.itemText}>{item.title}</Text>
        <Text style={styles.itemUrl}>{item.url}</Text>
        <Button
          title="View Detail"
          onPress={() =>
            this.props.navigation.navigate('Detail', { podcast: item })
          }
        />
      </View>
    </View>
  );
  render() {
    const podcasts =
      this.state.podcasts !== null &&
      this.state.podcasts.filter((podcast) => podcast !== null);
    return (
      <View style={styles.container}>
        <View style={[styles.box, styles.contentContainer]}>
          {podcasts.length > 0 ? (
            <FlatList
              data={podcasts}
              keyExtractor={(item) => item.id}
              renderItem={this.renderItem}
            />
          ) : (
            <Text>Loading...</Text>
          )}
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

const AppNav = createStackNavigator({
  App: { screen: App },
  Detail: { screen: Detail }
});

export default createAppContainer(AppNav);
