import React, {useState, useEffect, useContext, createContext} from 'react'
import firebase from './firebase'

const authContext = createContext()

export function ProvideAuth({children}) {
    const auth = useProvideAuth()
    return <authContext.Provider value={auth}>{children}</authContext.Provider>
}


export const useAuth = () => {
    return useContext(authContext)
}

function useProvideAuth() {
    const [user, setUser] = useState(null)

    const signin = (email, password) => {
        return firebase
            .auth()
            .signInWithEmailAndPassword(email, password)
            .then((response) => {
                setUser(response.user)
                return response.user
            })
    }

    const signup = (email, password) => {
        return firebase
            .auth()
            .createUserWithEmailAndPassword(email, password)
            .then((response) => {
                setUser(response.user)
                return response
            })
    }

    const signout = () => {
        return firebase
            .auth()
            .signOut()
            .then(() => {
                setUser(false)
            })
    }

    const signInWithGoogle = () => {
        return firebase
            .auth()
            .signInWithPopup(new firebase.auth.GoogleAuthProvider())
            .then((response) => {
                setUser(response.user)
                return response.user
            })
    }

    useEffect(() => {
        const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                setUser(user)
            } else {
                setUser(false)
            }
        })

        return () => unsubscribe()
    }, [])

    return {
        user,
        signin,
        signout,
        signup,
        signInWithGoogle
    }
}