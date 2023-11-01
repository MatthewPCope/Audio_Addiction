import React, { useState } from 'react'
// import axios from 'axios';
import {Link} from 'react-router-dom'

const Main = (props) => {

    
    
    return (
        <div>
            <h1 className=' font text-center mt-5'>My Audio Addiction</h1>
            <h5 className='font6 text-center'> Have a lot of gear?</h5>
            <h5 className='font6 text-center'> Keep track of it here.</h5>
            <div>
                
                <div className=' mt-5 mb-5'>
                    <div className=' columns '>
                        <div>
                            <Link to={'/gearform'}>
                                <button className="box3  font7 circle-buttons eguitars"> Add Your Gear</button>
                            </Link>
                        </div>
                    
                        <div>
                            <Link to={'/wishform'}>
                                <button className="box3 font7 circle-buttons aguitars">careful what you wish for</button>
                            </Link>
                        </div>
                    
                        <div>
                            <Link to={'/gearlist'}>
                                <button className="box3 font7 circle-buttons basses">If I won the Lottery</button>
                            </Link>
                        </div>
                    </div>
                </div>
                    
                
                <div className=' mt-5 mb-5'>
                    <div className='columns'>
                        <div>
                            <Link to={'/gearlist'}>
                                <button className="box3 font7 circle-buttons microphones">Gear</button>
                            </Link>
                        </div>
                    
                        <div>
                            <Link to={'/wishlist'}>
                                <button className="box3  font7 circle-buttons pedals">Wishes</button>
                            </Link>
                        </div>
                    
                        <div>
                            <Link to={'/gearlist'}>
                                <button className="box3  font7 circle-buttons drums">Lottery</button>
                            </Link>
                        </div>
                    </div>
                </div>
                {/* <div className=' mt-5 mb-5'>
                    <div className='columns1'>
                        <Link to={'/gearlist'}>
                        <button className=" box2  eguitars "></button>
                        </Link>
                    
                            
                        <div className="box2  aguitars ">
                            
                        </div>
                        <div className="box2 basses">
                            
                        </div>  
                        
                    </div>
                </div> 
                <div >
                    <div className='columns1'>
                        <div className="box2  microphones ">
                            
                        </div>   
                        <div className="box2  pedals">
                            
                        </div>
                        <div className="box2  recording">
                            
                        </div>
                        
                    </div>
                </div> */}
            </div>
        </div>
    )
}

export default Main;
