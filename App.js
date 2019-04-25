import React, { Component } from 'react';
import { Alert, Button, Image, Text, View, FlatList } from 'react-native';
import { createSwitchNavigator, createAppContainer } from 'react-navigation';

import Detail from './screens/Detail.js';
import AddPodcast from './screens/AddPodcast.js';
import EditPodcast from './screens/EditPodcast.js';
import Login from './screens/Login.js';
import SignIn from './screens/SignIn.js';
import Loading from './screens/Loading.js';
import { auth, database } from './src/firebase.js';
import styles from './styles.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      podcasts: null,
      currentUser: null
    };
  }
  componentDidMount() {
    database.ref('/podcasts').on('value', (snapshot) => {
      this.setState({
        podcasts: snapshot.val()
      });
    });
    const { currentUser } = auth;
    this.setState({ currentUser: currentUser.email });
  }
  deleteConfirmation = (id) => {
    Alert.alert('Delete?', 'Are you sure to delete?', [
      { text: 'Yeah', onPress: () => this.deletePodcast(id) },
      { text: 'Hell No!' }
    ]);
  };
  deletePodcast = (id) => {
    database.ref(`/podcasts/${id}`).remove();
  };
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
        <Button
          title="Delete"
          color="#f75676"
          onPress={() => this.deleteConfirmation(item.id)}
        />
      </View>
    </View>
  );
  logout = async () => {
    await auth.signOut();
    this.props.navigation.navigate('Login');
  };
  render() {
    let podcasts =
      this.state.podcasts !== null &&
      Object.entries(this.state.podcasts).map((podcast) => ({
        ...podcast[1],
        id: podcast[0]
      }));
    return (
      <View style={styles.container}>
        <View style={[styles.box, styles.headerContainer]}>
          <Text style={styles.headerText}>🚀 Podspace</Text>
        </View>
        <View style={[styles.box, styles.infoContainer]}>
          <Text style={styles.infoText}>Welcome, {this.state.currentUser}</Text>
          <Button title="Logout" color="#f75676" onPress={this.logout} />
        </View>
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

const AppNav = createSwitchNavigator(
  {
    App,
    Detail,
    AddPodcast,
    EditPodcast,
    Login,
    SignIn,
    Loading
  },
  {
    initialRouteName: 'Loading'
  }
);

export default createAppContainer(AppNav);
