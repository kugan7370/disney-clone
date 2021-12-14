import React from 'react'
import styled from 'styled-components'

function Login() {
    return (
        <Container>
            <Background>
                <img src="./images/login-background.jpg"></img>
            </Background>

            <Cta>
                <LogoOne>
                    <img src="./images/cta-logo-one.svg"></img>
                </LogoOne>

                <GetButton> GET ALL THERE </GetButton>

                <Description>Meaningful text, or an empty string for decorative images either with meaningful text, or an empty string for decorative images</Description>
                
                <LogoTwo>
                    <img src="./images/cta-logo-two.png"></img>
                </LogoTwo>
            </Cta>
        </Container>
    )
}

export default Login

const Container = styled.div`
min-height: calc(100vh - 70px);
padding:0 calc(3.5vw + 5px);
position:relative;
display:flex;
justify-content:center;



`
const Background = styled.div`
position:fixed;
top:0;
bottom:0;
right:0;
left:0;
z-index:-1;

img{
    height:100%;
    width:100%;
    object-fit:cover;
}



`
const Cta = styled.div`
display:flex;
max-width:650px;
padding:80px 40px;
flex-direction:column;
width:100%;

`
const LogoOne = styled.div`
width:100%;

`
const GetButton = styled.div`
width:100%;
background-color: #0063e5;
font-weight:bold;
padding:10px 0;
color:#f9f9f9;
border-radius:4px;
text-align:center;
font-size:16px;
letter-spacing:1.5px;
transition: all 250ms;
margin-top:5px;
cursor:pointer;

&:hover{
    background:#0483ee;

}

`
const Description = styled.p`
width:100%;
text-align:center;
margin-top:14px;
font-size:12px;
letter-spacing:1.5px;
line-height:1.5;

`
const LogoTwo = styled.div`
margin-top:10px;
width:100%;

img{
    
    width:100%;
}

`