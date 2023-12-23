import React, { useContext, useState } from 'react'
import { EditDiv } from './Style'
import CloseIcon from '@mui/icons-material/Close';
import contextStore from '../../context/ContextFile';

const EditComment = () => {

    const {editInfo, setEditInfo, fetchComments, api} = useContext(contextStore)
    const [text, setText] = useState(editInfo.comment)
    const onClossClickHandler=()=>{
        setEditInfo({
            ...editInfo,
            status:false
        })
    }

    const onEditCLickHandler =async()=>{
        const response = await fetch(`http://${api}/apis/codechef_api/requests/edit_comment.php`,{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({id: editInfo.id, comment: text})
        })
        fetchComments()
        setEditInfo({
            ...editInfo,
            status:false
        })
    } 
  return (
    <EditDiv>
        <header>
            <h3>Edit Your Comment</h3>
            <CloseIcon className='close-icon' onClick = {onClossClickHandler}/>
        </header>

        <input type="text" value={text} onChange={ev=> setText(ev.target.value)}/>
        <button onClick={onEditCLickHandler}>EDIT</button>
    </EditDiv>
  )
}

export default EditComment