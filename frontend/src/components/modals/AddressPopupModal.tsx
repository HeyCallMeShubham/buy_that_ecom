
import { RxCross1 } from "react-icons/rx";
import "../../styles/modals/addressPopupModal.css"
import { useEffect } from "react";

const AddressPopupModal = ({ setIsAddressModalOpen, isAddressModalOpen }: any) => {

   
 

    return (

        <div className='address-popup-modal-main-container'>

            <div className="address-popup-modal">



                <div className="headingAndCross-container">

                    <h3 className="">Choose your location</h3>

                    <span className="icon crossicon onhovercursorpointer">
                        <RxCross1 onClick={() => setIsAddressModalOpen((prev: boolean) => !prev)} />
                    </span>

                </div>



                <div className="customer-address-related-details-container">

                    <p className="text-one">Select a delivery location to see product availability and delivery options </p>

                    <div className="address-container">

                        <p>Shubham 2nd  floor house address 319 khuda ali sher ambedkar ground Chandigarh CHANDIARH 160001</p>

                    </div>

                </div>



                <form className="add-pincode-input-form-container">

                    <label htmlFor="pincodeinput">

                        <input type="tel" />

                        <button>Apply</button>

                    </label>



                </form>




            </div>




        </div>


    )
}



export default AddressPopupModal


