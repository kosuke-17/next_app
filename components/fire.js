import firebase from 'firebase'

// 各プロジェクトの設定を記述
const firebaseConfig = {
  apiKey: "AIzaSyDRMBak-X-EiSGz1rcG8R4rAqoYEM5OWak",
  authDomain: "kosuke-react17.firebaseapp.com",
  databaseURL: "https://console.firebase.google.com/project/kosuke-react17/firestore/data~2Fmydata",
  projectId: "kosuke-react17",
  storageBucket: "kosuke-react17.appspot.com",
  messagingSenderId: "870367550584",
  appId: "1:870367550584:web:5dc09b8b6f0f0aedb2e18d"
}

if (firebase.apps.length == 0) {
  firebase.initializeApp(firebaseConfig)
}