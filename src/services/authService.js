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
