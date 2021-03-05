import auth from '@react-native-firebase/auth';

export const signout = async () => {
  try {
    await auth().signOut();
    console.log('User signed out!');
  } catch (error) {
    console.error(error);
  }
};
