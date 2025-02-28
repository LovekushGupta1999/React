import {nextdata} from './Child1'

const Child4=()=>{
    return(
        <>
        <nextdata.Consumer >
            {
                (nexdata)=>{
                    return(
                        <h1>this is my age {nexdata}</h1>
                    )
                }
            }
        </nextdata.Consumer>
        
        </>
    )
}
export default Child4