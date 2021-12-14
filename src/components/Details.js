import React from 'react'
import styled from 'styled-components'
import {useParams} from 'react-router-dom'
import {useEffect,useState} from 'react'
import db from '../firebase';
import {getDoc,doc} from 'firebase/firestore';

function Details() {
    const {id} =useParams();
    const [movie, setmovie] = useState();
    // console.log(id);

useEffect(async()=>{
    
const docRef = doc(db, "movies",id);
const docSnap =  await getDoc(docRef);


    if (docSnap.exists()) {
    //   console.log("Document data:", docSnap.data());
    setmovie(docSnap.data());
    } else {
    // doc.data() will be undefined in this case
    console.log("No such document!");
    }

 },[id]);
 
 console.log('movie',movie);




    return (
        <Container>

        { movie && (<>
            <Backgroud>
                    <img src={movie.backgroundImg}></img>
            </Backgroud>

            <TitleLogo>
                <img src={movie.titleImg}></img>
            </TitleLogo>

            <Controlls>
                <PlayButton>
                    <img src="../images/play-icon-black.png"></img>
                    <span>play</span>     
                </PlayButton>

                <TrailorButton>
                    <img src="../images/play-icon-white.png"></img>
                    <span>trailer</span>
                </TrailorButton>

                <AddButton>
                    <span>+</span>
                </AddButton>

                <GroupButton>
                    <img src="../images/group-icon.png"></img>
                </GroupButton>
            </Controlls>

            <SubTitle>
                {movie.subTitle}
            </SubTitle>

            <Description>
               {movie.description}
            </Description>
            </>
        
        )}
            

            
           
        </Container>
    )
}

export default Details;

const Container = styled.div`
min-height: calc(100vh - 70px);
padding:0 calc(3.5vw + 5px);
position:relative;


`

const Backgroud = styled.div`
position: fixed;
top:0;
bottom:0;
right:0;
left:0;
 z-index:-1;
opacity:0.8;
    
    img {

        height:100vh;
        width:100vw;
        object-fit:cover;

       
    }

`
const TitleLogo = styled.div`
    height:38vh;
    width:35vw;
    min-width:200px;
    padding:20px 0;

    @media (max-width){
        height:30vh;
        padding:0;
    }

    img{
        width:100%;
    }
`
const Controlls = styled.div`
display:flex;
margin-top:60px;
align-items:center;
padding:24px 0px;

@media (max-width:768px){
    padding:0;
    margin-top:20px;
}


`
const PlayButton = styled.button`
display:flex;
align-items:center;
padding:0 20px;
margin-right:22px;

font-size:15px;
border-radius:4px;
border:none;
text-transform:uppercase;
letter-spacing: 1.8px;
cursor:pointer;

&:hover{
    background:rgb(198,198,198);
}
`
const TrailorButton = styled(PlayButton)`
background:rgba(0,0,0,0.3);
border: 1px solid rgb(249,249,249);
color:rgb(249,249,249);

`
const AddButton = styled.button`
display:flex;
justify-content:center;
align-items:center;
margin-right:16px;
height:40px;
width:40px;
border-radius:50%;
background:rgba(0,0,0,0.6);

border:2px solid white;

span{
    font-size:30px;
    color:white;
}

`

const GroupButton = styled(AddButton)`
background:rgb(0,0,0);

`
const SubTitle = styled.p`
color:rgb(249,249,249);
font-size:15px;
min-heigth:20px;
margin-top:20px;

`

const Description = styled.p`
max-width:1000px;
line-height:1.3;
font-size:16px;
margin-top:16px;
letter-spacing:1.3px;

`