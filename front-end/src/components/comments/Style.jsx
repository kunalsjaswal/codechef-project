import styled from "styled-components";

export const ShowDiv = styled.div`
    position: fixed;
    width:  70%;
    padding: 2%;
    border: 1px solid gray;
    border-radius: 5px;
    color: white;
    margin-top: -10%;
    height: 100%;
    header{
        display: grid;
        grid-template-columns: 96% 4%;
        align-items: baseline;
        border-bottom: 1px solid gray;
        padding-bottom: 1%;
        .close-icon{
            border: 1px solid white;
            border-radius: 3px;
            cursor: pointer;
        }
    }
    h4.comment-info{
        display: flex;
        gap: 1%;
        margin-top: 1%;
        color: #afadad;
        font-weight: normal;
        span{
            font-weight: bold;
            color: white;
        }
    }
    
    .comment-section{
        margin-top: 2%;
        height: 85%;
        overflow: auto;
        .comment-box{
            display: grid;
            grid-template-columns: 5% 95%;
            margin-bottom: 4%;
            .head{
                span{
                    font-size: 70%;
                    color:gray;
                }
            }
            .body{
                margin-top: 5px;
            }

            .footer{
                margin-top: 1%;
                display: flex;
                gap: 0.5%;
                align-items: center;

                .icon{
                    cursor: pointer;
                }
                button{
                    border: 0;
                    color: white;
                    cursor: pointer;
                    margin-left: 1%;
                }
                .dlt-btn{
                    margin-left: 2%;
                    cursor: pointer;
                }
            }
            .reply-form{
                margin-top: 5px;
                display: none;
                input{
                    width: 85%;
                    padding: 1%;
                    color: white;
                    border: 1px inset white;
                    border-radius: 4px;
                }
                button{
                    color: white;
                    margin-left: 2%;
                    border: 1px solid white;
                    border-radius: 3px;
                    padding: 1% 2%;
                    cursor: pointer;
                }
            }

            .open-replies{
                display: flex;
                align-items: center;
                width: fit-content;
                cursor: pointer;
            }
        }
        .edit-div{
            margin-top: 1%;
            input{
                padding: 1%;
                border: 1px inset white;
                color:white;
                width: 50%;
                border-radius: 3px;
            }
            button{
                color: white;
                border: 1px solid white;
                padding: 1% 2%;
                border-radius: 3px;
                margin-left: 2%;
                cursor: pointer;
            }
        }
   
    }

    ::-webkit-scrollbar {
        width: 10px;
    }
    /* Track */
    ::-webkit-scrollbar-track {
        box-shadow: inset 0 0 5px grey; 
        border-radius: 10px;
    }
    
    /* Handle */
    ::-webkit-scrollbar-thumb {
        background: #807e7e; 
        border-radius: 10px;
    }
`

export const EditDiv = styled.div`
    border: 2px solid white;
    margin-left: 8%;
    padding: 1% 1% 2% 1%;
    border-radius: 5px;
    h3{
        padding: 1%;
    }
    input{
        margin-top: 5%;
        border: 1px inset white;
        padding: 1%;
        color: white;
        width: 80%;
        font-size: 120%;
        border-radius: 3px;
    }
    button{
        border: 1px solid white;
        padding: 1% 2%;
        font-size: 110%;
        color: white;
        border-radius: 5px;
        margin-left: 2%;
        cursor: pointer;
    }
`