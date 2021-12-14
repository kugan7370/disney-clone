import { onSnapshot,collection } from '@firebase/firestore';
import React,{useEffect,useSelector} from 'react'
import styled from 'styled-components';
//db declaration  is new version v9 of firebase
import db from '../firebase';
import Imgslider from './Imgslider';
import Views from './Views';
import { useDispatch } from 'react-redux';
import Recommend from './Recommend';
import Trending from './Trending';
import Originals from './Originals';
import NewDisney from './NewDisney';
import { setMovie } from '../features/Movie/movieSlicer';
import { selectUserName } from '../features/User/userSlice';




function Home() {
  
    let newDisney = [];
    let originals = [];
    let recommends = [];
    let trending = [];

    const dispatch = useDispatch();

    useEffect(() => {
        onSnapshot(collection(db, "movies"), (snapshot) => {

            let temp_movies = snapshot.docs.map(doc => {

                switch (doc.data().type) {
                    case "new":
                        newDisney = [...newDisney, { id: doc.id, ...doc.data() }];
                        break;
                    
                        case "original":
                            originals = [...originals, { id: doc.id, ...doc.data() }];
                        break;
                    
                        case "recommend":
                            recommends = [...recommends, { id: doc.id, ...doc.data() }];
                        break;
                    
                        case "trending":
                            trending = [...trending, { id: doc.id, ...doc.data() }];
                            break;
                    
                
                    default:
                        break;
                }
               
                
            })
            
            dispatch(setMovie({
                newDisney,
                originals,
                recommends,
                trending,
            }));

           
            
        });
       
        
    }, []);


    return (
        <Container>
            <Imgslider></Imgslider>
            <Views />
            <NewDisney/>
            <Recommend />
            <Trending/>
            <Originals />
            
            

            
            
           
        </Container>
    )
}

export default Home

const Container = styled.main`
 min-height: calc(100vh - 70px);  /*default full height(screen height)*/
    padding:0 calc(3.5vw + 5px);
    position:relative;
    overflow-x:hidden;

    &:before{
        background:url("/images/home-background.png") center center / cover
        no-repeat fixed;
        content:"";
        position:absolute;
        top:0;
        left:0;
        right:0;
        bottom:0;
        z-index:-1;
    }

`


