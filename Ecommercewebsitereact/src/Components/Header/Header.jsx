import React, { useEffect } from 'react'
import '../Header/Header.css'
import logo from '../../assets/images/logo.svg'
import SearchIcon from '@mui/icons-material/Search'
import Select from '../SelectDrop/Select'
import { useState } from 'react' 
import axios from 'axios'
import { LocationOnOutlined} from '@mui/icons-material'

function Header() {
    const [Categories, setCategories]=useState([
       
        'Milk & Dairy',
        'Fruits & Juice',
        'Vegitables',
        'Clothing & Beauty',
        'Groceries',
        'Baking Material'
    ])

    useEffect(()=>{
        getCountry('https://countriesnow.space/api/v0.1/countries/')
    },[]);

    const countrylist=[];
    const getCountry=async(url)=>{
        try{
           await axios.get(url,countrylist).then((res)=>{
            if(res!=null){
                // console.log(res.data.data)
                res.data.data.map((item)=>{
                    console.log(item.country)
                    countrylist.push(item.country)

                })
            }
           })
        }
        catch(error){
             console.log(error.message)
        }
    }
      
  
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
                     <Select data={Categories} placeholder= {'All Categories'} icon={false}/>
                        <div className='Search'> 
                        <input type="text" placeholder='Search for items...' />
                        <SearchIcon className='SearchIcon cursor'/>
                        </div>
                    </div>
                </div>
                <div className='col-sm-5 d-flex align-items-center'>
                    <div className='selectCountry'>
                   <Select data={countrylist} placeholder= {'Your location'} icon={<LocationOnOutlined style={{Opacity:'0.3',fontSize:'17px'}}/> } />
                   </div>
                </div>
            </div>
        </div>
       </header>
        </>
    )
}

export default Header
 