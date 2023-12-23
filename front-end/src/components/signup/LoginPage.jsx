import React, { useContext, useEffect, useState } from 'react'
import { LoginDiv } from './Style'
import contextStore from '../../context/ContextFile'
import { useNavigate } from 'react-router-dom'

const LoginPage = () => {

    useEffect(()=>{
        if(localStorage.getItem('token')){
            navigate('/')    
        }
    },)

    const navigate = useNavigate()
    const {setAlertInfo} = useContext(contextStore)
    const [data, setData] = useState({})

    const onSubmitHandler = async(event)=>{
        event.preventDefault()

        const response = await fetch('http://13.211.139.220/apis/codechef_api/requests/login_user.php', {
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body: JSON.stringify(data)
        })
        const json = await response.json()
        setAlertInfo({
            status: true,
            color: json['status']?'green':'red',
            message: json['message']
        })
        if(json['status']){
            localStorage.setItem('token', json.content.id)
            localStorage.setItem('username', json.content.name)
            navigate('/')
        }
    }

    const onChangeHandler=(event)=>{
        let name = event.target.name
        setData(prev=> ({...prev, [name]:event.target.value}))
    }

  return (
    <LoginDiv>

        <h1>Welcome back !</h1>
        <span>Log in to access your account</span>
        <form onSubmit={onSubmitHandler}>
            <table>
                <thead>
                    <th>Email</th>
                    <th><input type="email" required autoComplete="off" name="email" onChange={onChangeHandler}/></th>
                </thead>
                <thead>
                    <th>Password</th>
                    <th><input type="password" required name="password" onChange={onChangeHandler}/></th>
                </thead>
                <thead>
                    <th></th>
                    <th><button type="submit">LOGIN</button></th>
                </thead>
            </table>
        </form>

    </LoginDiv>
  )
}

export default LoginPage