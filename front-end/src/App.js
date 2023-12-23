import { Route, Routes } from "react-router-dom";
import Navbar from "./components/home/Navbar";
import './style.css'
import PostPage from "./components/posts/PostPage";
import LoginPage from "./components/signup/LoginPage";
import SignupPage from "./components/signup/SignupPage";
import { useContext, useEffect } from "react";
import contextStore from "./context/ContextFile";
import ExperimentPage from "./components/others/ExperimentPage";
process.env.TZ = 'America/New_York';

function App() {

    
  const {fetchComments} = useContext(contextStore)
  useEffect(()=>{
    fetchComments()
    
  },[])
  // return statement
  return (
    <>
      <Navbar/>
      {/* <ExperimentPage id={1} name ="top-level"/> */}

     
      <Routes>
          <Route index element={<PostPage/>}/>
          <Route path = "login" element={<LoginPage/>}/>
          <Route path = "signup" element={<SignupPage/>}/>
      </Routes>
    </>
  );
}

export default App;
