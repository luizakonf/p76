import firebase from 'firebase';

// adicione SDK do Firebase
var firebaseConfig = {
    
        apiKey: "AIzaSyC3jZPjesl32rAVghf3oDToE-zvK0s-m9I",
        authDomain: "projeto67-f4ac1.firebaseapp.com",
        databaseURL: "https://projeto67-f4ac1-default-rtdb.firebaseio.com",
        projectId: "projeto67-f4ac1",
        storageBucket: "projeto67-f4ac1.appspot.com",
        messagingSenderId: "917680934427",
        appId: "1:917680934427:web:821813a5274707f009b2be"
      
};
// Initialice o Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();