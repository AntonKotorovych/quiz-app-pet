import { signInWithEmailAndPassword, AuthErrorCodes } from 'firebase/auth';
import { FirebaseError } from 'firebase/app';
import { LoginCredentials } from 'hooks/useFormStore';
import { auth } from './firebaseConfig';

export async function signIn(userData: LoginCredentials) {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      userData.email,
      userData.password
    );
    return userCredential.user;
  } catch (error) {
    if (error instanceof FirebaseError) {
      if (error.code === AuthErrorCodes.INVALID_LOGIN_CREDENTIALS) {
        return Promise.reject(
          new Error('Incorrect email or password. Please try again.')
        );
      }
    }
    return Promise.reject(error);
  }
}
