import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column'
  },
  box: {
    flex: 1
  },
  contentContainer: {
    backgroundColor: '#F7F8F9',
    flex: 10
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
  itemContainer: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#6D757D',
    flex: 1,
    flexDirection: 'row'
  },
  itemText: {
    fontWeight: 'bold',
    fontSize: 20
  },
  itemUrl: {
    color: '#6D757D'
  },
  itemImage: {
    width: 64,
    height: 64
  },
  itemImageContainer: {
    flex: 1,
    justifyContent: 'center'
  },
  itemTextContainer: {
    flex: 3,
    justifyContent: 'center'
  }
});
