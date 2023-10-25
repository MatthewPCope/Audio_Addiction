import React, {useEffect, useState} from 'react'
import {Link} from 'react-router-dom';
import axios from 'axios';  

const GearList = (props) => {
    
    const [gearList, setGearList] = useState([]);
    const {mainUser, setMainUser} = props;
    useEffect(()=>{
    	axios.get("http://localhost:8000/api/gear")
    	.then((res)=>{
	    console.log(res.data);
            setGearList(res.data);
            setMainUser(res.data)
            console.log(mainUser)
            console.log(res.data)
	})
    	.catch((err)=>{
            console.log(err);
    	})
    }, [])

    const deleteGear = (idFromBelow) => {
        axios.delete(`http://localhost:8000/api/gear/${idFromBelow}`)
            .then((res) => {
                const newList = gearList.filter((gear, index) => gear._id != idFromBelow)
                setGearList(newList);
                
            })
            .catch((err) => {
                console.log(err);
            })
    }
    
    return (
        <div >
            <h1 className=' font text-center mb-3 mt-5'>All Your Gear</h1>
                <div className='text-center'>
                    <Link to={'/gearform'}>
                        <button className=' font2 button' >Add Gear</button>
                    </Link>
                </div>
                <div id="container2" >
            <table className=" table2 w-75 border-dark border-4 text-center table-bordered ">
                    <thead >
                        <tr >
                            <th className='p-3' scope="col">Category</th>
                            <th scope="col">Brand</th>
                            <th scope="col">Model</th>
                            <th scope="col" colspan="2">Actions Available</th>
                        </tr>
                    </thead>
                {
                    gearList.map((gear, index)=>{
                        
                        return (
                            <>
                    <tbody>
                        <tr className=''>
                        <td className='p-3'>
                            <Link key={index} to={`/gear/${gear._id}`}>
                                <button className=" button3">{gear.category} </button>
                            </Link></td>
                            <td>{gear.brand}</td>
                            <td>{gear.model}</td>
                            <td><Link to={`/gear/edit/${gear._id}`}>Edit</Link></td>
                            <td><button className='button3' onClick={() => deleteGear(gear._id)}>Sold It</button></td>
                        </tr>
                    </tbody>
                    </>
        )})
    }
    </table>
    </div>
            </div>
)
}
export default GearList;


