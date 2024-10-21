import "../styles/components/headerAndNavbar.css";

import { In } from "react-flags-select";

import { IoSearchOutline } from "react-icons/io5";

import { IoMdArrowDropdown } from "react-icons/io";

import { MdOutlineShoppingCart } from "react-icons/md";

import Navbar from "./Navbar";


import { IoLocationOutline } from "react-icons/io5";
import AddressPopupModal from "./modals/AddressPopupModal";

const Header = () => {


  window.addEventListener("scroll", () => {

    const header: Element | null = document.querySelector(".header-element")

    header?.classList.toggle("stickywhenscroll", window.scrollY > 0)

  });





  return (

    <div className="header-main-container">



      <header className='header-element'>

        <span className='logo onhovercursorpointer borderwhenhovered'>

          Buy_That_Ecom

        </span>






        <div className='option onhovercursorpointer borderwhenhovered address-container'> {/*address-container start*/}


          <span className="icon">

            <IoLocationOutline />

          </span>



          <div className="address-info">

            <span className='deliverToUserName firstletterofTocapitalize' >deliver to {"shubham"}</span>

            <span className='deliverToCityAndPincode firstletterofTocapitalize' >{"Chandigarh"}  {"160044"}</span>

          </div>



        </div>{/*address-container end*/}








        <form className='searchInputForm'>

          <input type='text' className='search-input removeborder' placeholder='search product phone book' />

          <button type='submit' className='search-btn onhovercursorpointer removeborder borderwhenhovered'><span className='icon icontosize'>

            <IoSearchOutline />

          </span>

          </button>

        </form>



        <div className="option onhovercursorpointer borderwhenhovered languagecontainer "> {/*language-container-start*/}

          <div className="selected-language-container">

            <span className="icon">
              <In />
            </span>

            <p>EN</p>

            <span className="icon">
              <IoMdArrowDropdown />
            </span>

          </div>




          <div className="international-customer-preferences-container displaywhenhovered">

            <form method="" className="international-customer-preferences-form">

              <div className="most-preferred-language-container label-container">{/*most preferred language container end*/}

                <label htmlFor="language" className="a-label">

                  <input type="radio" id="language" />

                  <span className="language-name-in-regional">

                    {"ENGLISH"}
                    {" - "}
                    {"EN"}

                  </span>

                </label>

              </div>{/*most preferred language container end*/}





              <div className="other-languages-list-container label-container"> {/*other-languages-container*/}

                <label htmlFor="language" className="a-label">

                  <input type="radio" id="language" />

                  <span className="language-name-in-regional">

                    {"हिन्दी"}
                    {"-"}
                    {"HI"}

                  </span>

                </label>

              </div> {/*other-languages-container*/}




              <div className="other-languages-list-container label-container"> {/*other-languages-container*/}

                <label htmlFor="language" className="a-label">

                  <input type="radio" id="language" />

                  <span className="language-name-in-regional">

                    {"हिन्दी"}
                    {"-"}
                    {"HI"}

                  </span>

                </label>

              </div> {/*other-languages-container*/}





              <div className="other-languages-list-container label-container"> {/*other-languages-container*/}

                <label htmlFor="language" className="a-label">

                  <input type="radio" id="language" />

                  <span className="language-name-in-regional">

                    {"हिन्दी"}
                    {"-"}
                    {"HI"}

                  </span>

                </label>

              </div> {/*other-languages-container*/}





              <div className="other-languages-list-container label-container"> {/*other-languages-container*/}

                <label htmlFor="language" className="a-label">

                  <input type="radio" id="language" />

                  <span className="language-name-in-regional">

                    {"हिन्दी"}
                    {"-"}
                    {"HI"}

                  </span>

                </label>

              </div> {/*other-languages-container*/}





              <div className="other-languages-list-container label-container"> {/*other-languages-container*/}

                <label htmlFor="language" className="a-label">

                  <input type="radio" id="language" />

                  <span className="language-name-in-regional">

                    {"हिन्दी"}
                    {"-"}
                    {"HI"}

                  </span>

                </label>

              </div> {/*other-languages-container*/}





              <div className="other-languages-list-container label-container"> {/*other-languages-container*/}

                <label htmlFor="language" className="a-label">

                  <input type="radio" id="language" />

                  <span className="language-name-in-regional">

                    {"हिन्दी"}
                    {"-"}
                    {"HI"}

                  </span>

                </label>

              </div> {/*other-languages-container*/}





            </form>

          </div>



        </div> {/*language-container-end*/}











        <div className='option onhovercursorpointer borderwhenhovered useraccount-container'> {/*useraccounnt-container start*/}

          <span className='accountofname onhovercursorpointer ' >Hello, <span className='firstletterofTocapitalize'>gautam</span></span>

          <br></br>

          <span className='nestedlist onhovercursorpointer '>Account & List <span className='icon dropdownarrow'><IoMdArrowDropdown /></span>

          </span>





          <div className="account-related-options-container displayonhover">

            <h3 className="firstletterofTocapitalize">your account</h3>

            <ul>

              <li className="firstletterofTocapitalize">Hello</li>
              <li className="firstletterofTocapitalize">switch account</li>
              <li className="firstletterofTocapitalize">switch account</li>
              <li className="firstletterofTocapitalize">switch account</li>
              <li className="firstletterofTocapitalize">switch account</li>
              <li className="firstletterofTocapitalize">switch account</li>
              <li className="firstletterofTocapitalize">switch account</li>


            </ul>

          </div>

        </div> {/*useraccounnt-container end*/}





        <div className='option onhovercursorpointer borderwhenhovered '>

          <span className='returns onhovercursorpointer'>Returns</span>
          <br></br>
          <span className='Orders onhovercursorpointer'>& Orders</span>

        </div>

        <span className='cartIcon onhovercursorpointer icon icontosize borderwhenhovered'><MdOutlineShoppingCart /></span>

      </header>

      <Navbar />

{true ? <AddressPopupModal /> : ""}






    </div>
  )
}

export default Header