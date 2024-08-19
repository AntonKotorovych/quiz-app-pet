import { signInWithEmailAndPassword } from 'firebase/auth';
import { FirebaseError } from 'firebase/app';
import { firebaseAuth } from 'api/firebase';
import { LoginCredentials } from 'hooks/useFormStore';

export async function loginUser(userData: LoginCredentials) {
  try {
    const userCredential = await signInWithEmailAndPassword(
      firebaseAuth,
      userData.email,
      userData.password
    );
    console.log(userCredential.user);
    return userCredential.user;
  } catch (error) {
    if (error instanceof FirebaseError) {
      if (error.code === 'auth/invalid-credential') {
        return Promise.reject(
          new Error('Incorrect email or password. Please try again.')
        );
      }
    }
    return Promise.reject(error);
  }
}
