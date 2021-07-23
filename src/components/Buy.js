import { useEffect, useState } from 'react'
import '../styles/Buy.css'

import {db} from '../fbConfig'
import Property from './BuyComponents/Property'

const Buy = () => {
    
    const [posts,setPosts]=useState([])
    
    useEffect(()=>{

        db.collection("listings")
        .onSnapshot((snapshot) =>
          setPosts(snapshot.docs.map((doc) => ({ id: doc.id, post: doc.data() })))
        );    
    },[])

    return (
        <div className='buy'>
            <div className='buy__container'>
                 {posts.map((post)=><Property 
                 name={post.post.name}
                 Owneraddress= {post.post.Owneraddress}
                 phone={post.post.phone}
                 title={post.post.title}
                 propertyAddress={post.post.propertyAddress}
                 room={post.post.room}
                 size={post.post.size}
                 price={post.post.price}
                 category={post.post.category}
                 description={post.post.description}
                 imageUrl={post.post.imageUrl} 
                 />)} 
                
                    

            </div> 
            <div></div>
           
        </div>
    )
}

export default Buy
