import {
  AuthErrorCodes,
  createUserWithEmailAndPassword,
  signOut as fireBaseSignOut,
  signInWithEmailAndPassword,
  signInWithPopup,
  updateProfile,
} from 'firebase/auth';
import { FirebaseError } from 'firebase/app';
import { LOGIN_METHOD } from 'constants/enums';
import { auth } from 'firebase/firebaseConfig';
import { LoginCredentials, StateValuesType } from 'hooks/useFormStore';
import { googleProvider } from 'firebase/googleProvider';
import { facebookProvider } from 'firebase/facebookProvider';

export interface SignIn {
  userData?: LoginCredentials;
  loginMethod?: LOGIN_METHOD;
}

export async function signIn({ userData, loginMethod }: SignIn) {
  try {
    switch (loginMethod) {
      case LOGIN_METHOD.EMAIL_PASSWORD:
        if (userData) {
          return await signInWithEmailAndPassword(
            auth,
            userData.email,
            userData.password
          );
        }
        break;

      case LOGIN_METHOD.GOOGLE:
        return await signInWithPopup(auth, googleProvider);

      case LOGIN_METHOD.FACEBOOK:
        return await signInWithPopup(auth, facebookProvider);
    }
  } catch (error) {
    if (error instanceof FirebaseError) {
      if (error.code === AuthErrorCodes.INVALID_LOGIN_CREDENTIALS) {
        throw new Error('Incorrect email or password. Please try again.');
      }
    }
    throw error;
  }
}

export async function signUp(formData: StateValuesType) {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      formData.email,
      formData.password
    );

    await updateProfile(userCredential.user, {
      displayName: formData.userName,
    });

    return userCredential.user;
  } catch (error) {
    if (error instanceof FirebaseError) {
      if (error.code === AuthErrorCodes.EMAIL_EXISTS) {
        throw new Error('User with this email already exists');
      }
    }
    throw error;
  }
}

export const signOut = () => fireBaseSignOut(auth);
