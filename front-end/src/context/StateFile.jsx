import React, {useState} from "react"
import contextStore from "./ContextFile"
import dogImg from '../images/dog.png'
import fifaImg from '../images/fifa.png'
import trekImg from '../images/treking.png'
import tunnelImg from '../images/tunnel.png'
import worldCupImg from '../images/worldcup.png'
import hostIcon from '../images/hostImg.png'
import bartenderIcon from '../images/bartenderIcon.png'
import chefIcon from '../images/cheficon.png'
import chefinaIcon from '../images/chefinaIcon.png'
import waiterIcon from '../images/waiterIcon.png'

const StateFile = (props)=>{
    const blogs = [
        {
            username: "Chef",
            caption:"India losses World Cup 2023 Final.. ",
            icon:chefIcon,
            image: worldCupImg,
            likes:72
        },
        {
            username: "Chefina",
            caption:"Dogs do speak, but only to those who know how to listen.",
            icon:chefinaIcon,
            image: dogImg,
            likes:41

        },
        {
            username: "Waiter",
            caption:"In a significant breakthrough after 17 days, rescue officials finally able to pull out 41 workers trapped inside the Silkyara tunnel in Uttarakhand's Uttarkashi district.",
            icon:waiterIcon,
            image:tunnelImg,
            likes:64

        },
        {
            username: "Bartender",
            caption:"Finally.. the one who deserve. G.O.A.T",
            icon:bartenderIcon,
            image:fifaImg,
            likes:66

        },

        {
            username: "Host",
            caption:"The world reveals itself to those who travel on foot.",
            icon:hostIcon,
            image:trekImg,
            likes:54
        }
    ]
    const [alertInfo, setAlertInfo] = useState({
        status: false,
        color:"transparent",
        message:""
    })

    const [commentBox, setCommentBox] = useState(
        {status:false,
         id: 0
    })
    const api = "13.211.139.220"
    const [commentData, setCommentData] = useState([])
     // getting total comments over each post
    const [postCount, setPostCount] = useState({0:0,1:0,2:0,3:0,4:0})
    const fetchComments = async()=>{

        const response = await fetch(`http://${api}/apis/codechef_api/requests/fetch_comments.php`,{
            method:"GET",
            headers:{
                "Content-Type":'application/json'
            }
        })
        const json = await response.json()
        setCommentData(json.content)
    }

    // top level / root comments 
    const [topLevelComments, setTopLevelComments] = useState([])
    const filterTopLevel=()=>{
        setTopLevelComments(
            commentData.filter(val=>{return (val.post_id == commentBox.id && val.level == 0)})
        )
    }

    // nested comments
    const [levelComments, setLevelComments] = useState({1:[],2:[],3:[],4:[],5:[]})
    const filterGivenLevel=()=>{
        setLevelComments({
            1: commentData.filter(val=>{return (val.post_id == commentBox.id && val.level == 1)}),
            2: commentData.filter(val=>{return (val.post_id == commentBox.id && val.level == 2)}),
            3: commentData.filter(val=>{return (val.post_id == commentBox.id && val.level == 3)}),
            4: commentData.filter(val=>{return (val.post_id == commentBox.id && val.level == 4)}),
            5: []
        })
    }

    const [editInfo, setEditInfo] = useState({
        status:false, id: -1, comment:""
    })

    return (
        <contextStore.Provider
            value={{
                blogs,
                alertInfo, setAlertInfo,
                commentBox, setCommentBox,
                fetchComments, commentData, 
                filterTopLevel, topLevelComments,
                editInfo, setEditInfo,
                filterGivenLevel, levelComments,
                postCount, setPostCount, api
            }}
        >
        {props.children}
        </contextStore.Provider>
    )
}

export default StateFile
