import '../../styles/HomeCompStyles/Contact.css'


const Contact = () => {
    return ( <>
        <div className='contact'>
            <h1>Contact us</h1>

            <div className="contact__form">
			
				<div className="contact__input wide">
					
					<label>Name</label> 
                    <input type="text" required />

				</div>
		
			
				<div className="contact__input email">
                    
                    <label>Email</label> 
					<input type="text" required />
					
				</div>
		
				<div className="contact__input">
					
                    <label>Phone Number</label> 
                    <input type="text" required />
					
				</div>
		
		
				<div className="contact__input wide">

                    <label>Message</label>
					<textarea required></textarea>
					
				</div>
		
			
				<div className="contact__submitBtn">
                    <button>Send</button>
                </div>
			
	        </div>
            
                
        </div>
       
        </>
    )
}

export default Contact
