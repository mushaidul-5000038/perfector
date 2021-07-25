import { Link } from 'react-router-dom'
import '../../styles/BuyCompStyles/Property.css'

const Property = ({name,Owneraddress,phone,
                  title,propertyAddress,room,size,price,
                   category,description,
                    imageUrl}) => {

    return (
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
        <div className='property'>

            

            
            <img src={imageUrl} alt="" />
            <div className='property__details'>
                <div className='partition'>
                <h3>'{title}'</h3>
                <h3>{price} tk</h3>
                </div>
                
                <h3>{category}</h3> 
            </div>
            
            

            
        </div>
        </Link>
    )
}

export default Property
