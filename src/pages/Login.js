import React, { useState, useEffect } from "react"
import { signInWithEmailAndPassword, onAuthStateChanged,signOut } from "firebase/auth";
import { auth } from "../config/firebase"
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const initialState = { email: "", password: "" }

export default function Login() {

    const [state, setState] = useState(initialState)
    const [user, setUser] = useState({})

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                // User is signed in, see docs for a list of available properties
                // https://firebase.google.com/docs/reference/js/firebase.User
                // const uid = user.uid;
                console.log(user)
                setUser(user)   //setUser for providing information  of User in whole website  who logged in.
                // ...
            } else {
                // User is signed out
                setUser({})
                // ...
            }
        });

    }, [])
    const signOutHandler = () => {
        // const auth = getAuth();
        signOut(auth).then(() => {
            // Sign-out successful.
          toast.success('User has been logged Out!', {
            position: "bottom-left",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        }).catch((error) => {
          // An error happened.
          console.log(error)
          toast.error(error.message, {
            position: "bottom-left",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        });
      }
    
    const handleChange = e => {
        setState({ ...state, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(state)

        const { email, password } = state

        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                console.log("User Loggedin successful")
                toast.success('User has been logged In!', {
                    position: "bottom-left",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                  });
                console.log(userCredential)
                console.log(user)
                // ...
            })
            .catch((error) => {
                // const errorCode = error.code;
                // const errorMessage = error.message;
                console.error(error)
                toast.error(error.message, {
                    position: "bottom-left",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                  });
                // ..
            });
    }

    return (
        <main>
            <div className='py-5 w-100'>
                <div>
                    {user.email
                        ? <div className="row">
                            <div className="col text-center">
                                <h2 className="text-white">User Email: {user.email}</h2>
                                <h2 className="text-white">User UID: {user.uid}</h2>
                                <button className="btn btn-danger" onClick={signOutHandler}>Logout</button>
                            </div>
                        </div>
                        : <div className="row">
                            <div className="col-12 col-md-8 offset-md-2 col-lg-6 offset-lg-3">
                                <div className="card p-2 p-md-4 p-lg-5">
                                    <h2 className="text-center mb-4">Login Form</h2>
                                    <form onSubmit={handleSubmit}>
                                        <div className="row mb-3">
                                            <div className="col">
                                                <input type="email" className="form-control" placeholder="Email" name='email' onChange={handleChange} />
                                            </div>
                                        </div>
                                        <div className="row mb-3">
                                            <div className="col">
                                                <input type="password" className="form-control" placeholder="Password" name='password' onChange={handleChange} />
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col text-center">
                                                <button className='btn btn-outline-success w-50'>Login</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    }
                </div>
            </div>
        </main>
    );
}