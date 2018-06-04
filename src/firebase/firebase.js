import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyBK5K5LBLlADI7TOOSdWyg1a9uk4Q-La1M",
    authDomain: "expensify-fc952.firebaseapp.com",
    databaseURL: "https://expensify-fc952.firebaseio.com",
    projectId: "expensify-fc952",
    storageBucket: "expensify-fc952.appspot.com",
    messagingSenderId: "292945807438"
};

firebase.initializeApp(config);

firebase.database().ref().set({
    name: 'Anurag Singh'
});