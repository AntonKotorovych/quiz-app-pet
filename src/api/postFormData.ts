import { createUserWithEmailAndPassword } from 'firebase/auth';
import { updateProfile } from 'firebase/auth';
import { FirebaseError } from 'firebase/app';
import { StateValuesType } from 'hooks/useFormStore';
import { firebaseAuth } from './firebase';

export async function postFormData(formData: StateValuesType) {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      firebaseAuth,
      formData.email,
      formData.password
    );

    updateProfile(userCredential.user, {
      displayName: formData.userName,
    });
  } catch (error) {
    if (error instanceof FirebaseError) {
      if (error.code === 'auth/email-already-in-use') {
        return Promise.reject(new Error('User with this email already exists'));
      }
    }
    return Promise.reject(error);
  }
}
