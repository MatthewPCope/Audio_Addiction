import React, { useState } from 'react'
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const GearForm = (props) => {
    const navigate = useNavigate();
    
    const [category, setCategory] = useState(""); 
    const [brand, setBrand] = useState("");
    const [model, setModel] = useState("");
    const [price, setPrice] = useState("");
    const [thoughts, setThoughts] = useState("")
    const [errors, setErrors] = useState({})

    const onSubmitHandler = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/gear', {
            category,
            brand,
            model,
            price,
            thoughts
        })
            .then((res)=>{
                setCategory("");
                setBrand("");
                setModel("");
                setPrice("");
                setThoughts("")
                navigate('/gearlist');
            })
            .catch(err=> {
                setErrors(err.response.data.errors)
            })
        }

    const options = [
        { value: 'electric guitar', label: 'Select...' },
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
            <>
            <div >
                <h1 className=' font text-center mb-5 mt-5'>Add Gear</h1>
                
                    
                        <div id='container2'>
                            <div className= 'font5 box p-4 my-3'>
                                <form onSubmit={onSubmitHandler}>
                                
                                    <div className=' form-group mb-4'>
                                        <label htmlFor="category" className='form-label'>Category:</label><br/>
                                        <select className='form-select' name='category' id="category" onChange = {(e)=>setCategory(e.target.value)}>
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
                                        
                                    
                                    <div className='text-center'>
                                        <button className='button2'>Submit</button>
                                    </div>
                                    <div className='text-center'>
                                    <Link to={'/'}>
                                        <button className=' font6 button' >Nevermind</button>
                                    </Link>
                                    </div>
                                </form>
                            </div>
                    </div>
                </div>
            </>
        )
    }
    export default GearForm;


                
            
