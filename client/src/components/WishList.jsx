import React, {useEffect, useState} from 'react'
import {Link} from 'react-router-dom';
import axios from 'axios';  

const WishList = (props) => {
    
    const [wishList, setWishList] = useState([]);
    const {mainUser, setMainUser} = props;
    useEffect(()=>{
    	axios.get("http://localhost:8000/api/wish")
    	.then((res)=>{
	    console.log(res.data);
            setWishList(res.data);
            // setMainUser(res.data)
            console.log(mainUser)
            console.log(res.data)
	})
    	.catch((err)=>{
            console.log(err);
    	})
    }, [])

    const deleteWish = (idFromBelow) => {
        axios.delete(`http://localhost:8000/api/wish/${idFromBelow}`)
            .then((res) => {
                const newList = wishList.filter((wish, index) => wish._id != idFromBelow)
                setWishList(newList);
            })
            .catch((err) => {
                console.log(err);
            })
    }

    
    
    return (
        <div >
            <h1 className=' font text-center mb-3 mt-5'>Wish List</h1>
                <div className='text-center'>
                    <Link to={'/wishform'}>
                        <button className=' font2 button' >careful what you wish for</button>
                    </Link>
                </div>
                <div id="container2" className='font6' >
            <table className=" table2 w-75 border-dark border-4 text-center table-bordered ">
                    <thead >
                        <tr >
                            <th className='p-3' scope="col">Category</th>
                            <th scope="col">Brand</th>
                            <th scope="col">Model</th>
                            <th scope="col" >Price</th>
                            <th scope="col" colspan="2">Actions Available</th>
                        </tr>
                    </thead>
                {
                    wishList.map((wish, index)=>{
                        
                        return (
                            <>
                    <tbody>
                        <tr className=''>
                        <td className='p-3'>
                            <Link key={index} to={`/wish/${wish._id}`}>
                                <button className=" button3">{wish.category} </button>
                            </Link></td>
                            <td>{wish.brand}</td>
                            <td>{wish.model}</td>
                            <td>${wish.price}</td>
                            <td><Link to={`/wish/edit/${wish._id}`}>Edit</Link></td>
                            {/* <form onSubmit={onSubmitHandler}> */}
                            <td><button className='button3' onClick={() => deleteWish(wish._id)}>Delete</button></td>
                            {/* </form> */}
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
export default WishList;