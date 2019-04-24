import React from 'react';
import { Button, View, Text, TextInput } from 'react-native';

import { database } from '../src/firebase.js';
import styles from './styles.js';

class EditPodcast extends React.Component {
  constructor(props) {
    super(props);
    const { title, url, image, id } = this.props.navigation.getParam('podcast');
    this.state = {
      title,
      url,
      image,
      id
    };
  }
  changeTitle = (text) => {
    this.setState({
      title: text
    });
  };
  changeImage = (text) => {
    this.setState({
      image: text
    });
  };
  changeUrl = (text) => {
    this.setState({
      url: text
    });
  };
  editPodcast = () => {
    database.ref(`/podcasts/${this.state.id}`).update(this.state);
    this.props.navigation.pop();
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
        <Button color="#4fd69c" title="Save" onPress={this.editPodcast} />
      </View>
    );
  }
}

export default EditPodcast;
