import styled from "styled-components";

const MainDiv = styled.div`
    header{
        background: transparent;
        padding: .5%;
        display: grid;
        grid-template-columns: 30% 40% 30%;
        img{
            width: 12%;
            margin-left: 2%;
        }
        .alert{
            border: 1px solid transparent;
            text-align: center;
            padding: 2%;
            font-size: 120%;
        }
        .btns{
            background: transparent;
            padding: 0% 2%;
            display: flex;
            flex-direction:row-reverse;

            .login, .signup{
                text-decoration:none;
                cursor: pointer;
                color: #f7de52;
                height: 70%;
                padding: 2% 5%;
                margin-right: 2%;
                border-radius: 5px;
                font-weight: bold;
                border: none;
                transition: 0.3s;
                border: 2px solid #f7de52;
            }
            a:hover{
                font-size: 130%;
            }

        }
    }
`

export default MainDiv