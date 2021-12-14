import React from 'react';
import styled from 'styled-components';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function Imgslider() {
    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        
    }
    

    return (
        // settings : take all objects;
        <Carousel {...settings} >
            <Wrap>
                <img src="./images/slider-scale.jpg" alt="sslider"/>
            </Wrap>
            <Wrap>
                <img src="./images/slider-scales.jpg" alt="slider"/>
            </Wrap>
            
            <Wrap>
                <img src="./images/slider-badag.jpg" alt="badag"/>
            </Wrap>
            <Wrap>
                <img src="./images/slider-badging.jpg" alt="badging"/>
            </Wrap>
           
        </Carousel>
    )
}

export default Imgslider

const Carousel = styled(Slider)`
margin-top:20px;

ul li button{

    &:before{
        font-size:10px;
        color:rgb(150,158,171);
    }

}
li.slick-active button:before{
    color:white;
}
// other slides some parts will be visibled in 2 sides
.slick-list{
     overflow:visible; 
}

button{
    z-index: 1;
}


`
const Wrap = styled.div`
cursor:pointer;



img{
    border:4px solid transparent;
    height:100%;
    width:100%;
    border-radius:4px;
    box-shadow:  rgba(0 0 0 / 69%) 0px  26px 30px -10px,
    rgba(0 0 0 /73%) 0px  16px 10px -10px;
    transition-duration:300ms;

    // hover transition

    &:hover{
        border:4px solid rgba(249,249,249,0.8);
    }
}

`
