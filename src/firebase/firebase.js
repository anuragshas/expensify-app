import * as firebase from 'firebase';

const config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
};

firebase.initializeApp(config);

const database = firebase.database();

export { firebase, database as default };

// database.ref().on(
//   "value",
//   snapshot => {
//     const value = snapshot.val();
//     console.log(
//       "My name is " + value.name + " and I am from " + value.location.city
//     );
//   },
//   e => {
//     console.log("error:", e);
//   }
// );

// database
//   .ref()
//   .set({
//     name: "Anurag Singh",
//     age: 22,
//     isSingle: true,
//     location: {
//       city: "Patna",
//       state: "BH"
//     }
//   })
//   .then(() => {
//     console.log("Data Saved");
//   })
//   .catch(error => {
//     console.log("error:", error);
//   });

// database
//   .ref("isSingle")
//   .remove()
//   .then(() => {
//     console.log("Data Removed");
//   })
//   .catch(error => {
//     console.log("Data remove failed:", error);
//   });
