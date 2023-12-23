import React, { useContext, useEffect } from 'react'
import MainDiv from './NavbarStyle'
import icon from '../../images/icon.png'
import { Link, useNavigate } from 'react-router-dom'
import contextStore from '../../context/ContextFile'
const Navbar = () => {

  const {alertInfo, setAlertInfo} = useContext(contextStore);
  useEffect(()=>{
      if(alertInfo.status){
          setTimeout(() => {
              setAlertInfo({
                status: false,
                color:"transparent",
                message:""
              })
          }, 2000);
      }
  },[alertInfo])
  
  const navigate = useNavigate()

  const onLogoutHandler=()=>{
      localStorage.removeItem('token')
      localStorage.removeItem('username')  
      setAlertInfo({
            status:true,
            color:"green",
            message:"Logged out successfully"
      })
      setTimeout(() => {
        navigate('login')
      }, 100);
  }
  return (
    <MainDiv>
        <header>
            <div>
              <Link to="/">
                <img src={icon} alt="icon" />
              </Link>
            </div>
            <div className="alert" style={{color: alertInfo.color, borderColor: alertInfo.color}}>
                {alertInfo.message}
            </div>
            <div className="btns">
                {
                  !localStorage.getItem('token') && 
                  <>
                    <Link to="login" className="login">login</Link>
                    <Link to="signup" className="signup">Sign up</Link>
                  </>
                }
                {
                  localStorage.getItem('token') && 
                  <Link onClick={onLogoutHandler} className='login'>Logout</Link>
                }
            </div>
        </header>

    </MainDiv>
  )
}

export default Navbar