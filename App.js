import React, { Component } from 'react';
import { Button, Image, StyleSheet, Text, View } from 'react-native';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      podcasts: [
        {
          id: 1,
          title: 'Ceritanya Developer Podcast',
          url: 'https://ceritanyadeveloper.com',
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
    <View key={podcast.id} style={styles.item}>
      <Text style={styles.itemText}>{podcast.title}</Text>
    </View>
  );
  render() {
    const podcastList = this.state.podcasts.map(this.renderItem);
    return (
      <View style={styles.container}>
        <View style={[styles.box, styles.headerContainer]}>
          <Text style={styles.headerText}>HEADER</Text>
        </View>
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
  },
  item: {
    margin: 6
  },
  itemText: {
    fontWeight: 'bold',
    fontSize: 16
  }
});
