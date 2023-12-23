import React, { useContext, useEffect, useState } from 'react'
import { SignupDiv } from './Style'
import { useNavigate } from 'react-router-dom'
import contextStore from '../../context/ContextFile'

const SignupPage = () => {
  useEffect(()=>{
      if(localStorage.getItem('token')){
          navigate('/')    
      }
  })
  const navigate = useNavigate()
  const {setAlertInfo} = useContext(contextStore);
  const [data, setData] = useState({})

  const onSubmitHandler = async(event)=>{
      event.preventDefault()
      const response = await fetch('http://13.211.139.220/apis/codechef_api/requests/add_user.php', {
        method:"POST",
        headers:{
            "Content-Type":"application/json",
        },
        body:JSON.stringify(data),
      })
      const json = await response.json()
      setAlertInfo({
        status: true,
        color:json['status']?"green":"red",
        message:json['message']
      })
      if(json['status']){
          navigate('/login');
      }
  }

  const onChangeHandler=(event)=>{
      let name = event.target.name 
      setData(prev => ({...prev, [name]: event.target.value}))
  }
  return (
    <SignupDiv>
        <h1>Join us today !</h1>
        <span>Sign up now to create an account</span>
        <form onSubmit={onSubmitHandler}>
            <table>
                <thead>
                    <th>Username</th>
                    <th><input type="text" required autoComplete="off" name="name" onChange={onChangeHandler}/></th>
                </thead>
                <thead>
                    <th>Email</th>
                    <th><input type="email" required autoComplete="off" name="email" onChange={onChangeHandler}/></th>
                </thead>
                <thead>
                    <th>Password</th>
                    <th><input type="password" required autoComplete="off" name="password" onChange={onChangeHandler}/></th>
                </thead>
                <thead>
                    <th></th>
                    <th><button type="submit">SIGN UP</button></th>
                </thead>
            </table>
        </form>
    </SignupDiv>
  )
}

export default SignupPage