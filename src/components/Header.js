import React,{useEffect} from 'react';
import styled from 'styled-components';
import { getAuth, signInWithPopup, GoogleAuthProvider,signOut } from "firebase/auth";
import { Link,useHistory } from 'react-router-dom'
import { selectUserEmail, selectUserName, selectUserPhoto,setSignIn,setSignOut } from '../features/User/userSlice';
import { useSelector,useDispatch } from 'react-redux';





function Header() {
    const dispatch = useDispatch();
    const history = useHistory();
    const provider = new GoogleAuthProvider();
    
    const userName = useSelector(selectUserName);
    const userPhoto = useSelector(selectUserPhoto);

    // if restart no need to re login
    useEffect(() => {
        const auth = getAuth();
        auth.onAuthStateChanged(async(user) => {
            if (user) {
                dispatch(setSignIn({
                   
                    name: user.displayName,
                    email: user.email,
                    photo: user.photoURL,
                }))
                history.push('/');
            }
        })

    }, []);


    const signin = () => {
       
        const auth = getAuth();

        signInWithPopup(auth, provider)
            .then((result) => {
                let user = result.user;
                dispatch(setSignIn({
                   
                    name: user.displayName,
                    email: user.email,
                    photo: user.photoURL,
                }))
                history.push('/login');
                // redirect page
               
              
            })
        
    }
    
    const Signout = () => {
        const auth = getAuth();
        signOut(auth).then(() => {
            dispatch(setSignOut());
        })
        history.push('/');
    }
    

    return (
        
        <Nav>
            <Logo src='/images/logo.svg'></Logo>
            {!userName ? (
                <LoginContainer>
                    <Login onClick={signin}>LOGIN</Login>
                </LoginContainer>
                
            ) :
                <>
                    <NavMenu>
                        <a >
                            <img src='./images/home-icon.svg' alt=''></img>
                            <span>HOME</span>
                        </a>
                        <a >
                            <img src='./images/search-icon.svg'></img>
                            <span>SEARCH</span>
                        </a>
                        <a >
                            <img src='./images/watchlist-icon.svg'></img>
                            <span>WATCHLIST</span>
                        </a>
                        <a >
                            <img src='./images/original-icon.svg'></img>
                            <span>ORIGINAL</span>
                        </a>
                        <a >
                            <img src='./images/movie-icon.svg'></img>
                            <span>MOVIES</span>
                        </a>
                        <a >
                            <img src='./images/series-icon.svg'></img>
                            <span>SERIES</span>
                        </a>
                
                    </NavMenu>


                    <UserImg onClick={Signout} src={userPhoto} />
                    
                    
                </>
            
            }
            
            
              
       

            
            
               
            



            </Nav>
            
            
    
    )
}

export default Header;

const Nav = styled.nav`
    overflow-x:hidden;
    height:70px;
    background:#090b13;
    display:flex;
    align-items:center;
    padding:0 20px;
    

`
const Logo = styled.img`
width:80px;

`
const NavMenu = styled.div`
display:flex;
   flex:1;  /*this navmenu will take double space */
   margin-left:20px;


a{
    display:flex;
    align-items:center;
    padding:0 12px;
    cursor:pointer;
    align-items:center;

    img{
        height:20px;
        
    }
    span{
        font-size:13px;
        letter-spacing:1.42px;
        position:relative;

        &:after{
             content:"";
            height:2px;
            background:white;
            position:absolute;
            bottom:-6px;
             right:0;
             left:0;
             opacity:0;
             transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;   /* animation*/
             transform:scaleX(0); /* if it is 1 border full width, 0.5 half with */
        }
    }
    &:hover{
        span:after{
        opacity:1;
        transform:scaleX(1);
        }
    }

}

`
const UserImg = styled.img`
height:48px;
width:48px;
border-radius:50%;
cursor:pointer;
`
const Login = styled.div`

border:1px solid #f9f9f9;
padding:8px 16px;
border-radius:4px;
letter-spacing:1.5px;
transition:all 250ms;
background-color:rgba(0,0,0,0.6);
cursor:pointer;

&:hover{
    background-color:#f9f9f9;
    color:#000;
    border-color:transparent;
}


`
const LoginContainer = styled.div`
flex:1;
display:flex;
justify-content:flex-end;

`
