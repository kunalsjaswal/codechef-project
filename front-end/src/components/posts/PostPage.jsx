import React, { useState, useContext, useEffect } from 'react'
import {PostsDiv} from './PsotPageStyle'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import MessageIcon from '@mui/icons-material/Message';
import contextStore from '../../context/ContextFile';
import ShowComments from '../comments/ShowComments';
import { useNavigate } from 'react-router-dom';
import moment from 'moment';



const PostPage = () => {
  
  // hooks and all
  const {blogs, fetchComments,commentData,api, commentBox, setCommentBox,setAlertInfo, postCount, setPostCount} = useContext(contextStore)
  useEffect(()=>{
    setPostCount({0:0,1:0,2:0,3:0,4:0})
    commentData.map((val)=>{
      setPostCount(prev=>({...prev, [val.post_id]: prev[val.post_id]+1}))
    })
    // console.log(postCount)
  },[commentData])
  
   // states
  const [comment, setComment] = useState("")

  // handlers
  const onPostHandler=async(id)=>{
      if(comment.length == 0) return
     
      const response = await fetch(`http://${api}/apis/codechef_api/requests/add_comment.php`,{
          method:"POST",
          headers:{
              "Content-Type":"application/json"
          },
          body: JSON.stringify({
            post_id:id,
            user_id: localStorage.getItem('token'),
            user_name: localStorage.getItem('username'),
            comment:comment[id],
            level:0,
            ref_id:-1,
        })
      })
      const json = await response.json()
      setAlertInfo({
          status: true,
          color: json['status']?"green":"red",
          message: json['message']
      })
      if(json['status']){
        fetchComments()
        document.getElementById(`comment-input-${id}`).value = ""
        setComment("")
      }
      
  }
  const showCommentHandler=(_id)=>{
      setCommentBox({status: true, id: _id})
  }
  const onChangeHandler = (ev)=>{
      let name = ev.target.name 
      setComment({[name]:ev.target.value})
  }
  // return statement
  return (
    <PostsDiv>
        {
          commentBox.status && 
          <ShowComments/>
        }
      {blogs.map((val,key)=>(
        <div className="post" key={key}>
          <div className="head">
              <img src={val.icon} alt="profile icon" />
              <h2>{val.username}</h2>
          </div>

          <div className="body">
            <img src={val.image} alt="blog" />
          </div>

          <div className="footer">
            <div className="icons-tray">
              <div className="like-icon">
                <FavoriteBorderIcon fontSize='large' className='like-btn'/> 
                  {val.likes}
              </div>
              <div className="cmt-icon">
                <MessageIcon onClick={()=>showCommentHandler(key)} style={{cursor:"pointer"}} fontSize='large'/>
                {postCount[key]}
              </div>
            </div>

            <div className='caption'>{val.caption}</div>
             
             {  
                localStorage.getItem('token')  && 
                <>
                  <input type="text" id={`comment-input-${key}`} name = {key} required onChange={onChangeHandler} className="comment" placeholder='add your comment..'/> 
                  <button className='post-btn' onClick = {()=>onPostHandler(key)}>POST</button>
                </>
             
             }
          </div>
        </div>
      ))}
    </PostsDiv>
  )
}

export default PostPage