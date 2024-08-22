import {
  createUserWithEmailAndPassword,
  updateProfile,
  AuthErrorCodes,
  signOut,
} from 'firebase/auth';
import { FirebaseError } from 'firebase/app';
import { StateValuesType } from 'hooks/useFormStore';
import { auth } from './firebaseConfig';

export async function signUp(formData: StateValuesType) {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      formData.email,
      formData.password
    );

    updateProfile(userCredential.user, {
      displayName: formData.userName,
    });

    await signOut(auth); // done for not to automatically login new user because of firebase specific working (auto sign in) in signUp case
  } catch (error) {
    if (error instanceof FirebaseError) {
      if (error.code === AuthErrorCodes.EMAIL_EXISTS) {
        return Promise.reject(new Error('User with this email already exists'));
      }
    }
    return Promise.reject(error);
  }
}
