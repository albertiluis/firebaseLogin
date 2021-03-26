import styled from 'styled-components'

export const AreaHeader = styled.div`
    height: 60px;
    background-image: linear-gradient(to right, #155218, #295b7d);
    color: #000;

    .container {
        padding: 5px 20px;
        display: flex;
        align-items: center;
    }

    .logo {
        flex: 1;
        display: flex;
        align-items: center;
        a {
            text-decoration: none;
            color: #fff;
            margin-right: 5px;
        }
        a:hover {
            color: #b4b6b8;
        }
    }
    
    nav {

        display: flex;

        ul {
            display: flex;
        }
        li {
            list-style: none;
            margin-left: 20px;
            a {
                text-decoration: none;
                color: #fff;
            }
            a:hover {
                color: #b4b6b8;
            }
        }

        .avatar {
            display: flex;
            align-items: center;

            img {
                width: 35px;
                border-radius: 20px;
                margin-left: 20px;
                margin-right: 10px;
                cursor: pointer;
            }

            label {
                font-size: 14px;
                cursor: pointer;
                color: #ccc;
            }

            @media screen and (max-width: 650px) {
                label {
                    display: none;
                }
            }
        }
    }
`;