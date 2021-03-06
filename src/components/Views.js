import React from 'react'
import styled from 'styled-components'

function Views(props) {
    return (
        <div>
            <Container>
                <Wrap>
                    <img src="./images/viewers-disney.png"/>
                    <video loop={true} autoPlay={true} muted={true}>
                        <source src="./videos/1564674844-disney.mp4" type='video/mp4'/>
                    </video>
                </Wrap>

                <Wrap>
                    <img src="./images/viewers-pixar.png"></img>
                    <video autoPlay={true} muted={true}  loop={true} >
                        <source src="./videos/1564676714-pixar.mp4" type='video/mp4'/>
                    </video>
                </Wrap>
                <Wrap>
                    <img src="./images/viewers-marvel.png"></img>
                    <video autoPlay={true} muted={true}  loop={true} >
                        <source src="./videos/1564676115-marvel.mp4" type='video/mp4'/>
                    </video>
                </Wrap>
                <Wrap>
                    <img src="./images/viewers-starwars.png"></img>
                    <video autoPlay={true} muted={true}  loop={true} >
                        <source src="./videos/1608229455-star-wars.mp4" type='video/mp4'/>
                    </video>
                </Wrap>
                <Wrap>
                    <img src="./images/viewers-national.png"></img>
                    <video autoPlay={true} muted={true}  loop={true} >
                        <source src="./videos/1564676296-national-geographic.mp4" type='video/mp4'/>
                    </video>
                </Wrap>
            </Container>
        </div>
    )
}

export default Views

const Container = styled.div`
    margin-top:30px;
    padding: 30px 0px 26px;
    display:grid;
    grid-template-columns: repeat(5, minmax(0,1fr));
    grid-column-gap:25px;

    @media (max-width:768px){
        grid-template-columns: repeat(1, minmax(0,1fr));
        grid-gap:25px;
    }

`
const Wrap = styled.div`
    position: relative;
    border-radius:10px;
    border: 3px solid rgba(249,249,249,0.1);
    box-shadow:rgb(0 0 0 / 69%) 0px 26px 30px -10px,rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
    cursor:pointer;

        img{
        width:100%;
        height:100%;
        object-fit:cover;
        }
        
        video{
            object-fit:cover;
            height:100%;
            width:100%;
            position:absolute;
            top:0;
            right:0;
            opacity:0;
        }
        &:hover{
            transform:scale(1.05);
            border-color:rgba(249, 249, 249, 0.8);
            box-shadow:rgb(0 0 0 / 80%) 0px 40px 58px -16px,rgb(0 0 0 / 72%) 0px 30px 22px -10px;
        
            video{

                opacity: 1;
                z-index: -1;
            }
        
        }



             
             
        


`
