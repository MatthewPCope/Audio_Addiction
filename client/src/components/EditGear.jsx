import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from "react-router-dom";
import {Link} from 'react-router-dom';

const EditGear = (props) => {
    const { id } = useParams();
    const [category, setCategory] = useState(""); 
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
                setCategory(res.data.category);
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
            category,
            brand,
            model,
            price,
            thoughts
        })
            .then((res) => {
                console.log(res.data);
                navigate("/gearlist");
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
    const options = [
        { value: 'select', label: 'Select...' },
        { value: 'electric guitar', label: 'Electric Guitar' },
        { value: 'acoustic guitar', label: 'Acoustic Guitar' },
        { value: 'bass', label: 'Bass' },
        { value: 'drums', label: 'Drums' },
        { value: 'microphones', label: 'Microphones' },
        { value: 'pedals', label: 'Pedals' },
        { value: 'recording', label: 'Recording' },
        { value: 'live sound', label: 'Live Sound' }
    ]
    
    return (
        <div>
            <h1 className="font text-center mt-5 mb-2">Edit your Gear</h1>
            <div id = "container2">
                <div className= 'box p-4 my-3'>
                    <form onSubmit={submitHandler}>
                    <div className=' form-group mb-4'>
                                    <label className='form-label'>Category:</label><br/>
                                    <select className='form-select' name='category' value={category} onChange = {(e)=>setCategory(e.target.value)}>
                                        {options.map(option => (
                                            <option value={option.value}>{option.label}</option>
                                        ))}
                                    
                                    </select>
                                    { errors.category ? 
                                    <p>{errors.category.message}</p>
                                    : null
                                    }
                                </div>
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
                                
                                <div className='text-center'>
                                    <button className='button2'>Submit</button>
                                </div>
                                <div className='text-center mt-3'>
                                    <Link to={'/gearlist'}>Nevermind</Link>
                                </div>
                                <div className='text-center mt-3'>
                                    <button onClick={deleteGear}>Sold It</button>
                                </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default EditGear;