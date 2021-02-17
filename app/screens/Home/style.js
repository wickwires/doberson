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
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    paddingBottom: 5,
  },
  // userImage: {
  //   width: 50,
  //   height: 50,
  //   alignSelf: 'flex-start',
  // },
  messageNameText: {
    fontSize: 16,
    marginHorizontal: 20,
    alignSelf: 'flex-start',
    lineHeight: 20,
  },
  time: {
    fontSize: 16,
    color: '#8e8e93',
    alignContent: 'flex-end',
    marginHorizontal: 20,
    lineHeight: 20,
  },
  messagePreviewText: {
    fontSize: 16,
    color: '#8e8e93',
    marginHorizontal: 20,
    paddingBottom: 10,
    lineHeight: 20,
    alignItems: 'flex-start',
  },
});

export default styles;
