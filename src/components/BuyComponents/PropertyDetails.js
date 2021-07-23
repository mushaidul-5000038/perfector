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
                        <h3>{title}</h3>
                        <h3>{propertyAddress}</h3>
                        <p>{description}</p>
                        <div>
                            <h3>{room}</h3>
                            <h3>{size}</h3>
                            <h3>{price} tk</h3>
                            <h3>For - {category}</h3>
                        </div>
                    </div>
                    <div className='propertyDetails__ownerSection'>
                        <h1>Owner's Info</h1>
                        <hr />
                        <h3>{name}</h3>
                        <h3>{Owneraddress}</h3>
                        <h3>{phone}</h3>
                       
                    </div>
            </div>
            
            
        </div>
    )
}

export default PropertyDetails
