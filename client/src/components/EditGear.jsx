import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from "react-router-dom";
import {Link} from 'react-router-dom';

const EditGear = (props) => {
    const { id } = useParams();
    const [brand, setBrand] = useState("");
    const [model, setModel] = useState("");
    const [price, setPrice] = useState("");
    const [thoughts, setThoughts] = useState("")
    const [errors, setErrors] = useState({})
    const navigate = useNavigate();
    
    useEffect(() => {
        axios
            .get(`http://localhost:8000/api/gear/${id}`)
            .then((res) => {
                setBrand(res.data.brand);
                setModel(res.data.model)
                setPrice(res.data.price)
                setThoughts(res.data.thoughts)
            })
            .catch(err => console.log(err))
    }, [])
    const submitHandler = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:8000/api/gear/${id}`,{
            brand,
            model,
            price,
            thoughts
        })
            .then((res) => {
                console.log(res.data);
                navigate(`/gear/${id}`);
            })
            .catch((err) => {
                setErrors(err.response.data.errors)
            })
            
    }
    const deleteGear = () => {
        axios.delete(`http://localhost:8000/api/gear/${id}`)
            .then((res) => {
                navigate("/gearlist");
            })
            .catch((err) => {
                console.log(err);
            })
    }
    
    return (
        <div>
            <h1 className="font text-center mt-5 mb-2">Edit your Gear</h1>
            <div id = "container2">
                <div className= 'font6 box p-4 my-3'>
                    <form onSubmit={submitHandler}>
                        <div className='form-group mb-4'>
                            <label className='form-label'>Brand:</label><br/>
                            <input className='form-control' type="text" value = {brand} name = "brand" onChange = {(e)=>setBrand(e.target.value)}/>
                            { errors.brand ? 
                            <p>{errors.brand.message}</p>
                            : null
                            }
                        </div>
                        <div className='form-group mb-4'>
                            <label className='form-label'>Model:</label><br/>
                            <input className='form-control' type="text" value = {model} name = "model" onChange = {(e)=>setModel(e.target.value)}/>
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
                            <label htmlFor="thoughts" className='form-label'>Thoughts:</label><br/>
                            <textarea className='form-control' type="text" id="thoughts" rows="4" cols="50" value = {thoughts} name = "thoughts" onChange = {(e)=>setThoughts(e.target.value)}/>
                        </div>
                        <div className='d-flex justify-content-evenly'>
                        <div>
                            <Link to={'/gearlist'}>
                                <button className=' font6 button2' >View Gear</button>
                            </Link>
                        </div>
                        <div className=''>
                            <button className='button'>Submit</button>
                        </div>
                        <div>
                            <button className='button2' onClick={deleteGear}>Sold It</button>
                        </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default EditGear;