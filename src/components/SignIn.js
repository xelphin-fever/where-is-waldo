import React, { useState} from 'react';
import firebase from '../firebase'

const SignIn = (props) => {

  // VARAIBLES
  const [user, setUser] = useState("guest");
  const [pageState, setPageState] = useState("main");
  

  // GUEST
  const makeGuest = () => {
    if (!firebase.auth().currentUser.isAnonymous){
      firebase.auth().signOut();
      console.log("not logged in -> Sign in as Guest (from SignIn)");
      const promise = firebase.auth().signInAnonymously();
      promise.then(function(result) {
        console.log('made a user!');
        return result.user.updateProfile({
          displayName: "Guest",
        })
      })
      promise.catch((e) => (console.log(e)));
    }
  }

  // SIGN UP
  const signUp = () => {
    const username = document.querySelector("#signUp-username");
    const email = document.querySelector("#signUp-email");
    const password = document.querySelector("#signUp-password");
    // Add User
    let auth = firebase.auth();
    const promise = auth.createUserWithEmailAndPassword(email.value, password.value);
    promise.then(function(result) {
      return result.user.updateProfile({
        displayName: username.value
      })
    })
    promise.catch((e) => (alert(e)));
  }

  // LOG IN
  const logIn = () => {
    const email = document.querySelector('#logIn-email');
    const password = document.querySelector('#logIn-password');
    // CHECK LOGIN
    let auth = firebase.auth();
    const promise = auth.signInWithEmailAndPassword(email.value, password.value);
    promise.catch((e) => (alert(e)));

  }


  // RENDER
  if (pageState === "main") {
    return (
      <div className="sign-in">
        <div className="signIn-sideBar">
          <button className="signIn-special" onClick={props.hide}>❌</button>
        </div>
        
        <button className="sign-in-button" onClick={makeGuest}>Continue as Guest</button>
        <button className="sign-in-button" onClick={()=> setPageState("signUp")} >Sign Up</button>
        <button className="sign-in-button" onClick={()=> setPageState("logIn")}>Log In</button>
      </div>
    );
  }
  else if (pageState === "signUp"){
    return (
      <div className="sign-in">
        <div className="signIn-sideBar">
          <button className="signIn-special" onClick={props.hide}>❌</button>
          <button className="signIn-special" onClick={()=> setPageState("main")}>🔙</button>
        </div>
        <input type="text" placeholder="username" id="signUp-username" maxLength="14"/>
        <input type="email" placeholder="fake-email@site.com" id="signUp-email" maxLength="20"/>
        <input type="password" placeholder="password"  id="signUp-password" maxLength="14"/>
        <button className="sign-in-button" onClick={signUp}>Create Account</button>
      </div>
    );
  }
  else { // logIn
    return (
      <div className="sign-in">
        <div className="signIn-sideBar">
          <button className="signIn-special" onClick={props.hide}>❌</button>
          <button className="signIn-special" onClick={()=> setPageState("main")}>🔙</button>
        </div>
        <input type="email" placeholder="your-email@site.com" id="logIn-email"/>
        <input type="password" placeholder="password"  id="logIn-password"/>
        <button className="sign-in-button" onClick={logIn}>Log In</button>
      </div>
    );
  }
}

export default SignIn;