import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1
  },
  headerText: {
    fontSize: 32,
    fontWeight: 'bold'
  },
  formContainer: {
    flex: 1,
    justifyContent: 'center',
    margin: 20
  },
  textInput: { margin: 6, height: 40, borderColor: '#F7F8F9', borderWidth: 1 },
  webView: {
    flex: 10
  },
  buttonContainer: {
    flex: 0.1
  },
  image: {
    width: '100%',
    height: '100%'
  },
  formTitle: {
    fontSize: 22,
    fontWeight: 'bold'
  },
  buttonTransparent: {
    margin: 6,
    alignItems: 'center'
  },
  errorContainer: {
    padding: 6,
    borderColor: '#f75676',
    borderWidth: 1,
    borderRadius: 5
  },
  textError: {
    color: '#f75676'
  }
});
