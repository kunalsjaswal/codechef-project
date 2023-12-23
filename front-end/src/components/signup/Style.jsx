import styled from "styled-components";

export const LoginDiv = styled.div`
    color: white;
    text-align: center;

    form{
        border: 1px dashed #f7de52;
        width: 50%;
        padding: 2%;
        margin: auto;
        margin-top:2%;
        border-radius: 5px;

        table{
            width: 80%;
            margin: auto;
            th{
                font-size: 120%;
                padding: 2%;
                text-align: left;
                input{
                    font-size: 120%;
                    width: 80%;
                    padding: 2%;
                    color: #f7de52;
                    border: 1px dashed #f7de52;
                }
                input:focus{
                    background-color: transparent !important;
                }
                button{
                    width: 80%;
                    padding:5% 1%;
                    color: black;
                    font-weight: bold;
                    background-color: #f7de52;
                    border: 0;
                    border-radius: 5px;
                    cursor: pointer;

                }
            }
        }
    }

`

export const SignupDiv = styled.div`
color: white;
    text-align: center;
    form{
        border: 1px dashed #f7de52;
        width: 50%;
        padding: 2%;
        margin: auto;
        margin-top:2%;
        border-radius: 5px;
        table{
            width: 80%;
            margin: auto;
            th{
                font-size: 120%;
                padding: 2%;
                text-align: left;
                input{
                    font-size: 120%;
                    width: 80%;
                    padding: 2%;
                    color: #f7de52;
                    border: 1px dashed #f7de52;
                }
                input:focus{
                    background-color: transparent !important;
                }
              
                button{
                    width: 80%;
                    padding:5% 1%;
                    color: black;
                    font-weight: bold;
                    background-color: #f7de52;
                    border-radius: 5px;
                    cursor: pointer;
                    border: none;
                }

                
            }
        }
    }

`