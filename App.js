import React, { Component } from 'react';
import { Button, Image, Text, View, FlatList } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';

import Detail from './screens/Detail.js';
import AddPodcast from './screens/AddPodcast.js';
import EditPodcast from './screens/EditPodcast.js';
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
          title="Detail"
          color="#54c7ec"
          onPress={() =>
            this.props.navigation.navigate('Detail', { podcast: item })
          }
        />
        <Button
          title="Edit"
          color="#ffdd57"
          onPress={() =>
            this.props.navigation.navigate('EditPodcast', { podcast: item })
          }
        />
        <Button title="Delete" color="#f75676" />
      </View>
    </View>
  );
  render() {
    let podcasts =
      this.state.podcasts !== null &&
      Object.entries(this.state.podcasts).map((podcast) => ({
        ...podcast[1],
        id: podcast[0]
      }));
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
        <View style={[styles.box, styles.menuContainer]}>
          <Button
            title="Add Podcast"
            color="#4fd69c"
            onPress={() => this.props.navigation.navigate('AddPodcast')}
          />
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
  Detail: { screen: Detail },
  AddPodcast: { screen: AddPodcast },
  EditPodcast: { screen: EditPodcast }
});

export default createAppContainer(AppNav);
