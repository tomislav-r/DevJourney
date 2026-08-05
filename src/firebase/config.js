import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyDnLbJTydqgnC2rInhwxjVfLNj1FI1ObRQ',
  authDomain: 'dev-journey-2332a.firebaseapp.com',
  projectId: 'dev-journey-2332a',
  storageBucket: 'dev-journey-2332a.firebasestorage.app',
  messagingSenderId: '753587128',
  appId: '1:753587128:web:a2f7aaaf6c9ef35c24b54d',
}

firebase.initializeApp(firebaseConfig)

const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()

export { firebase, projectFirestore, projectAuth }
