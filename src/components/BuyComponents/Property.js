import { Link } from 'react-router-dom'
import '../../styles/BuyCompStyles/Property.css'

const Property = ({name,Owneraddress,phone,
                  title,propertyAddress,room,size,price,
                   category,description,
                    imageUrl}) => {

    return (
        <div className='property'>

            

            
            <img src={imageUrl} alt="" />
            <div className='property__details'>
                <h3>'{title}'</h3>
                <h3>'{category}-{price} tk'</h3>
                <Link to={ { 
                        pathname: "/property/" + title,
                        state: {
                            name:name,
                            Owneraddress: Owneraddress,
                            phone:phone,
                            title:title,
                            propertyAddress:propertyAddress,
                            room:room,
                            size:size,
                            price:price,
                            category:category,
                            imageUrl:imageUrl,
                            description:description
                        },
                    }}>
                        <button>See Details</button>
                </Link>
            </div>
            
            

            
        </div>
    )
}

export default Property
