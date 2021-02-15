import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  body: {
    backgroundColor: '#ffffff',
    // flex: 1,
    justifyContent: 'space-between',
  },
  headerContainer: {
    // flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginHorizontal: 20,
    paddingTop: 80,
  },
  headerText: {
    fontSize: 40,
    paddingBottom: 10,
  },
  messageHeaderContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingBottom: 5,
  },
  // userImage: {
  //   width: 80,
  //   height: 80,
  //   alignItems: 'flex-start',
  // },
  messageNameText: {
    fontSize: 16,
    marginHorizontal: 20,
    alignItems: 'flex-start',
  },
  time: {
    fontSize: 16,
    color: '#8e8e93',
    alignItems: 'flex-end',
    marginHorizontal: 20,
  },
  messagePreviewText: {
    fontSize: 16,
    color: '#8e8e93',
    marginHorizontal: 20,
    paddingBottom: 10,
  },
});

export default styles;
