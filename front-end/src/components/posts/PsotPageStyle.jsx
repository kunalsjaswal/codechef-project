import styled from "styled-components";

export const PostsDiv = styled.div`
    width: 70%;
    margin: auto;
    margin-top: 5%;
    color: white;
    .post{
        border: 1px solid #474747;
        padding: 2%;
        margin-bottom: 5%;
        .head{
            display: flex;
            align-items: center;
            gap: 2%;
            img{ width: 5%;}
        }
        .body{
            margin-top: 2%;
            width: 90%;
            margin-left: 7%;
            img{ 
                width: 100%;
                border-radius:20px;
            }
        }
        .footer{
            margin-top: 2%;
            width: 90%;
            margin-left: 7%;

            .icons-tray{
                display: flex;
                gap: 3%;
                .like-icon, .cmt-icon{
                    display: flex;
                    align-items: center;
                    font-size: 120%;
                }
                .like-btn{
                    cursor: pointer;
                    margin-right: 1%;
                    transition: 0.2s;
                }
                .like-btn:hover
                {
                    color: red;
                }
            }
            .caption{
                margin-top: 2%;
                margin-left: .5%;
                color: #dadada;
            }
            .comment{
                width: 85%;
                color: white;
                padding: 1%;
                font-size: 105%;
                margin-top: 2%;
                border: 1px inset #9c9c9c;
            }
            .post-btn{
                color: white;
                font-size: 105%;
                margin-left: 2%;
                border: 1px solid white;
                border-radius: 5px;
                padding:1% 2%;
                cursor: pointer;
            }
        }
    }

`

