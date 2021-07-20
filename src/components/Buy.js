import { useEffect, useState } from 'react'
import { Carousel } from 'react-responsive-carousel'
import styles from "react-responsive-carousel/lib/styles/carousel.min.css";
import {db} from '../fbConfig'

const Buy = () => {

    const [posts,setPosts]=useState([])
    
    useEffect(()=>{

        db.collection("listings")
        .onSnapshot((snapshot) =>
          setPosts(snapshot.docs.map((doc) => ({ id: doc.id, post: doc.data() })))
        );    
    },[])

    return (
        <div>
            <div>
                {posts.map((post)=>console.log(post.post.caption))}
            </div> 
           
        </div>
    )
}

export default Buy
