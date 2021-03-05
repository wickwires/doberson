import firestore from '@react-native-firebase/firestore';

// const userDocument = firestore().collection('Users').doc('FMgVKvXoTvME8REIv57x');

export const createOrUpdateUser = async (obj, uid) => {
  const docSnapshot = await firestore().collection('Users').doc(uid).get();
  if (docSnapshot.exists) {
    await firestore()
      .collection('Users')
      .doc(uid)
      .update(JSON.parse(JSON.stringify(obj)));
  } else {
    await firestore()
      .collection('Users')
      .doc(uid)
      .set(JSON.parse(JSON.stringify(obj)));
  }
};

export const getUser = async (uid) => {
  const docSnapshot = await firestore().collection('Users').doc(uid).get();
  return {id: docSnapshot.id, ...docSnapshot.data()};
};

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

export const setFirestoreObject = async (collectionName, obj) => {
  await firestore()
    .collection(`${collectionName}`)
    .add(JSON.parse(JSON.stringify(obj)));
  console.log('User added!');
};
