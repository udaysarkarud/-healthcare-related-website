import initializeHealthCareAuth from "../Firebase/firebase.init";
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useEffect, useState } from "react";


initializeHealthCareAuth()

const useFirebase = () => {
    const [userProfile, setUserProfile] = useState();
    const [isLoading, setIsLoading] = useState(true);
    const [allError, setAllError] = useState('')


    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    /* google Sign in  */
    const handelGoogleSignIn = () => {
        return signInWithPopup(auth, googleProvider)

    }

    /* google Sign Out  */
    const handelSignOut = () => {
        setIsLoading(true)
        signOut(auth).then(() => {
            setUserProfile({})
        }).catch((error) => {
            console.log(error.message)
        }).finally(() => {
            setIsLoading(false)
        })

    }

    /* Singup With Email and Password  */
    const handelEmailPasswordRegister = (name, email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                console.log(result.user)
                handelUpdateUserProfile(name)
            })
            .catch((error) => {
                console.log(error.message)
            });

    }

    /* Update Profile for Email and Password Signup  */
    const handelUpdateUserProfile = (name) => {
        updateProfile(auth.currentUser, {
            displayName: name
        }).then((result) => {

        }).catch((error) => {
            console.log(error.message)
        });
    }

    /* Email and Password SignIn  */
    const handelEmailPasswordLogin = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                console.log(result.user)
            })
            .catch((error) => {
                setAllError(error.message)
            });
    }

    /* Update useProfile State  */
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUserProfile(user)
            } else {
                setUserProfile({})
            }
            setIsLoading(false)
        });

        return () => unsubscribed;
    }, [])

    /* return necessary functions and state  */
    return {
        allError,
        userProfile,
        isLoading,
        setIsLoading,
        handelGoogleSignIn,
        handelSignOut,
        handelEmailPasswordRegister,
        handelEmailPasswordLogin

    }

}
export default useFirebase;