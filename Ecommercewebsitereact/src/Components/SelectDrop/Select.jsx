import React, { useState } from 'react'
import '../SelectDrop/Select.css'
import { KeyboardArrowDown } from '@mui/icons-material'
import { ClickAwayListener } from '@mui/material'




function Select({data,placeholder,icon}) {
    const [isOpenSelect,setisOpenSelect]=useState(true)
    const [Selectedindex,setSelectedindex]=useState(0)
    const [Selecteditem,setSelecteditem]=useState(placeholder)

    function CloseSelect(index,cate){
        setSelecteditem(cate)
        setSelectedindex(index)
        setisOpenSelect(!isOpenSelect)
    }
    
    return (
        <> <ClickAwayListener onClickAway={()=>setisOpenSelect(false)}>
           <div className='selecrDrop cursor position-relative'>
            {icon}
            <span className='openSelect' onClick={()=>{setisOpenSelect(!isOpenSelect)}}> {Selecteditem} <KeyboardArrowDown className='arrow'/></span>
            { isOpenSelect===true &&
        <div className='selectDrop'>
            <div className='searchfield'>
                <input type="text"  placeholder='Search here'/>
            </div>

            <ul className='searchResults'>
                {
                    data.map((item,index)=>{
                        return(
                                <li onClick={()=>CloseSelect(index,item)} className={`${Selectedindex=== 0? 'active' : '' }`}>{item}</li>
                              )     } )
                }
              
            </ul>
        </div>}
        {/* <span className='selectpipe'>|</span> */}
        </div>
        </ClickAwayListener>
        </>
    )
}

export default Select
