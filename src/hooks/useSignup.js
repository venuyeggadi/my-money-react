import { useState } from "react";
import { projectAuth } from '../firebase/config';

const useSignup = () => {
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);

  const signup = async (email, password, displayName) => {
    setError(null)
    setIsPending(true)
    try {
      // signup
      const res = await projectAuth.createUserWithEmailAndPassword(email, password)
      console.log(res.user)
      if (!res) {
        throw new Error('Could not complete signup')
      }
      // add display name to user
      await res.user.updateProfile({ displayName: displayName })
      setError(null)
    }
    catch (err) {
      setError(err.message)
    }
    setIsPending(false)
  }

  return { signup, error, isPending }
}
 
export default useSignup;