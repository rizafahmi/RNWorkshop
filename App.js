import React, { Component } from 'react';
import { Button, Image, Text, View } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';

import Detail from './screens/Detail.js';
import styles from './styles.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      podcasts: [
        {
          id: 1,
          title: 'Ceritanya Developer Podcast',
          url: 'http://ceritanyadeveloper.com/',
          image:
            'https://s3-us-west-2.amazonaws.com/anchor-generated-image-bank/production/podcast_uploaded_episode400/405469/405469-1553491422931-ad8dd95fef5b.jpg'
        },
        {
          id: 2,
          title: 'Dunia Dalam Design',
          url: 'https://anchor.fm/duniadalamdesain',
          image:
            'https://s3-us-west-2.amazonaws.com/anchor-generated-image-bank/production/podcast_uploaded400/629479/629479-1532081312443-0775c88e065fc.jpg'
        },
        {
          id: 3,
          title: 'Ngobrolin Startup & Teknologi',
          url: 'https://anchor.fm/ngobrolinstartup',
          image:
            'https://s3-us-west-2.amazonaws.com/anchor-generated-image-bank/production/podcast_uploaded400/1428780/1428780-1552434368252-f1fbc595b4474.jpg'
        }
      ]
    };
  }
  renderItem = (podcast) => (
    <View key={podcast.id} style={styles.itemContainer}>
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
