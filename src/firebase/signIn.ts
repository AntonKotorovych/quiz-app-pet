import {
  signInWithEmailAndPassword,
  AuthErrorCodes,
  signInWithPopup,
} from 'firebase/auth';
import { FirebaseError } from 'firebase/app';
import { LoginCredentials } from 'hooks/useFormStore';
import { LOGIN_METHOD } from 'constants/enums';
import { auth } from './firebaseConfig';
import { googleProvider } from './googleProvider';
import { facebookProvider } from './facebookProvider';

export interface SignIn {
  userData?: LoginCredentials;
  loginMethod?: LOGIN_METHOD;
}

export async function signIn({ userData, loginMethod }: SignIn) {
  try {
    if (userData && loginMethod === LOGIN_METHOD.EMAIL_AND_PASSWORD) {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        userData.email,
        userData.password
      );
      return userCredential.user;
    } else if (loginMethod === LOGIN_METHOD.GOOGLE) {
      const userCredential = await signInWithPopup(auth, googleProvider);
      return userCredential.user;
    } else if (loginMethod === LOGIN_METHOD.FACEBOOK) {
      const userCredential = await signInWithPopup(auth, facebookProvider);
      return userCredential.user;
    }
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
