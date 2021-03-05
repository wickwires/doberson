import firestore from '@react-native-firebase/firestore';

// const userDocument = firestore().collection('Users').doc('FMgVKvXoTvME8REIv57x');

// const getFirestoreObject = () => {
//   firestore()
//     .collection('Users')
//     // Filter results
//     .where('age', '>=', 18)
//     .get()
//     .then((querySnapshot) => {
//       // console.log(querySnapshot.docs);
//       querySnapshot.forEach((documentSnapshot) => {
//         console.log('User ID: ', documentSnapshot.id, documentSnapshot.data());
//       });
//     });
// };

export const getFirestoreObject = async () => {
  let documentArray = [];
  const querySnapshot = await firestore()
    .collection('Users')
    // Filter results
    .where('age', '>=', 18)
    .get();

  querySnapshot.forEach((documentSnapshot) => {
    // console.log('User ID: ', documentSnapshot.id, documentSnapshot.data());
    documentArray.push({id: documentSnapshot.id, ...documentSnapshot.data()});
  });
  return documentArray;
};

export const setFirestoreObject = () => {
  firestore()
    .collection('Users')
    .add({
      name: 'Ada Lovelace',
      age: 30,
    })
    .then(() => {
      console.log('User added!');
    });
};
