import { ref, computed } from 'vue';
import { auth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, updateProfile } from '../firebase/config';
import { onAuthStateChanged } from 'firebase/auth';

interface User {
  uid: string;
  email: string;
  displayName: string;
  phoneNumber?: string;
  photoURL?: string;
}

const user = ref<User | null>(null);
const loading = ref(false);
const error = ref<string | null>(null);

// Computed properties
const isAuthenticated = computed(() => !!user.value);
const userInitials = computed(() => {
  if (!user.value?.displayName) return 'US';
  return user.value.displayName
    .split(' ')
    .map(n => n[0])
    .join('')
    .toUpperCase()
    .slice(0, 2);
});

// Initialize auth state
onAuthStateChanged(auth, (firebaseUser) => {
  if (firebaseUser) {
    user.value = {
      uid: firebaseUser.uid,
      email: firebaseUser.email || '',
      displayName: firebaseUser.displayName || '',
      phoneNumber: firebaseUser.phoneNumber || undefined,
      photoURL: firebaseUser.photoURL || undefined,
    };
  } else {
    user.value = null;
  }
});

// Auth functions
const login = async (email: string, password: string) => {
  loading.value = true;
  error.value = null;
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    return userCredential.user;
  } catch (err: any) {
    error.value = err.message;
    throw err;
  } finally {
    loading.value = false;
  }
};

const register = async (email: string, password: string, displayName: string, phoneNumber?: string) => {
  loading.value = true;
  error.value = null;
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    
    // Update profile with display name
    await updateProfile(userCredential.user, {
      displayName,
    });
    
    return userCredential.user;
  } catch (err: any) {
    error.value = err.message;
    throw err;
  } finally {
    loading.value = false;
  }
};

const logout = async () => {
  loading.value = true;
  error.value = null;
  try {
    await signOut(auth);
  } catch (err: any) {
    error.value = err.message;
    throw err;
  } finally {
    loading.value = false;
  }
};

export const useAuth = () => ({
  user,
  loading,
  error,
  isAuthenticated,
  userInitials,
  login,
  register,
  logout,
});
