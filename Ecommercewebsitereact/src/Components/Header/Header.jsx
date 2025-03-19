import React from 'react'
import '../Header/Header.css'
import logo from '../../assets/images/logo.svg'
function Header() {
    return (
        <>
       <header>
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-sm-2'>
                    <img src={logo} alt="" />
                </div>
                <div className='col-sm-5'>
                    <div className='headerSearch d-flex align-item-center'>
                        <div className='selecrDrop cursor'>All Categories <span className='selectpipe'>|</span></div>
                        <div className='Search cursor'> <input type="text" /></div>
                    </div>
                </div>
            </div>
        </div>
       </header>
        </>
    )
}

export default Header
 