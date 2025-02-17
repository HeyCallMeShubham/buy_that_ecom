import React from 'react';

import { MdKeyboardArrowDown } from "react-icons/md";

import { IoSearchSharp } from "react-icons/io5";

const AdminDashboardHeader = () => {
    return (

        <div className='main-container'>

            <header className='seller-admin-dashboard-header'>

                <div className='row1'>

                    <h2 className='logo column1'>buy_that_Ecom</h2>





                    <div className='column2'> {/*column2 start*/}

                        <div className='country'>

                            <span className='id'>id</span>

                            <span className='country-name'>india</span>


                        </div>

                        <div className='language-options'>

                            <span>English</span>
                            <span className='icon'><MdKeyboardArrowDown /></span>

                        </div>

                        <div className='search-bar'>

                            <form className=''>

                                <input type='text' className='search-input' />

                                <button className='search-btn btn'><IoSearchSharp /></button>

                            </form>

                        </div>

                        <div className='other-navigations-link'>

                            <p className='messages-link'>Messages</p>

                            <p className='help-link'>Help</p>

                            <p className='settings-link'>settings</p>

                        </div>





                    </div> {/* column2 end*/}


                </div>


                <nav>

                    <ul>

                        <li>Inventory</li>

                        <div className='nested-inventory-list-div'>

                            <ul>

                                <li>Add Products</li>
                                <li>All Products</li>
                                <li>Manage Products</li>

                            </ul>

                        </div>

                        <li>Orders</li>

                        <div className='nested-orders-list-div'>

                            <ul>

                                <li>manage returns</li>
                                <li>Order reports</li>
                                <li>Manage order</li>

                            </ul>

                        </div>


                        <li>Reports</li>


                        <div className='nested-reports-list-div'>

                            <ul>

                                <li>Payments</li>
                                <li>Total Sales</li>
                                <li>Business Reports</li>

                            </ul>

                        </div>

                    </ul>


                </nav>


            </header>

        </div>

    )

}




export default AdminDashboardHeader;



