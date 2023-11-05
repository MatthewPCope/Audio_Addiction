import React, { useState } from 'react'
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const LotteryForm = (props) => {
    const navigate = useNavigate(); 
    const [brand, setBrand] = useState("");
    const [model, setModel] = useState("");
    const [price, setPrice] = useState("");
    const [thoughts, setThoughts] = useState("")
    const [errors, setErrors] = useState({})

    const onSubmitHandler = (e) => {

        e.preventDefault();

        axios.post('http://localhost:8000/api/lottery', {
            brand,
            model,
            price,
            thoughts
        })
            .then((res)=>{
                setBrand("");
                setModel("");
                setPrice("");
                setThoughts("")
                navigate('/lotterylist');
            })
            .catch(err=> {
                setErrors(err.response.data.errors)
            })
                
            

    }
    
    return (
        <>
        <div >
            <h1 className=' font text-center mb-3 mt-5'>Dream On</h1>
                <h3 className=' font6 text-center mb-3 '>Add your dream gear</h3>
                    <div id='container2'>
                        <div className= 'font6 box p-4 my-3'>
                            <form onSubmit={onSubmitHandler}>
                                <div className='form-group mb-4'>
                                    <label htmlFor="brand" className='form-label'>Brand:</label><br/>
                                    <input className='form-control' type="text" value = {brand} id="brand" name = "brand" onChange = {(e)=>setBrand(e.target.value)}/>
                                    { errors.brand ? 
                                    <p>{errors.brand.message}</p>
                                    : null
                                    }
                                </div>
                                <div className='form-group mb-4'>
                                    <label htmlFor="model" className='form-label'>Model:</label><br/>
                                    <input className='form-control' type="text" id="model" value = {model} name = "model" onChange = {(e)=>setModel(e.target.value)}/>
                                    { errors.model ? 
                                    <p>{errors.model.message}</p>
                                    : null
                                    }
                                </div>
                                <div className='form-group mb-4'>
                                    <label htmlFor="price" className='form-label'>Price:</label><br/>
                                    <input className='form-control' type="text" id="price" value = {price} name = "price" onChange = {(e)=>setPrice(e.target.value)}/>
                                    { errors.price ? 
                                    <p>{errors.price.message}</p>
                                    : null
                                    }
                                </div>
                                <div className='form-group mb-4'>
                                    <label htmlFor="thoughts" className='form-label'>Thoughts: (You can add your thoughts later)</label><br/>
                                    <textarea className='form-control' type="text" id="thoughts" rows="4" cols="50" value = {thoughts} name = "thoughts" onChange = {(e)=>setThoughts(e.target.value)}/>
                                </div>
                                    
                                
                                <div className='d-flex justify-content-evenly'>
                                    <div>
                                        <Link to={'/'}>
                                            <button className=' font6 button2' >Home</button>
                                        </Link>
                                    </div>
                                    <div>
                                        <button className=' font6 button'>Submit</button>
                                    </div>
                                    <div>
                                        <Link to={'/lotterylist'}>
                                            <button className=' font6 button2' >View List</button>
                                        </Link>
                                    </div>
                                </div>
                            </form>
                        </div>
                </div>
            </div>
        </>
    )
}
export default LotteryForm;
            
                