import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/firebase.config";

export const AuthContext = createContext(null)

const AuthProvider = ({ children }) => {
	const [user, setUser] = useState(null)
	const [loading, setLoading] = useState(true)

	const createUser = (email, password) => {
		setLoading(true)
		return createUserWithEmailAndPassword(auth, email, password)
	}

	const login = (email, password) => {
		setLoading(true)
		return signInWithEmailAndPassword(auth, email, password)
	}

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (user) => {
			setUser(user)
			console.log('current user', user)
			setLoading(false)
		})
		return () => {
			return unsubscribe()
		}

	}, [])

	const authInfo = {
		user,
		loading,
		createUser,
		login,

	}
	return (
		<AuthContext.Provider value={authInfo}>
			{children}
		</AuthContext.Provider>
	);
};

export default AuthProvider;

AuthProvider.propTypes = {
	children: PropTypes.node,
}