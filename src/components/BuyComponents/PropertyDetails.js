import { useLocation } from "react-router-dom"
import '../../styles/BuyCompStyles/PropertyDetails.css'

const PropertyDetails = () => {
    const location = useLocation()
    const { name,Owneraddress,phone,title,
        propertyAddress,room,size,price,category,
        imageUrl,description } = location.state
        
    return (
        <div className='propertyDetails'>

            <div className='propertyDetails__container'>
                    <img src={imageUrl} alt="" />
                    <div className='propertyDetails__propertySection'>
                        <h1>House Details</h1>
                        <hr />
                        <h3>Title: {title}</h3>
                        <h3>Address: {propertyAddress}</h3>
                        <p>"{description}"</p>
                        <div className='propertySpecifics'>
                            <h3>Room no: {room}</h3>
                            <h3>Size in sqft: {size}</h3>
                            <h3>Price: {price} tk</h3>
                            <h3>Category: {category}</h3>
                        </div>
                    </div>
                    <div className='propertyDetails__ownerSection'>
                        <h1>Owner's Info</h1>
                        <hr />
                        <h3>Name: {name}</h3>
                        <p>Address: {Owneraddress}</p>
                        <h3>Telephone: {phone}</h3>
                       
                    </div>
            </div>
            
            
        </div>
    )
}

export default PropertyDetails
