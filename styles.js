import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column'
  },
  headerContainer: {
    backgroundColor: '#343A40',
    flex: 1,
    alignItems: 'center'
  },
  headerText: {
    fontSize: 24,
    color: '#fff'
  },
  infoContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: '#6C757C',
    paddingRight: 6,
    flexDirection: 'row'
  },
  infoText: {
    paddingRight: 6,
    color: '#fff'
  },
  box: {
    flex: 1
  },
  contentContainer: {
    backgroundColor: '#F7F8F9',
    flex: 10
  },
  menuContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#6D757D'
  },
  footerContainer: {
    backgroundColor: '#343A40',
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
