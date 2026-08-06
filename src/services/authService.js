import { firebase, projectAuth, projectFirestore } from '@/firebase/config'

export async function registerUser(email, password, role) {
  const userCredential = await projectAuth.createUserWithEmailAndPassword(email, password)

  const user = userCredential.user

  await projectFirestore.collection('users').doc(user.uid).set({
    email: user.email,
    role: role,
    createdAt: firebase.firestore.FieldValue.serverTimestamp(),
  })

  return user
}

export async function loginUser(email, password) {
  const userCredential = await projectAuth.signInWithEmailAndPassword(email, password)

  return userCredential.user
}
