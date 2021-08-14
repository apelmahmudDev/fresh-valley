import React, { useContext } from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from '../../firebase';
import { UserContext } from '../../App';
import google from '../../images/google.svg';

// Initialize Firebase
if (!firebase.apps.length) {
	firebase.initializeApp(firebaseConfig);
} else {
	firebase.app(); // if already initialized, use that one
}
const provider = new firebase.auth.GoogleAuthProvider();

const Login = () => {
	const { user, setUser } = useContext(UserContext);
	console.log(user);

	const userHandler = () => {
		firebase
			.auth()
			.signInWithPopup(provider)
			.then((result) => {
				// The signed-in user info.
				const user = result.user;
				const newUser = {
					name: user.displayName,
					email: user.email,
					photo: user.photoURL,
				};
				setUser(newUser);
			})
			.catch((error) => {
				// Handle Errors here.
				var errorMessage = error.message;
				// The email of the user's account used.
				console.log('error', errorMessage);
			});
	};

	return (
		<div
			className='container d-flex justify-content-center align-items-center'
			style={{ height: '100vh' }}
		>
			<div className='h-auto shadow-sm rounded p-5 border text-center'>
				<h2 className='text-dark fw-bold mb-4 text-uppercase'>Fresh Valley</h2>
				<button
					onClick={userHandler}
					className='btn btn-white border rounded-pill shadow-sm d-flex align-items-center'
				>
					<img
						className='d-block me-2 img-fluid'
						src={google}
						alt='google icon'
					/>
					<span>Continue with Google</span>
				</button>
			</div>
		</div>
	);
};

export default Login;
