import React from 'react';
import { Text, TextInput, Button, View } from 'react-native';

import { database } from '../src/firebase.js';
import styles from './styles.js';

class AddPodcast extends React.Component {
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
      title: '',
      image: '',
      url: ''
    };
  }
  changeTitle = (text) => {
    this.setState({ title: text });
  };
  changeImage = (text) => {
    this.setState({ image: text });
  };
  changeUrl = (text) => {
    this.setState({ url: text });
  };
  submitPodcast = () => {
    const { title, image, url } = this.state;
    const newPodcast = {
      title: title,
      image: image,
      url: url
    };
    database.ref('/podcasts').push(newPodcast);
  };
  render() {
    return (
      <View style={styles.formContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Title"
          placeholderTextColor="#6D757D"
          value={this.state.title}
          onChangeText={this.changeTitle}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Image"
          placeholderTextColor="#6d757d"
          value={this.state.image}
          onChangeText={this.changeImage}
        />
        <TextInput
          style={styles.textInput}
          placeholder="URL"
          placeholderTextColor="#6d757d"
          value={this.state.url}
          onChangeText={this.changeUrl}
        />
        <Button color="#4fd69c" title="Save" onPress={this.submitPodcast} />
      </View>
    );
  }
}

export default AddPodcast;
