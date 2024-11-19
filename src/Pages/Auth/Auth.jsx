import React, { useState } from "react";
import Layout from "../../Component/Layout/Layout";
import { Link } from "react-router-dom";
import classes from "./Signup.module.css";
import {auth} from '../../utils/firebase'
import {signInWithEmailAndPassword,createUserWithEmailAndPassword} from 'firebase/auth'

const Auth = () => {
  const[email,setEmail]=useState('')
  const[password,setPassword]=useState('')
  const[error,setError]=useState('')
  const authhandeler=(e)=>{
    e.preventDefault();
    console.log(e.target.name)
    if(e.target.name=="signin"){
      signInWithEmailAndPassword(auth,email,password).then((user)=>{
    console.log(user)
  }).catch((err)=>{
      console.log(err)
    })
    }
    else{
      createUserWithEmailAndPassword(auth,email,password).then((user)=>{
        console.log(user)
      }).catch((err)=>{
        console.log(err)
      })
      }
  }
  return (
    <Layout>
      <section className={classes.login}>
        {/* logo */}
        <Link>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/603px-Amazon_logo.svg.png"
            alt=""
          />
        </Link>
        {/* form */}
        <div className={classes.login_container}>
          <h1>Sign-In</h1>
          <form action="">
            <div>
              <label htmlFor="email">Email</label>
              <input value={email} type="email" id="email" onChange={(e)=>setEmail(e.target.value)} />
            </div>
            <div>
              <label htmlFor="passwor">Password</label>
              <input type="password" id="password" value={password} onChange={(e)=>setPassword(e.target.value)} />
            </div>
            <button className={classes.singn_btn} type="submit" onClick={authhandeler} name="signin">Sign In</button>
          </form>
        {/* Agreement */}
        <p>By continuing, you agree to Amazon's Fake Clone Conditions of Use and Privacy Notice.</p>
        <button className={classes.login_create} type="submit" onClick={authhandeler} name="signup">Create your Amazon Accout</button>
        </div>
      </section>
    </Layout>
  );
};

export default Auth;
